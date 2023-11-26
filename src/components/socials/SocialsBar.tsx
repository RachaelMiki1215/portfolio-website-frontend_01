"use client";

import {
  faLinkedin,
  faGithub,
  faCodepen,
  // faInstagram,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CodesandboxLogo } from "@phosphor-icons/react";
import Link from "next/link";

import Styles from "./SocialsBar.module.scss";

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rachael-buxton",
    icon: <FontAwesomeIcon icon={faLinkedin} />,
    isInternal: false,
  },
  {
    name: "GitHub",
    url: "https://github.com/RachaelMiki1215",
    icon: <FontAwesomeIcon icon={faGithub} />,
    isInternal: false,
  },
  {
    name: "CodePen",
    url: "https://codepen.io/rachaelmiki1215",
    icon: <FontAwesomeIcon icon={faCodepen} />,
    isInternal: false,
  },
  {
    name: "CodeSandbox",
    url: "https://codesandbox.io/u/RachaelMiki1215",
    icon: <CodesandboxLogo />,
    isInternal: false,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/RachaelMiki1215",
    icon: <FontAwesomeIcon icon={faXTwitter} />,
    isInternal: false,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UC2IpOSh_fvmYSqzHZ2ZR3Bw",
    icon: <FontAwesomeIcon icon={faYoutube} />,
    isInternal: false,
  },
  // TODO: Uncomment as soon as I have more IG content.

  // {
  //   name: "Instagram",
  //   url: "https://www.instagram.com/mikimonmon1215/",
  //   icon: <FontAwesomeIcon icon={faInstagram} />,
  //   isInternal: true,
  // },
  // TODO: Uncomment Email section as soon as pages are complete.
  // {
  //   name: "Email",
  //   url: "/contact",
  //   icon: <FontAwesomeIcon icon={faEnvelope} />,
  //   isInternal: true,
  // },
];

interface SocialsBarProps {
  className?: string;
}

const SocialsBar: React.FC<SocialsBarProps> = ({ className }) => {
  return (
    <ul className={`${Styles.socialsList} ${className}`}>
      {socials.map((social) => {
        if (social.isInternal) {
          return (
            <Link href={social.url} key={Math.random().toString()}>
              {social.icon}
            </Link>
          );
        } else {
          return (
            <a href={social.url} target="_blank" key={Math.random().toString()}>
              {social.icon}
            </a>
          );
        }
      })}
    </ul>
  );
};

export default SocialsBar;
