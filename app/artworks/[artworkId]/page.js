import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getArtworkById } from '../../../database/artworks';

export const dynamic = 'force-dynamic';

export default async function Artwork({ params }) {
  const myArtwork = await getArtworkById(params.artworkId);

  console.log(params);

  if (!myArtwork) {
    notFound();
  }
  return (
    <main>
      <h1>{myArtwork.title}</h1>
      <Image
        style={{ width: 'auto', height: 'auto' }}
        src={`/artworks/${myArtwork.title}.png`}
        width={840}
        height={840}
      />
      <p style={{ color: '#ecdd00', fontSize: '2rem' }}>€{myArtwork.price},-</p>

      <h2 style={{ color: '#7884a7', marginTop: '24px' }}>
        Well, look at this beautiful piece of art called {myArtwork.title}! ;p
      </h2>
    </main>
  );
}
