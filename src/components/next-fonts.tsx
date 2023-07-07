import { Major_Mono_Display } from "next/font/google";

const majorMonoDisplay = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400",
});

export const majorMonoDisplayClass = majorMonoDisplay.className;
