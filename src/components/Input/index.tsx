"use client";

import { TypeInput } from "./input.type";

import { TvInput } from "./styles";

export const Input = ({ full, error, ...rest }: TypeInput) => {
  return (
    <>
      <input {...rest} className={TvInput({ full, error })} />
    </>
  );
};
