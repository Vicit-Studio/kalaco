"use client";

import { useTinaData } from "@/hooks";

import { TypeSectionDataQuery } from "@/types";

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

  return (
    <>
      {data.page.problem.map((infor: any, index: number) => (
        <></>
      ))}
    </>
  );
};
