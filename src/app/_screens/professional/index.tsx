"use client";

import { TinaMarkdown } from "tinacms/dist/rich-text";

import { useTinaData } from "@/hooks";

import { TypeSectionDataQuery } from "@/types";

import { Container } from "@/components";

import { TvSectionProfessional } from "./styles";

export const SectionProfessional = ({
  sData,
  sVariables,
  sQuery,
}: TypeSectionDataQuery) => {
  const { data, tinaField } = useTinaData({
    dataT: sData,
    queryT: sQuery,
    variablesT: sVariables,
  });

  const { base, container } = TvSectionProfessional();

  return (
    <>
      {data.sections.professional.map((infor: any, index: number) => (
        <section
          key={index}
          id="about"
          data-link-section="about"
          className={base()}
        >
          <Container className={container()}>
            <h1></h1>
          </Container>
        </section>
      ))}
    </>
  );
};
