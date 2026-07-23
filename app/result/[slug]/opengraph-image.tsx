import { ImageResponse } from "next/og";
import { getResultBySlug, zones } from "@/data/results";
import { siteConfig } from "@/lib/siteConfig";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ResultOpengraphImage({ params }: Props) {
  const { slug } = await params;
  const result = getResultBySlug(slug);
  const zoneName = result ? zones[result.zoneId].name : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1F3A5F 0%, #4A90E2 100%)",
          color: "#FFFFFF",
          padding: 80,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 28, color: "#E5EEF9" }}>{siteConfig.name}</div>
        {result && (
          <>
            <div
              style={{
                marginTop: 16,
                fontSize: 24,
                color: "#FF8A3D",
                fontWeight: 700,
              }}
            >
              {zoneName}
            </div>
            <div style={{ marginTop: 12, fontSize: 60, fontWeight: 900 }}>
              {result.name}
            </div>
            <div style={{ marginTop: 24, fontSize: 28, color: "#E5EEF9" }}>
              {result.catchcopy}
            </div>
          </>
        )}
      </div>
    ),
    { ...size }
  );
}
