import { NextFont } from "next/dist/compiled/@next/font";
import { Major_Mono_Display } from "next/font/google";

const majorMonoDisplay: NextFont = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400",
});

export const majorMonoDisplayClass: string = majorMonoDisplay.className;
