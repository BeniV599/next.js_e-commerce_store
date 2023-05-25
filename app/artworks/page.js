import Image from 'next/image';
import Link from 'next/link';
import { artworks } from '../../database/artworks';

export const metadata = {
  title: 'My Artworks',
  description:
    "This is where you'll see some of my work here. Feel free to take a peek & hopefully you'll be surprised of what you'll seek. :)",
};

export default function Artworks() {
  return (
    <main>
      <h1>So,... anyone seeing anything peculiar in particular? :D</h1>
      {artworks.map((artwork) => {
        return (
          <div key={`artwork-div-${artwork.id}`}>
            <Link href={`/artworks/${artwork.title}`}>{artwork.title}</Link>
            <br />
            <Image
              src={`/images/${artwork.title}.png`}
              width={246}
              height={246}
            />
          </div>
        );
      })}
    </main>
  );
}
