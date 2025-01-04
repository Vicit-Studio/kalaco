import { tinaDataQuery } from "@/functions";

import { Header, Footer } from "@/components";

import {
  SectionBenefits,
  SectionHero,
  SectionProblem,
  SectionServices,
} from "./_screens";

export default async function RootPage() {
  const header = await tinaDataQuery("header", "header.json");
  const footer = await tinaDataQuery("footer", "footer.json");
  const { data, query, variables } = await tinaDataQuery(
    "sections",
    "sections.json"
  );

  return (
    <>
      <Header
        sData={header.data}
        sQuery={header.query}
        sVariables={header.variables}
      />
      <SectionHero sData={data} sQuery={query} sVariables={variables} />
      <SectionProblem sData={data} sQuery={query} sVariables={variables} />
      <SectionServices sData={data} sQuery={query} sVariables={variables} />
      <SectionBenefits sData={data} sQuery={query} sVariables={variables} />
      <Footer
        sData={footer.data}
        sQuery={footer.query}
        sVariables={footer.variables}
      />
    </>
  );
}
