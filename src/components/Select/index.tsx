"use client";

import { CaretDown } from "@phosphor-icons/react";
import { TypeSelect } from "./select.type";

import { TvSelect } from "./styles";

export const Select = ({
  full,
  error,
  value,
  arrayItems,
  placeholder,
  ...rest
}: TypeSelect) => {
  const { base, icon, select, option } = TvSelect();

  return (
    <div className={base()}>
      <select {...rest} className={select({ full, error })}>
        {!value && placeholder && (
          <option key="placeholder" className={option()} selected>
            {placeholder}
          </option>
        )}
        {arrayItems.map((item, index) => (
          <option
            key={index}
            value={item.valueItem}
            selected={value === item.valueItem}
            className={option()}
          >
            {item.textItem}
          </option>
        ))}
      </select>
      <CaretDown size={24} className={icon()} />
    </div>
  );
};
