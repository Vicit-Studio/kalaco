import { useCallback } from "react";

export const useScrollSection = () => {
  const scrollSection = useCallback((id: string) => {
    const targetID = document.getElementById(id);
    if (targetID != null) {
      const initLink = targetID.offsetTop;
      window.scrollTo({
        top: initLink - 108,
        behavior: "smooth",
      });
    }
  }, []);

  return {
    scrollSection,
  };
};
