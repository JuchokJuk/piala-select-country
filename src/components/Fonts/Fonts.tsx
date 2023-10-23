import { ReactNode } from "react";

import cx from "classnames";

import styles from "./Fonts.module.scss";

import { IBM_Plex_Serif, PT_Sans } from "next/font/google";

const IBMPlexSerif = IBM_Plex_Serif({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
  variable: "--IBM-plex-serif",
});

const PTSans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
  variable: "--PT-sans",
});

export default function Fonts({ children }: { children: ReactNode }) {
  return <div className={cx(styles.fonts, IBMPlexSerif.variable, PTSans.variable)}>{children}</div>;
}
