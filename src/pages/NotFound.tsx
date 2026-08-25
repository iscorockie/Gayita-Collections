import { Link } from "react-router-dom";
import { Reveal } from "../components/ui";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center bg-asphalt px-4 py-24 text-center">
      <Reveal>
        <p className="font-display text-[8rem] leading-none text-volt">404</p>
        <h1 className="mt-2 font-display text-3xl uppercase">Sold out. Gone. Vanished.</h1>
        <p className="mx-auto mt-3 max-w-md text-bone/50">
          This link is older than our oldest vintage. The rest of the heat is still on the rack.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-volt">Back home</Link>
          <Link to="/shop" className="btn-ghost">Shop the collection</Link>
        </div>
      </Reveal>
    </main>
  );
}
