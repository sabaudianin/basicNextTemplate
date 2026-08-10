import { ImageResponse } from "next/og";
import { siteConfig } from "@/constants/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
        color: "#fff",
      }}
    >
      <div style={{ fontSize: 64, fontWeight: 700 }}>{siteConfig.name}</div>
      {/* TODO:  */}
      <div style={{ fontSize: 28, marginTop: 16, opacity: 0.7 }}>
        {siteConfig.description}
      </div>
    </div>,
    { ...size },
  );
}
