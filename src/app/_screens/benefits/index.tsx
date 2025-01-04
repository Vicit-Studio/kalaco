"use client";

import { useState } from "react";

import { TinaMarkdown } from "tinacms/dist/rich-text";

import { useScrollSection, useTinaData } from "@/hooks";

import { TypeSectionDataQuery } from "@/types";

import { Button, Container } from "@/components";

import { TvSectionBenefits } from "./styles";

export const SectionBenefits = ({
  sData,
  sVariables,
  sQuery,
}: TypeSectionDataQuery) => {
  const { scrollSection } = useScrollSection();
  const { data, tinaField } = useTinaData({
    dataT: sData,
    queryT: sQuery,
    variablesT: sVariables,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const {
    base,
    container,
    title,
    h2,
    p,
    listBenefits,
    itemBenefits,
    icon,
    name,
    description,
  } = TvSectionBenefits();

  return (
    <>
      {data.sections.benefits.map((infor: any, index: number) => (
        <section
          key={index}
          id="benefits"
          data-link-section="benefits"
          className={base()}
        >
          <Container className={container()}>
            <div className={title()}>
              <h2
                className={h2()}
                data-tina-field={tinaField(data.sections.benefits[0], "h2")}
              >
                {infor?.h2}
              </h2>
              <p
                className={p()}
                data-tina-field={tinaField(data.sections.benefits[0], "p")}
              >
                {infor?.p}
              </p>
              <Button
                withIcon
                styles="brand"
                onClick={() => scrollSection(infor?.btnLink)}
                data-tina-field={tinaField(data.sections.benefits[0], "btn")}
              >
                {infor?.btn}
              </Button>
            </div>
            <ul className={listBenefits()}>
              {infor.listBenefits.map((item: any, index: number) => (
                <li
                  key={index}
                  className={itemBenefits({ active: activeIndex === index })}
                  onMouseEnter={() => setActiveIndex(index)}
                  data-tina-field={tinaField(
                    data.sections.benefits[0].listBenefits[index],
                    "iconBenefits"
                  )}
                >
                  <img
                    src={item?.iconBenefits}
                    alt="Icone do Benefício"
                    loading="lazy"
                    className={icon()}
                  />
                  <h3 className={name()}>{item?.nameBenefits}</h3>
                  <span className={description()}>
                    <TinaMarkdown content={item?.descriptionBenefits} />
                  </span>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ))}
    </>
  );
};
