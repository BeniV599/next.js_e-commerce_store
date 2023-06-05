import { cache } from 'react';
import { sql } from './connect';

export const artworks = [
  { id: 1, title: 'Something, Sometime, Somewhere', price: 369 },
  { id: 2, title: 'Anything That Is Not Unoriginal', price: 420 },
  { id: 3, title: 'Embracing The Uniqueness', price: 711 },
  { id: 4, title: 'Seeing Beauty, Beyond Colors', price: 1234 },
  { id: 5, title: 'Exploring New Territories', price: 1472 },
  { id: 6, title: 'Authentic Aesthetics', price: 1994 },
  { id: 7, title: 'Storming Inside The Storm', price: 2023 },
];

export function getAllArtworks() {
  return artworks;
}
export const getArtworks = cache(async () => {
  const artworks = await sql<Artwork[]>`
    SELECT * FROM artworks
 `;
  return artworks;
});

export const getArtworkById = cache(async (id: number) => {
  const [artwork] = await sql<Artwork[]>`
    SELECT
      *
    FROM
      artworks
    WHERE
      id = ${id}
  `;
  return artwork;
});

export const createArtwork = cache(async (title: string, price: number) => {
  const [artwork] = await sql<Artwork[]>`
      INSERT INTO animals
        (title, price)
      VALUES
        (${title},${price})
      RETURNING *
    `;

  return artwork;
});
