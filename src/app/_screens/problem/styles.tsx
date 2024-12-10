import { tv } from "tailwind-variants";

export const TvSectionProblem = tv({
  slots: {
    base: "py-[9.6rem]",
    container: "flex flex-wrap items-center justify-between gap-[3.2rem] ",
    artProblem: "max-w-[61.6rem] h-fit",
    text: "w-full max-w-[70rem] flex flex-col gap-[2.4rem]",
    h2: "text-brand-300",
    p: "text-gray-800",
    list: "w-full flex flex-wrap gap-[3.2rem]",
    itemList:
      "flex items-center gap-[0.8rem] w-full min-w-[26.4rem] max-w-[30rem]",
    iconItem: "p-[0.8rem] bg-brand-200 rounded-[0.8rem] w-[4rem] h-[4rem]",
    textItem: "text-brand-100",
  },
});
