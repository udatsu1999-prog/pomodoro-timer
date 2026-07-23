import { ANSWER_OPTIONS } from "@/data/questions";

interface QuestionCardProps {
  questionText: string;
  selectedValue: number | null;
  onSelect: (value: number) => void;
}

export default function QuestionCard({
  questionText,
  selectedValue,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
      <p className="mb-6 text-lg font-semibold leading-relaxed text-text">
        {questionText}
      </p>
      <div className="flex flex-col gap-3">
        {ANSWER_OPTIONS.map((option) => {
          const isSelected = selectedValue === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelect(option.value)}
              aria-pressed={isSelected}
              className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                isSelected
                  ? "border-blue bg-blue/10 text-navy"
                  : "border-slate-200 bg-white text-text hover:border-blue/50 hover:bg-bg-soft"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
