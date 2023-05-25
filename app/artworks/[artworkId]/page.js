import Image from 'next/image';
import { notFound } from 'next/navigation';
import { artworks } from '../../../database/artworks';

export default function Artwork({ params }) {
  const myArtwork = artworks.find(
    (artwork) => artwork.title === params.artworkId,
  );
  console.log(myArtwork);

  if (!myArtwork) {
    notFound();
  }
  return (
    <main>
      <Image src={`/images/${myArtwork.title}.png`} width={420} height={420} />
      <h2>
        Well, look at this beautiful piece of art called {myArtwork.title}! ;p
      </h2>
    </main>
  );
}
