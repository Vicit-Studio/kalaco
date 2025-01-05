"use client";

import { Formik, Form } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

import confetti from "canvas-confetti";

import { useTinaData } from "@/hooks";

import { TypeSectionDataQuery } from "@/types";

import { SchemaFooter } from "@/schemas";

import { extractRichText } from "@/functions";

import { Container } from "../Container";
import { Input } from "../Input";
import { Button } from "../Button";

import { TvFooter } from "./styles";
import { Select } from "../Select";

export const Footer = ({
  sData,
  sVariables,
  sQuery,
  tableData,
}: TypeSectionDataQuery) => {
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
  const arrayServices = tableData.data.services.services;

  function frameConfetti() {
    const colors = ["#005BBC", "#217BCF"];

    confetti({
      particleCount: 60,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 60,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });
  }

  const handleForm = async (
    name: string,
    service: string,
    { resetForm, setSubmitting }: any
  ) => {
    try {
      const messageTemplate = footerData?.message;
      let message = extractRichText(messageTemplate);
      const personalizedMessage = message
        .replace("{name}", name)
        .replace("{service}", service);
      const encodedMessage = encodeURIComponent(personalizedMessage);
      const whatsappLink = `https://api.whatsapp.com/send/?phone=55${footerData?.tel}&text=${encodedMessage}`;
      frameConfetti();
      setTimeout(() => window.open(whatsappLink, "_blank"), 1000);
      setSubmitting(false);
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

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
          <Formik
            initialValues={{
              name: "",
              service: "",
            }}
            validationSchema={toFormikValidationSchema(SchemaFooter)}
            onSubmit={async (values, { resetForm, setSubmitting }) => {
              await handleForm(values.name, values.service, {
                resetForm,
                setSubmitting,
              });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
              isSubmitting,
            }) => (
              <Form
                onSubmit={handleSubmit}
                onReset={handleReset}
                className={form()}
              >
                <div className="flex flex-col gap-[0.8rem] h-[8.4rem]">
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.name}
                    placeholder="Digite seu nome"
                  />
                  {errors.name && touched.name && (
                    <span className="text-red-500 max-w-[30rem] whitespace-nowrap">
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-[0.8rem] h-[8.4rem]">
                  <Select
                    full
                    id="service"
                    name="service"
                    value={values.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.service}
                    placeholder="Qual serviço precisa?"
                    arrayItems={arrayServices}
                  />
                  {errors.service && touched.service && (
                    <span className="text-red-500">{errors.service}</span>
                  )}
                </div>
                <Button
                  type="submit"
                  styles="brand"
                  withIcon={false}
                  disabled={isSubmitting}
                  data-tina-field={tinaField(footerData, "btn")}
                >
                  {isSubmitting ? footerData?.btnSend : footerData?.btn}
                </Button>
              </Form>
            )}
          </Formik>
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
