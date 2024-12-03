import { tv } from "tailwind-variants";

export const Container = tv(
  {
    base: "m-auto w-full",
    variants: {
      size: {
        sm: "max-w-[328px]",
        md: "max-w-[592px]",
        lg: "max-w-[1432px]",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  },
  {
    responsiveVariants: ["sm", "md", "lg"],
  }
);
