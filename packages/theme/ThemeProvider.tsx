"use client";

import React from "react";
import { Theme } from "@radix-ui/themes";

type ThemeProviderProps = {
  children: React.ReactNode;
  appearance?: "light" | "dark";
  accentColor?:
    | "crimson"
    | "ruby"
    | "gray"
    | "gold"
    | "bronze"
    | "brown"
    | "yellow"
    | "amber"
    | "orange"
    | "tomato"
    | "red"
    | "pink"
    | "plum"
    | "purple"
    | "violet"
    | "iris"
    | "indigo"
    | "blue"
    | "cyan"
    | "teal"
    | "jade"
    | "green"
    | "grass"
    | "lime"
    | "mint"
    | "sky";
  radius?: "small" | "medium" | "large";
};

export const ThemeProvider = ({
  children,
  appearance = "light",
  accentColor = "crimson",
  radius = "medium",
}: ThemeProviderProps) => {
  return (
    <Theme appearance={appearance} accentColor={accentColor} radius={radius}>
      {children}
    </Theme>
  );
};
