import { tv } from "tailwind-variants";

export const TvSectionProfessional = tv({
  slots: {
    base: "z-10 sticky top-0 w-full py-[9.6rem] rounded-b-[3.2rem] bg-gradient-to-t from-gray-900 to-blue-950",
    container:
      "flex flex-wrap items-center justify-center gap-x-[9.6rem] gap-y-[6.4rem]",
    photo: "w-full max-w-[44.6rem] object-cover h-[57.2rem]",
    inforPf: "h-fit w-full max-w-[70rem]",
    h1: "mb-[0.8rem] text-brand-100",
    h3: "mb-[1.6rem] text-light",
    h4: "mb-[3.2rem] text-gray-300",
    p: "text-gray-300 text-justify",
  },
});
