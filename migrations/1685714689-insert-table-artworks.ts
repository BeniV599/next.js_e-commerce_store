import { Sql } from 'postgres';
import { artworks } from '../database/artworks';

/*export const artworks = [
  { id: 1, title: 'Something, Sometime, Somewhere', price: 369 },
  { id: 2, title: 'Anything That Is Not Unoriginal', price: 420 },
  { id: 3, title: 'Embracing The Uniqueness', price: 711 },
  { id: 4, title: 'Seeing Beauty, Beyond Colors', price: 1234 },
  { id: 5, title: 'Exploring New Territories', price: 1472 },
  { id: 6, title: 'Authentic Aesthetics', price: 1994 },
  { id: 7, title: 'Storming Inside The Storm', price: 2023 },
];*/

export async function up(sql: Sql) {
  for (const artwork of artworks) {
    await sql`
    INSERT INTO artworks
      (title, price)
    VALUES
      (${artwork.title}, ${artwork.price})
  `;
  }
}

export async function down(sql: Sql) {
  for (const artwork of artworks) {
    await sql`
      DELETE FROM artworks WHERE id = ${artwork.id}
  `;
  }
}
