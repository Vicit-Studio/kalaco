import { tv } from "tailwind-variants";

export const TvSectionMethod = tv({
  slots: {
    base: "z-10 sticky top-0 w-full h-fit py-[9.6rem] rounded-t-[3.2rem] bg-gradient-to-b from-gray-900 to-blue-950",
    container: "flex flex-col items-center justify-center gap-[6.4rem]",
    title: "w-full max-w-[93.2rem] flex flex-col justify-center gap-[1.6rem]",
    h2: "text-center text-light",
    p: "text-center text-gray-300",
    listMethod: "flex flex-wrap gap-[3.2rem] items-center justify-between",
    itemMethod:
      "w-full max-w-[45.6rem] flex flex-col items-center gap-[3.2rem] px-[1.6rem]",
    icon: "w-[9.6rem] h-[9.6rem] p-[1.6rem]",
    textMethod: "w-full",
    name: "text-center text-gray-50 mb-[0.8rem]",
    description: "text-center text-gray-300",
  },
});
