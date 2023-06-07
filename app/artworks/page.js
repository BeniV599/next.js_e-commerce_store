import Image from 'next/image';
import Link from 'next/link';
import { getArtworks } from '../../database/artworks';

console.log(getArtworks);

export const metadata = {
  title: 'My Artworks',
  description:
    "This is where you'll see some of my work here. Feel free to take a peek & hopefully you'll be surprised of what you'll seek. :)",
};

export default async function Artworks() {
  const artworks = await getArtworks();
  return (
    <main>
      <h1>So,... anyone seeing anything peculiar in particular? :D</h1>
      {artworks.map((artwork) => {
        return (
          <div key={`artwork-div-${artwork.id}`}>
            <Link href={`/artworks/${artwork.id}`}>
              <h2>{artwork.title}</h2>
            </Link>
            <br />
            <Image
              style={{ width: 'auto', height: 'auto' }}
              src={`/artworks/${artwork.title}.png`}
              width={360}
              height={360}
            />
          </div>
        );
      })}
    </main>
  );
}
