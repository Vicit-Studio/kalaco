"use client";

import Link from "next/link";

export default function Error() {
  return (
    <section className="w-full h-dvh overflow-hidden bg-dark">
      <div
        className={`h-full flex  items-center justify-center gap-[64px] flex-col`}
      >
        <div className="w-full max-w-[55rem] text-center">
          <h2 className="mb-4 text-brand-100">Oops...</h2>
          <h4 className="text-gray-100">
            A página que você tentou acessar está indisponível ou não existe.
          </h4>
        </div>
        <Link
          href="/"
          className="px-4 py-2 border border-brand-200 text-brand-200 rounded-lg"
        >
          Voltar para página princial
        </Link>
      </div>
    </section>
  );
}
