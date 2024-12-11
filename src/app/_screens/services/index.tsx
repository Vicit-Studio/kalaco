"use client";

import { useScrollSection, useTinaData } from "@/hooks";

import { TypeSectionDataQuery } from "@/types";

import { Container, LinkPage } from "@/components";

import { TvService } from "./styles";

export const SectionServices = ({
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

  const { base, container, title, action, h2, p } = TvService();

  return (
    <>
      {data.sections.services.map((infor: any, index: number) => (
        <section
          key={index}
          id="services"
          data-link-section="services"
          className={base()}
        >
          <Container className={container()}>
            <div className={title()}>
              <h2
                className={h2()}
                data-tina-field={tinaField(data.sections.services[0], "h2")}
              >
                {infor?.h2}
              </h2>
              <div className={action()}>
                <p
                  className={p()}
                  data-tina-field={tinaField(data.sections.services[0], "p")}
                >
                  {infor?.p}
                </p>
                <LinkPage
                  styles={"brand"}
                  onClick={() => scrollSection(infor?.btnLink)}
                  data-tina-field={tinaField(data.sections.services[0], "btn")}
                >
                  {infor?.btn}
                </LinkPage>
              </div>
            </div>
          </Container>
        </section>
      ))}
    </>
  );
};
