import { TypeProvider } from "@/types";

import { cn } from "@/functions";

import { TvContainer } from "./styles";

export const Container = ({ children, className }: TypeProvider) => {
  return <main className={cn(TvContainer(), className)}>{children}</main>;
};
