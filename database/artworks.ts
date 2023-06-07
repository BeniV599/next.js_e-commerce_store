import { cache } from 'react';
import { Artwork } from '../migrations/1685972173-createTableArtworks';
import { sql } from './connect';

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

export const updateArworkById = cache(
  async (id: number, title: string, price: number) => {
    const [artwork] = await sql<Artwork[]>`
      UPDATE artworks
      SET
        title = ${title},
        price = ${price},
      WHERE
        id = ${id}
        RETURNING *
    `;

    return artwork;
  },
);

export const deleteAnimalById = cache(async (id: number) => {
  const [artwork] = await sql<Artwork[]>`
    DELETE FROM
      artworks
    WHERE
      id = ${id}
    RETURNING *
  `;
  return artwork;
});
