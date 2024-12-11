import { tv } from "tailwind-variants";

export const TvLinkPage = tv({
  base: "cursor-pointer text-center w-fit px-[0.8rem] py-[0.4rem] hover:bg-[#39485A08] rounded-[0.4rem]",
  variants: {
    styles: {
      brand: "text-brand-200",
      light: "text-light",
    },
  },
});
