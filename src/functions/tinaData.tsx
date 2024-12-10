import { client } from "../../tina/__generated__/client";

export const tinaDataQuery = async (
  queryName: keyof typeof client.queries,
  path: string
) => {
  const { data, query, variables } = await client.queries[queryName]({
    relativePath: path,
  });

  return { data, query, variables };
};
