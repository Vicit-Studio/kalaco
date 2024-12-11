"use client";

import { TypeLinkPage } from "./link.type";

import { TvLinkPage } from "./styles";

export const LinkPage = ({ children, styles, ...rest }: TypeLinkPage) => {
  return (
    <>
      <button className={TvLinkPage({ styles })} {...rest}>
        {children}
      </button>
    </>
  );
};
