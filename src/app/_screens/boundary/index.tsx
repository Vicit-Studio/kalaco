"use client";

import { useRouter } from "next/navigation";

import { Container, Button } from "@/components";

export const Boundary = () => {
  const navigate = useRouter();

  return (
    <section className="w-full h-dvh overflow-hidden bg-dark">
      <Container className="h-full flex  items-center justify-center gap-[64px] flex-col">
        <div className="w-full max-w-[55rem] text-center">
          <h2 className="mb-4 text-brand-100">Oops...</h2>
          <h4 className="text-gray-100">
            A página que você tentou acessar está indisponível ou não existe.
          </h4>
        </div>
        <Button
          withIcon={false}
          styles={"light"}
          onClick={() => navigate.push("/")}
        >
          Voltar para página princial
        </Button>
      </Container>
    </section>
  );
};
