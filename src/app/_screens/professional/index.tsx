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

  const { base, container, photo, inforPf, h1, h3, h4, p } =
    TvSectionProfessional();

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
            <img
              src={infor?.photo}
              alt="Foto do Profissional"
              loading="lazy"
              className={photo()}
              data-tina-field={tinaField(
                data.sections.professional[0],
                "photo"
              )}
            />
            <div className={inforPf()}>
              <h3
                className={h3()}
                data-tina-field={tinaField(data.sections.professional[0], "h3")}
              >
                {infor?.h3}
              </h3>
              <h1
                className={h1()}
                data-tina-field={tinaField(data.sections.professional[0], "h1")}
              >
                {infor?.h1}
              </h1>
              <h4
                className={h4()}
                data-tina-field={tinaField(data.sections.professional[0], "h4")}
              >
                {infor?.h4}
              </h4>
              <span
                className={p()}
                data-tina-field={tinaField(
                  data.sections.professional[0],
                  "description"
                )}
              >
                <TinaMarkdown content={infor?.description} />
              </span>
            </div>
          </Container>
        </section>
      ))}
    </>
  );
};
