import { tv } from "tailwind-variants";

export const TvSectionHero = tv({
  slots: {
    base: "pt-[25.2rem] pb-[9.6rem]",
    container: "flex flex-col gap-[11.6rem] items-center",
    content: "flex flex-col gap-[3.2rem] items-center w-full max-w-[80rem]",
    headline: "text-center text-brand-100 w-full",
    subheadline: "text-center text-gray-800 w-full",
  },
});
