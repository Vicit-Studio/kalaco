import { IncomingMessage, ServerResponse } from "http";

import { TinaNodeBackend, LocalBackendAuthProvider } from "@tinacms/datalayer";

import databaseClient from "../../../../tina/__generated__/databaseClient";

const handler = TinaNodeBackend({
  authProvider: LocalBackendAuthProvider(),
  databaseClient,
});

export default (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
  console.log(req.headers.authorization);
  return handler(req, res);
};
