"use client";

import { useTinaData } from "@/hooks";

import { TypeSectionDataQuery } from "@/types";

import { Container } from "../Container";

import { TvFooter } from "./styles";

export const Footer = ({ sData, sVariables, sQuery }: TypeSectionDataQuery) => {
  const { data, tinaField } = useTinaData({
    dataT: sData,
    queryT: sQuery,
    variablesT: sVariables,
  });

  const {
    base,
    container,
    content,
    icon,
    h2,
    p,
    form,
    creator,
    copy,
    network,
    by,
  } = TvFooter();

  const footerData = data?.footer;

  return (
    <footer
      id="cta"
      className={base()}
      style={{
        background: `#F8F8F8 url(${footerData.bgImg}) no-repeat center top/cover`,
      }}
    >
      <Container className={container()}>
        <div className={content()}>
          <div className={icon()}>
            <img
              src={footerData?.icon}
              alt="Ícone Footer"
              loading="lazy"
              data-tina-field={tinaField(footerData, "icon")}
            />
          </div>
          <h2 className={h2()} data-tina-field={tinaField(footerData, "h2")}>
            {footerData?.h2}
          </h2>
          <p className={p()} data-tina-field={tinaField(footerData, "p")}>
            {footerData?.p}
          </p>
        </div>
        <div className={creator()}>
          <div className={copy()}>
            <img
              src={footerData?.iconCopy}
              alt="Ícone Logo"
              loading="lazy"
              className="h-[3.2rem] max-w-[4rem]"
              data-tina-field={tinaField(footerData, "iconCopy")}
            />
            <span
              className="text-gray-700"
              data-tina-field={tinaField(footerData, "copyText")}
            >
              {footerData?.copyText}
            </span>
          </div>
          <div className={network()}>
            {footerData?.network?.map((net: any, index: number) => (
              <a
                key={index}
                href={net?.linkNet}
                className="h-[2.4rem] max-w-[2.4rem]"
                data-tina-field={tinaField(net, "iconNet")}
                target="_blank"
              >
                <img
                  src={net?.iconNet}
                  alt="Ícone Rede Social"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
          <a href="https://vicit.studio" className={by()} target="_blank">
            <span className="text-gray-700">Feito por:</span>
            <img
              src="/assets/vicit.svg"
              alt="Logo Vicit"
              loading="lazy"
              className="h-[2.4rem] max-w-[2.4rem]"
            />
          </a>
        </div>
      </Container>
    </footer>
  );
};
