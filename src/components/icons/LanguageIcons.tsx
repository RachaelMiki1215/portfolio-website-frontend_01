import {
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoJquery,
  BiLogoNodejs,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiCsharp,
  SiPowerapps,
  SiPowerautomate,
  SiBlazor,
} from "react-icons/si";
import { RiGatsbyFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";

import Styles from "./LanguageIcons.module.scss";

const iconDict = [
  {
    name: ["javascript"],
    caption: "JavaScript",
    icon: (
      <BiLogoJavascript
        className={Styles.languageIcon}
        style={{ color: "f0dc55" }}
      />
    ),
  },
  {
    name: ["html", "html5"],
    caption: "HTML5",
    icon: (
      <BiLogoHtml5
        className={Styles.languageIcon}
        style={{ color: "#e4552d" }}
      />
    ),
  },
  {
    name: ["css", "css3"],
    caption: "CSS3",
    icon: (
      <BiLogoCss3
        className={Styles.languageIcon}
        style={{ color: "#2d53e5" }}
      />
    ),
  },
  {
    name: ["typescript"],
    caption: "TypeScript",
    icon: (
      <BiLogoTypescript
        className={Styles.languageIcon}
        style={{ color: "#377cc8" }}
      />
    ),
  },
  {
    name: ["react", "reactjs"],
    caption: "React",
    icon: (
      <BiLogoReact
        className={Styles.languageIcon}
        style={{ color: "#66dbfb" }}
      />
    ),
  },
  {
    name: ["jquery"],
    caption: "jQuery",
    icon: (
      <BiLogoJquery
        className={Styles.languageIcon}
        style={{ color: "#0f77b6" }}
      />
    ),
  },
  {
    name: ["node.js"],
    caption: "Node.js",
    icon: (
      <BiLogoNodejs
        className={Styles.languageIcon}
        style={{ color: "#478d44" }}
      />
    ),
  },
  {
    name: ["next.js"],
    caption: "Next.js",
    icon: (
      <TbBrandNextjs
        className={Styles.languageIcon}
        style={{ color: "#ffffff" }}
      />
    ),
  },
  {
    name: ["c#"],
    caption: "C#",
    icon: (
      <SiCsharp className={Styles.languageIcon} style={{ color: "#25a12c" }} />
    ),
  },
  {
    name: ["ms power apps"],
    caption: "Microsoft Power Apps",
    icon: (
      <SiPowerapps
        className={Styles.languageIcon}
        style={{ color: "#613494" }}
      />
    ),
  },
  {
    name: ["ms power automate"],
    caption: "Microsoft Power Automate",
    icon: (
      <SiPowerautomate
        className={Styles.languageIcon}
        style={{ color: "#4a9afb" }}
      />
    ),
  },
  {
    name: ["blazor"],
    caption: "Blazor",
    icon: (
      <SiBlazor className={Styles.languageIcon} style={{ color: "#613494" }} />
    ),
  },
  {
    name: ["sass"],
    caption: "Sass",
    icon: (
      <FaSass className={Styles.languageIcon} style={{ color: "#cf6b9d" }} />
    ),
  },
  {
    name: ["gatsby"],
    caption: "Gatsby",
    icon: <RiGatsbyFill />,
  },
];

const LanguageIcon: React.FC<{ name: string }> = ({ name }) => {
  const matchingIcons = iconDict.filter((i) =>
    i.name.includes(name.toLowerCase())
  );

  if (matchingIcons.length === 0) {
    return <span className={Styles.languageName}>{name}</span>;
  }

  return (
    <span className={Styles.languageIconDisplay}>
      {matchingIcons[0].icon}
      <span className={Styles.languageName}>{matchingIcons[0].caption}</span>
    </span>
  );
};

export default LanguageIcon;
