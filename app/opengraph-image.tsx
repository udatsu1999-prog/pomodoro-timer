import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/siteConfig";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
        <div style={{ fontSize: 64, fontWeight: 900 }}>{siteConfig.name}</div>
        <div style={{ marginTop: 24, fontSize: 32, color: "#E5EEF9" }}>
          {siteConfig.catchcopy}
        </div>
      </div>
    ),
    { ...size }
  );
}
