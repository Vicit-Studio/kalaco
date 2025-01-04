"use client";

import { TinaMarkdown } from "tinacms/dist/rich-text";

import { useTinaData } from "@/hooks";

import { TypeSectionDataQuery } from "@/types";

import { Container } from "@/components";

import { TvSectionMethod } from "./styles";

export const SectionMethod = ({
  sData,
  sVariables,
  sQuery,
}: TypeSectionDataQuery) => {
  const { data, tinaField } = useTinaData({
    dataT: sData,
    queryT: sQuery,
    variablesT: sVariables,
  });

  const {
    base,
    container,
    title,
    h2,
    p,
    listMethod,
    itemMethod,
    icon,
    textMethod,
    name,
    description,
  } = TvSectionMethod();

  return (
    <>
      {data.sections.method.map((infor: any, index: number) => (
        <section
          key={index}
          id="method"
          data-link-section="method"
          className={base()}
        >
          <Container className={container()}>
            <div className={title()}>
              <h2
                className={h2()}
                data-tina-field={tinaField(data.sections.method[0], "h2")}
              >
                {infor?.h2}
              </h2>
              <p
                className={p()}
                data-tina-field={tinaField(data.sections.method[0], "p")}
              >
                {infor?.p}
              </p>
            </div>
            <ul className={listMethod()}>
              {infor.listMethod.map((item: any, index: number) => (
                <li
                  key={index}
                  className={itemMethod()}
                  data-tina-field={tinaField(
                    data.sections.method[0].listMethod[index],
                    "iconMethod"
                  )}
                >
                  <img
                    src={item?.iconMethod}
                    alt="Icone do Metodo"
                    loading="lazy"
                    className={icon()}
                  />
                  <div className={textMethod()}>
                    <h3 className={name()}>{item?.nameMethod}</h3>
                    <span className={description()}>
                      <TinaMarkdown content={item?.descriptionMethod} />
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ))}
    </>
  );
};
