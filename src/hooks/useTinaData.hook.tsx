"use client";

import { useTina, tinaField } from "tinacms/dist/react";

import { TypeTinaData } from "@/types";

export const useTinaData = ({ dataT, queryT, variablesT }: TypeTinaData) => {
  const { data } = useTina({
    data: dataT,
    query: queryT,
    variables: variablesT,
  });

  return {
    data,
    tinaField,
  };
};
