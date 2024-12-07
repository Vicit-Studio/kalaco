"use client";

import { useTinaData } from "@/hooks";

import { TypeSectionDataQuery } from "@/types";

import { Button, Container } from "@/components";

import { TvSectionHero } from "./styles";

export const SectionHero = ({
  sData,
  sVariables,
  sQuery,
}: TypeSectionDataQuery) => {
  const { data, tinaField } = useTinaData({
    dataT: sData,
    queryT: sQuery,
    variablesT: sVariables,
  });

  const { base, container, content, headline, subheadline } = TvSectionHero();

  return (
    <section className={base()}>
      {data.page.hero.map((infor: any, index: number) => (
        <Container key={index} className={container()}>
          <div className={content()}>
            <h1
              className={headline()}
              data-tina-field={tinaField(data.page.hero[0], "h1")}
            >
              {infor?.h1}
            </h1>
            <h4
              className={subheadline()}
              data-tina-field={tinaField(data.page.hero[0], "h4")}
            >
              {infor?.h4}
            </h4>
            <Button
              withIcon
              styles="brand"
              data-tina-field={tinaField(data.page.hero[0], "btn")}
            >
              {infor?.btn}
            </Button>
          </div>
        </Container>
      ))}
    </section>
  );
};
