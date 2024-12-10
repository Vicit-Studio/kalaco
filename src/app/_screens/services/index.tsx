"use client";

import { Container } from "@/components";
import { useTinaData } from "@/hooks";

import { TypeSectionDataQuery } from "@/types";

export const SectionServices = ({
  sData,
  sVariables,
  sQuery,
}: TypeSectionDataQuery) => {
  const { data, tinaField } = useTinaData({
    dataT: sData,
    queryT: sQuery,
    variablesT: sVariables,
  });

  return (
    <>
      {data.sections.services.map((infor: any, index: number) => (
        <section
          key={index}
          id="services"
          data-link-section="services"
          className="h-[90rem]"
        >
          <Container>
            <h2 data-tina-field={tinaField(data.sections.services[0], "h2")}>
              {infor?.h2}
            </h2>
            <p data-tina-field={tinaField(data.sections.services[0], "p")}>
              {infor?.p}
            </p>
          </Container>
        </section>
      ))}
    </>
  );
};
