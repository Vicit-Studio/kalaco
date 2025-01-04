import { tv } from "tailwind-variants";

export const TvSectionBenefits = tv({
  slots: {
    base: "py-[9.6rem] relative",
    container: "flex flex-wrap justify-between gap-[3.2rem]",
    title: "w-full h-fit max-w-[70rem] lg:sticky top-0",
    h2: "text-brand-300 mb-[1.6rem]",
    p: "text-gray-800 mb-[3.2rem]",
    listBenefits:
      "flex flex-wrap gap-[3.2rem] w-full max-w-[70rem] min-w-[30rem]",
    itemBenefits:
      "w-full flex flex-col justify-center gap-[0.8rem] max-w-[33.4rem] min-w-[30rem] first:max-w-none h-[24.4rem] p-[2.4rem] rounded-[1.6rem] bg-brand-300 cursor-pointer transition-all",
    icon: "w-[6.4rem] h-[6.4rem] p-[1.6rem] rounded-[2.4rem] bg-brand-100",
    name: "text-light",
    description: "text-gray-300",
  },
  variants: {
    active: {
      true: {
        itemBenefits: "bg-brand-200 transition-all",
      },
    },
  },
});
