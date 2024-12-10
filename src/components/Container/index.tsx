"use client";

import { cn } from "@/functions";

import { TypeContainer } from "./container.type";

import { TvContainer } from "./styles";

export const Container = ({ children, className }: TypeContainer) => {
  return <main className={cn(TvContainer(), className)}>{children}</main>;
};
