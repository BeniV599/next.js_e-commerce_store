'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function deleteItem(artworks) {
  const artworkQuantityCookie = getCookie('cart');
  const artworkQuantities = !artworkQuantityCookie
    ? []
    : parseJson(artworkQuantityCookie);

  const removeFromCart = artworkQuantities.filter(
    (artwork) => artwork.id !== artworks.id,
  );
  await cookies().set('cart', JSON.stringify(removeFromCart));
}
