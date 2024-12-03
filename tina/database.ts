import { createDatabase, createLocalDatabase } from "@tinacms/datalayer";
import { Redis } from "@upstash/redis";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

export default isLocal
  ? createLocalDatabase()
  : createDatabase({
      databaseAdapter: new Redis({
        url: process.env.KV_REST_API_URL,
        token: process.env.KV_REST_API_TOKEN,
      }),
    });
