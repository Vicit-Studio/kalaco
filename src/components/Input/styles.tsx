import { tv } from "tailwind-variants";

export const TvInput = tv({
  base: "text-brand-300 w-full max-w-[33.2rem] h-[4.8rem] bg-[#3F3F4608] rounded-[1.4rem] border border-brand-300 px-[1.6rem] py-[0.8rem] ",
  variants: {
    full: { true: "max-w-none" },
    error: {
      true: "text-red-500 border-red-500 bg-red-50 placeholder:text-red-400",
    },
  },
});
