import 'server-only';
import { config } from 'dotenv-safe';
import { headers } from 'next/headers';
import postgres from 'postgres';

// This loads all environment variables from a .env file
// for all code after this line
if (!process.env.FLY_IO) config();

// Making a simple connection to Postgres
// Next.js fast refresh increases database connection slot
// and causes connection slot error
// export const sql = postgres({
//   transform: {
//     ...postgres.camel,
//     undefined: null,
//   },
// });

declare module globalThis {
  let postgresSqlClient: ReturnType<typeof postgres> | undefined;
}

// Connect only once to the database
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
function connectOneTimeToDatabase() {
  if (!globalThis.postgresSqlClient) {
    globalThis.postgresSqlClient = postgres({
      transform: {
        ...postgres.camel,
        undefined: null,
      },
    });
  }

  return async (strings: TemplateStringsArray, ...values: any) => {
    headers();
    return await globalThis.postgresSqlClient!(strings, ...values);
  };
}

// Connect to PostgreSQL
export const sql = connectOneTimeToDatabase() as ReturnType<typeof postgres>;
