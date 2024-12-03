import { createDatabase, createLocalDatabase } from "@tinacms/datalayer";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";
const username = "";
const password = "";

if (!username || !password) {
  throw new Error(
    "Username and password must be set in the environment variables (TINA_USERNAME and TINA_PASSWORD)."
  );
}

export default isLocal
  ? createLocalDatabase()
  : createDatabase({
      auth: {
        username,
        password,
      },
      databaseAdapter: {
        type: "filesystem",
        rootPath: "./content",
      },
    });
