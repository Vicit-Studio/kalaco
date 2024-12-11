import { tv } from "tailwind-variants";

export const TvService = tv({
  slots: {
    base: "py-[9.6rem]",
    container: "flex flex-col gap-[3.2rem]",
    title: "w-full flex flex-wrap gap-[3.2rem] items-center justify-between",
    action:
      "w-fit flex flex-col items-end gap-[0.8rem] pr-[3.2rem] pb-[1.6rem] relative after:content-[''] after:absolute after:bottom-0 after:right-[0.4rem] after:w-full after:h-full after:bg-[url('/assets/line.svg')] after:pointer-events-none",
    h2: "text-brand-300 w-full max-w-[50rem]",
    p: "w-[24.4rem] text-gray-600 text-right",
  },
});
