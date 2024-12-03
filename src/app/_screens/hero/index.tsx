"use client";

import { useTinaData } from "@/hooks";

import { TypeSectionDataQuery } from "@/types";

import { Container } from "@/styles";

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

  return (
    <>
      {data.page.hero.map((infor: any, index: number) => (
        <div
          key={index}
          className={Container({ size: { sm: "sm", md: "md" } })}
        >
          <h1
            className="text-7xl text-brand-200"
            data-tina-field={tinaField(data.page.hero[0], "h1")}
          >
            {infor?.h1}
          </h1>
          <h4
            className="text-2xl text-gray-500"
            data-tina-field={tinaField(data.page.hero[0], "h4")}
          >
            {infor?.h4}
          </h4>
        </div>
      ))}
    </>
  );
};
