import { ContentAreaProps } from "@/types/ContentArea";
import { createContext } from "react";

const ContentContext = createContext<ContentAreaProps>({
    width: 0,
    height: 0,
  });

export default ContentContext;