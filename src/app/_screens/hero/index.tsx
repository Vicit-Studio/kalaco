"use client";

import { useScrollSection, useTinaData } from "@/hooks";

import { TypeSectionDataQuery } from "@/types";

import { Button, Container } from "@/components";

import { TvSectionHero } from "./styles";

export const SectionHero = ({
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

  const {
    base,
    container,
    content,
    headline,
    subheadline,
    clientWrapper,
    logoClients,
  } = TvSectionHero();

  return (
    <>
      {data.sections.hero.map((infor: any, index: number) => (
        <section
          key={index}
          id="hero"
          data-link-section="hero"
          className={base()}
          style={{
            background: `url(${infor?.bgImg}) no-repeat center center/cover`,
          }}
        >
          <Container className={container()}>
            <div className={content()}>
              <h1
                className={headline()}
                data-tina-field={tinaField(data.sections.hero[0], "h1")}
              >
                {infor?.h1}
              </h1>
              <h4
                className={subheadline()}
                data-tina-field={tinaField(data.sections.hero[0], "h4")}
              >
                {infor?.h4}
              </h4>
              <Button
                withIcon
                styles="brand"
                onClick={() => scrollSection(infor?.btnLink)}
                data-tina-field={tinaField(data.sections.hero[0], "btn")}
              >
                {infor?.btn}
              </Button>
            </div>
            <div className={clientWrapper()}>
              {infor?.logosClients
                .concat(infor?.logosClients)
                .map((src: any, index: number) => (
                  <img
                    key={index}
                    src={src?.image}
                    alt={src?.alt}
                    className={logoClients()}
                  />
                ))}
            </div>
          </Container>
        </section>
      ))}
    </>
  );
};
