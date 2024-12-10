import { tv } from "tailwind-variants";

export const TvHeader = tv({
  slots: {
    base: "w-full h-[6.4rem] fixed top-[6.4rem] transition-all z-50",
    container: "flex items-center justify-center",
    nav: "w-fit flex items-center gap-[3.2rem]",
    menu: "w-fit flex items-center gap-[6.4rem]",
    menuMobile: "",
    linkMenu:
      "text-brand-100 text-center cursor-pointer font-[500] text-[1.4rem] px-[0.8rem] py-[0.4rem] w-[16.4rem] rounded-[0.8rem] hover:bg-brand-200 hover:text-gray-50 sm:text-[1.8rem] transition-all",
    logoMenu: "max-h-[6.4rem] max-w-[26.4rem]",
    logoNav: "max-h-[4.8rem] max-w-[21.6rem] hidden",
  },
  variants: {
    scroll: {
      true: {
        base: "bottom-[6.4rem] top-auto transition-all",
        nav: "p-[1.6rem] bg-gray-50 rounded-[0.8rem] border border-gray-600 backdrop-blur transition-all",
        menu: "gap-[0.8rem]",
        menuMobile: "",
        logoMenu: "hidden",
        logoNav: "block",
      },
    },
    activeLink: {
      true: {
        linkMenu: "bg-brand-200 text-gray-50",
      },
    },
  },
});
