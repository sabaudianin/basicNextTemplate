import { ImageResponse } from "next/og";
import { siteConfig } from "@/constants/site";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 96,
        fontWeight: 700,
        background: "#000",
        color: "#fff",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {siteConfig.name.charAt(0)}
    </div>,
    { ...size },
  );
}
