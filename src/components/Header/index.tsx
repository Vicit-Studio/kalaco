"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { useScrollSection, useTinaData } from "@/hooks";

import { TypeSectionDataQuery } from "@/types";

import { Container } from "../Container";

import { TvHeader } from "./styles";

export const Header = ({ sData, sVariables, sQuery }: TypeSectionDataQuery) => {
  const [scrollHeader, setScrollHeader] = useState(false);
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const { scrollSection } = useScrollSection();
  const { data, tinaField } = useTinaData({
    dataT: sData,
    queryT: sQuery,
    variablesT: sVariables,
  });

  const {
    base,
    container,
    nav,
    menu,
    menuMobile,
    linkMenu,
    logoMenu,
    logoNav,
  } = TvHeader();

  const handleLinkClick = (linkSection: string) => {
    scrollSection(linkSection);
    setActiveIndex(linkSection);
  };

  useEffect(() => {
    function handleScroll() {
      setScrollHeader(window.scrollY > 16);

      const sections = document.querySelectorAll("[data-link-section]");
      let newActiveSection: string | null = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionId = section.getAttribute("data-link-section");

        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          newActiveSection = sectionId;
        }
      });

      setActiveIndex(newActiveSection);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={base({ scroll: scrollHeader })}>
      <Container className={container()}>
        <nav className={nav({ scroll: scrollHeader })}>
          <Image
            src={data.header?.logo}
            alt="Logo Kalaço Jr"
            width={100}
            height={100}
            className={logoNav({ scroll: scrollHeader })}
            onClick={() => handleLinkClick("hero")}
          />
          <ul className={menu({ scroll: scrollHeader })}>
            {data.header.header
              .slice(0, Math.ceil(data.header.header.length / 2))
              .map((infor: any, index: number) => (
                <li
                  key={index}
                  className={linkMenu({
                    activeLink: activeIndex === infor?.linkSection,
                  })}
                  onClick={() => handleLinkClick(infor?.linkSection)}
                  data-tina-field={tinaField(
                    data.header.header[index],
                    "linkName"
                  )}
                >
                  {infor?.linkName}
                </li>
              ))}
            <li className={logoMenu({ scroll: scrollHeader })}>
              <Image
                src={data.header?.logo}
                alt="Logo Kalaço Jr"
                width={100}
                height={100}
              />
            </li>
            {data.header.header
              .slice(Math.ceil(data.header.header.length / 2))
              .map((infor: any, index: number) => (
                <li
                  key={index}
                  className={linkMenu({
                    activeLink: activeIndex === infor?.linkSection,
                  })}
                  onClick={() => handleLinkClick(infor?.linkSection)}
                  data-tina-field={tinaField(data.header.header[0], "linkName")}
                >
                  {infor?.linkName}
                </li>
              ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};
