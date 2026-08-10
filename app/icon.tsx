import { ImageResponse } from "next/og";
import { siteConfig } from "@/constants/site";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 20,
        fontWeight: 700,
        background: "#000",
        color: "#fff",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
      }}
    >
      {/* TODO:  */}
      {siteConfig.name.charAt(0)}
    </div>,
    { ...size },
  );
}
