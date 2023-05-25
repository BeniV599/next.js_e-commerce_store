export const rootNotFoundMetadata = {
  title: 'Not Found',
  description: "Sorry, can't find the page you're looking for. :/",
};

export default function RootNotFound() {
  return (
    <div className="not-found">
      I'm very truly, terribly sorry, however this page you're looking for
      cannot be found.
      <br />
      <br />
      Our apologies in advance, wandering traveler.
      <br />
      <br />
      So... yeah! A 404 error, innit, eh? :|
    </div>
  );
}
