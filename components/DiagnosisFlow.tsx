"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { questions, TOTAL_QUESTIONS } from "@/data/questions";
import { calculateResult } from "@/lib/calculateResult";
import {
  trackDiagnosisComplete,
  trackDiagnosisRestart,
  trackDiagnosisStart,
  trackQuestionAnswer,
} from "@/lib/analytics";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";

const STORAGE_KEY = "career-maigo-shindan:answers";

interface StoredState {
  currentIndex: number;
  answers: (number | null)[];
}

function createEmptyAnswers(): (number | null)[] {
  return Array(TOTAL_QUESTIONS).fill(null);
}

interface FlowState {
  hydrated: boolean;
  currentIndex: number;
  answers: (number | null)[];
}

function loadInitialState(): Omit<FlowState, "hydrated"> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as StoredState;
      if (Array.isArray(parsed.answers) && parsed.answers.length === TOTAL_QUESTIONS) {
        return {
          answers: parsed.answers,
          currentIndex: Math.min(
            Math.max(parsed.currentIndex ?? 0, 0),
            TOTAL_QUESTIONS - 1
          ),
        };
      }
    }
  } catch {
    // 破損データは無視して最初から開始する
  }
  trackDiagnosisStart();
  return { answers: createEmptyAnswers(), currentIndex: 0 };
}

export default function DiagnosisFlow() {
  const router = useRouter();
  const [flow, setFlow] = useState<FlowState>({
    hydrated: false,
    currentIndex: 0,
    answers: createEmptyAnswers(),
  });
  const { hydrated, currentIndex, answers } = flow;

  useEffect(() => {
    // localStorageはブラウザにしか存在しないため、マウント後の一度だけ読み込んで反映する。
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFlow({ hydrated: true, ...loadInitialState() });
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const state: StoredState = { currentIndex, answers };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [answers, currentIndex, hydrated]);

  if (!hydrated) {
    return null;
  }

  const question = questions[currentIndex];
  const selectedValue = answers[currentIndex];
  const isLastQuestion = currentIndex === TOTAL_QUESTIONS - 1;
  const canProceed = selectedValue !== null;

  const handleSelect = (value: number) => {
    trackQuestionAnswer(question.id, value);
    setFlow((prev) => {
      const nextAnswers = [...prev.answers];
      nextAnswers[prev.currentIndex] = value;
      return { ...prev, answers: nextAnswers };
    });
  };

  const handleBack = () => {
    setFlow((prev) => ({
      ...prev,
      currentIndex: Math.max(prev.currentIndex - 1, 0),
    }));
  };

  const handleNext = () => {
    if (!canProceed) return;

    if (!isLastQuestion) {
      setFlow((prev) => ({ ...prev, currentIndex: prev.currentIndex + 1 }));
      return;
    }

    const finalAnswers = answers.map((value) => value ?? 3);
    const { slug } = calculateResult(finalAnswers);
    trackDiagnosisComplete(slug);
    window.localStorage.removeItem(STORAGE_KEY);
    router.push(`/result/${slug}`);
  };

  const handleRestart = () => {
    trackDiagnosisRestart();
    window.localStorage.removeItem(STORAGE_KEY);
    setFlow({ hydrated: true, answers: createEmptyAnswers(), currentIndex: 0 });
  };

  return (
    <div className="flex flex-col gap-6">
      <ProgressBar current={currentIndex + 1} total={TOTAL_QUESTIONS} />

      <QuestionCard
        questionText={question.text}
        selectedValue={selectedValue}
        onSelect={handleSelect}
      />

      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={handleBack}
          disabled={currentIndex === 0}
          className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-text transition-colors hover:bg-bg-soft disabled:cursor-not-allowed disabled:opacity-40"
        >
          前の質問へ
        </button>

        <button
          type="button"
          onClick={handleNext}
          disabled={!canProceed}
          className="flex-1 rounded-full bg-orange px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isLastQuestion ? "結果を見る" : "次へ"}
        </button>
      </div>

      <button
        type="button"
        onClick={handleRestart}
        className="self-center text-xs text-text-sub underline hover:text-navy"
      >
        最初からやり直す
      </button>
    </div>
  );
}
