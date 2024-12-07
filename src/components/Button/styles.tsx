import { tv } from "tailwind-variants";

export const TvButton = tv({
  slots: {
    base: "flex flex-wrap w-fit",
    span: "h-[4.8rem] px-[1.6rem] py-[0.8rem] rounded-[1.4rem] uppercase flex items-center",
    icon: "w-[4.8rem] h-[4.8rem] p-[0.8rem] rounded-[1.4rem] flex items-center justify-center",
  },
  variants: {
    styles: {
      brand: {
        base: "text-light",
        span: "bg-brand-200",
        icon: "bg-brand-200",
      },
      light: {
        base: "text-dark",
        span: "bg-light",
        icon: "bg-light",
      },
      dark: {
        base: "text-light",
        span: "bg-dark",
        icon: "bg-dark",
      },
    },
  },
});
