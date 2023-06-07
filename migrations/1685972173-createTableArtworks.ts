import { Sql } from 'postgres';

export type Artwork = {
  id: number;
  title: string;
  price: number;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE artworks (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      title varchar(50) NOT NULL,
      price integer
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE artworks
  `;
}
