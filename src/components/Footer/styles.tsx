import { tv } from "tailwind-variants";

export const TvFooter = tv({
  slots: {
    base: "pt-[6.4rem] z-20 relative",
    container: "flex flex-col items-center gap-[9.6rem]",
    content: "flex flex-col items-center justify-center w-full py-[9.6rem]",
    icon: "w-[9.6rem] h-[9.6rem] p-[2.4rem] bg-brand-300 rounded-full mb-[2.4rem]",
    h2: "text-brand-100 text-center w-full max-w-[61.6rem] mb-[1.6rem]",
    p: "text-gray-600 text-center w-full max-w-[61.6rem] mb-[2.4rem]",
    form: "flex gap-[1.6rem]",
    creator:
      "w-full flex flex-wrap items-center justify-between gap-[1.6rem] py-[3.2rem] border-t-2 border-gray-300",
    copy: "flex items-center gap-[1.6rem] w-full max-w-[50rem]",
    network: "flex items-center gap-[0.8rem]",
    by: "flex items-center gap-[0.8rem] w-full max-w-[11.6rem]",
  },
});
