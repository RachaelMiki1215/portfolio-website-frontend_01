"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "./Links.module.scss";

import Link from "next/link";
import { faLink } from "@fortawesome/free-solid-svg-icons";

type InlineLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const InlineLink: React.FC<InlineLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} className={Styles.inlineContainer}>
      <span className={Styles.text}>{children}</span>
      <span className={Styles.overlay}>
        <FontAwesomeIcon icon={faLink} />
      </span>
    </Link>
  );
};
