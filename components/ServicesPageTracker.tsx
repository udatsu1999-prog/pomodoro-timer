"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { trackServicesPageView } from "@/lib/analytics";

export default function ServicesPageTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    trackServicesPageView(searchParams.get("from") ?? undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
