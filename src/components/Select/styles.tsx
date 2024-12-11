import { tv } from "tailwind-variants";

export const TvSelect = tv({
  slots: {
    base: "w-fit h-fit relative group transition-transform duration-300",
    icon: "z-20 absolute cursor-pointer right-[1.6rem] top-[50%] translate-y-[-50%] group-hover:rotate-180 focus-within:rotate-180 transition-transform duration-300",
    select:
      "cursor-pointer appearance-none text-brand-300 w-full max-w-[33.2rem] min-w-[30rem] h-[4.8rem] bg-[#3F3F4608] rounded-[1.4rem] border border-brand-300 px-[1.6rem] py-[0.8rem] focus:border-brand-100 focus:text-brand-100",
    option:
      "cursor-pointer block h-[4rem] text-light bg-brand-100 hover:bg-brand-200 px-[1.6rem] py-[0.8rem]",
  },
  variants: {
    full: {
      true: {
        select: "max-w-none",
      },
    },
    error: {
      true: {
        select:
          "text-red-500 border-red-500 bg-red-50 placeholder:text-red-400",
      },
    },
  },
});
