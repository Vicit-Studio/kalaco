import { client } from "../../tina/__generated__/client";

export const tinaDataAll = async () => {
  const dataResponse = await client.queries.pageConnection();

  const clientData = dataResponse.data.pageConnection.edges?.map(
    (inforQuery) => {
      return {
        content: inforQuery?.node,
      };
    }
  );

  return { dataResponse, clientData };
};

export const tinaDataQuery = async (path: string) => {
  const { data, query, variables } = await client.queries.page({
    relativePath: path,
  });

  return { data, query, variables };
};
