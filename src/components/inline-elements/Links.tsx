"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "./Links.module.scss";

import Link from "next/link";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export const InlineLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className={Styles.inlineContainer}>
      <span className={Styles.text}>{children}</span>
      <div className={Styles.overlay}>
        <FontAwesomeIcon icon={faLink} />
      </div>
    </Link>
  );
};
