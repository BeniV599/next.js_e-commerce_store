export const artworkNotFoundMetadata = {
  title: 'Not Found',
  description: "Sorry, can't find the page you're looking for. :/",
};

export default function ArtworkNotFound() {
  return (
    <div className="not-found">
      <p>
        I'm very truly, terribly sorry, however this page you're looking for
        cannot be found.
        <br />
        Our apologies in advance, wandering traveler.
      </p>
      <br />
      <p>
        So... yeah! A <span className="error404">404 error</span>, innit, eh? :|
      </p>
    </div>
  );
}
