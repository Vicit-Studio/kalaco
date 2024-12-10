"use client";

import { useTinaData } from "@/hooks";

import { TypeSectionDataQuery } from "@/types";

import { Container } from "@/components";

import { TvSectionProblem } from "./styles";

export const SectionProblem = ({
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
    artProblem,
    text,
    h2,
    p,
    list,
    itemList,
    iconItem,
    textItem,
  } = TvSectionProblem();

  return (
    <>
      {data.sections.problem.map((infor: any, index: number) => (
        <section key={index} className={base()}>
          <Container className={container()}>
            <img
              src={infor?.srcImg}
              alt="Arte seção Problemas"
              width={100}
              height={100}
              className={artProblem()}
              data-tina-field={tinaField(data.sections.problem[0], "srcImg")}
            />
            <div className={text()}>
              <h2
                className={h2()}
                data-tina-field={tinaField(data.sections.problem[0], "h2")}
              >
                {infor?.h2}
              </h2>
              <p
                className={p()}
                data-tina-field={tinaField(data.sections.problem[0], "p")}
              >
                {infor?.p}
              </p>
              <ul className={list()}>
                {infor.list.map((item: any, index: number) => (
                  <li
                    key={index}
                    className={itemList()}
                    data-tina-field={tinaField(
                      data.sections.problem[0].list[index],
                      "itemList"
                    )}
                  >
                    <div className={iconItem()}>
                      <img
                        src={item?.iconList}
                        alt="Icone Item Lista"
                        loading="lazy"
                      />
                    </div>
                    <p className={textItem()}>{item?.itemList}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      ))}
    </>
  );
};
