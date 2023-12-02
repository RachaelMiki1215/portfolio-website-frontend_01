import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { JetBrains_Mono, Major_Mono_Display } from "next/font/google";

export const majorMonoDisplay: NextFontWithVariable = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-major-mono-display",
});

export const jetbrainsMonoNormal: NextFontWithVariable = JetBrains_Mono({
  subsets: ["latin"],
  weight: "100",
  variable: "--font-jetbrains-mono-normal",
});

export const jetbrainsMonoBold: NextFontWithVariable = JetBrains_Mono({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-jetbrains-mono-bold",
});
