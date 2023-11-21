"use client";

import { section, child } from "./types";

import { majorMonoDisplayClass } from "../next-fonts";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import Styles from "./Navbar.module.scss";

// TODO: Uncomment Blog & Contact section as soon as pages are complete.
const sections: section[] = [
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  // TODO: Uncomment Blog section as soon as there's some blog content.
  // {
  //   label: "Blog",
  //   href: "/blog",
  // },
  {
    label: "About",
    href: "/about",
    children: [
      {
        label: "Timeline",
        href: "/about/timeline",
      },
      {
        label: "Resume",
        href: "/about/resume",
      },
    ],
  },
  // TODO: Uncomment contact page as soon as a contact form is made.
  // {
  //   label: "Contact",
  //   href: "/contact",
  // },
  // TODO: Uncomment Others section as soon as there is some additional content to add.

  // {
  //   label: "Others",
  //   href: "/other",
  //   children: [
  //     {
  //       label: "Tools",
  //       href: "/other/tools",
  //     },
  //     {
  //       label: "Links",
  //       href: "/other/links",
  //     },
  //     {
  //       label: "Attributes",
  //       href: "/other/attributes",
  //     },
  //   ],
  // },
];

export default function Navbar({ className }: { className?: string }) {
  return (
    <nav className={`${majorMonoDisplayClass} ${Styles.navbar} ${className}`}>
      {sections.map((section) => {
        return <NavSection section={section} key={Math.random().toString()} />;
      })}
    </nav>
  );
}

const NavSection = ({ section }: { section: section }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("0px");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  useEffect(() => {
    setIsActive(section.href == `/${pathName.split("/")[1]}`);
  }, [pathName]);

  // Get height of element inside dropdown
  useEffect(() => {
    if (section.children) {
      const dropdown = dropdownRef.current.children[0] as HTMLElement;
      let dropdownHeight =
        parseInt(dropdown.offsetHeight.toString(), 10) +
        // @ts-ignore
        parseInt(getComputedStyle(dropdown)["margin-top"], 10) +
        // @ts-ignore
        parseInt(getComputedStyle(dropdown)["margin-bottom"], 10) +
        "px";

      setHeight(dropdownHeight);
    }
  }, []);

  return (
    <div
      className={Styles.container}
      onMouseEnter={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <Link
        href={section.href}
        className={`${Styles.navlink} ${isActive && Styles.activeLink}`}
        onClick={() => {
          setIsActive(true);
        }}
      >
        {section.label}
      </Link>

      {section.children && (
        <div
          className={Styles.dropdown}
          style={{ maxHeight: isOpen || isActive ? height : "0px" }}
          ref={dropdownRef}
        >
          <SubNavbar childs={section.children} />
        </div>
      )}
    </div>
  );
};

const SubNavbar = ({ childs }: { childs: child[] }) => {
  return (
    <div className={Styles.subnavbar}>
      {childs.map((child: child) => {
        return <SubNavItem child={child} key={Math.random().toString()} />;
      })}
    </div>
  );
};

const SubNavItem = ({ child }: { child: child }) => {
  const [isActive, setIsActive] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setIsActive(
      child.href == `/${pathName.split("/")[1]}/${pathName.split("/")[2]}`
    );
  }, [pathName]);

  return (
    <Link
      href={child.href}
      className={`${Styles.subnavlink} ${isActive && Styles.activeLink}`}
    >
      {child.label}
    </Link>
  );
};
