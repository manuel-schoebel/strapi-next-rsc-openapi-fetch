import React, { ReactNode } from "react";

interface IHeadline {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children?: ReactNode;
  id?: string;
}

export function Headline({
  variant = "h2",
  className = "",
  children,
  id,
}: IHeadline): JSX.Element {
  switch (variant) {
    case "h1":
      return (
        <h1
          id={id}
          className={`font-argentum font-black dark:text-light text-4xl sm:text-5xl ${className}`.trim()}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          id={id}
          className={`font-argentum font-semibold dark:text-light text-2xl md:text-4xl ${className}`.trim()}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 id={id} className={`dark:text-light text-xl ${className}`.trim()}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 id={id} className={`${className}`.trim()}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 id={id} className={`${className}`.trim()}>
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 id={id} className={`${className}`.trim()}>
          {children}
        </h6>
      );
  }
}
