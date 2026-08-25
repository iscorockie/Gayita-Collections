import { Link } from "react-router-dom";
import { MarqueeRow, Reveal, SectionHead } from "../components/ui";
import {
  IconBolt,
  IconBrush,
  IconClock,
  IconCrown,
  IconMapPin,
  IconPhone,
  IconRecycle,
  IconShield,
  IconWhatsApp,
} from "../components/icons";
import { CONTACT, waLink } from "../lib/utils";
import atelier from "../assets/img/atelier.jpg";
import colCustom from "../assets/img/col-custom.jpg";
import heroCrane from "../assets/img/hero.jpg";
import logo from "../assets/logo.jpeg";

const PROCESS = [
  { n: "01", title: "Source & curate", text: "We dig through Owino's best bales and trusted East African suppliers for pieces with strong fabric and stronger character." },
  { n: "02", title: "Restore & verify", text: "Steam-cleaning, conditioning, measurements, authentication. Every vintage piece and every kick passes inspection before it lists." },
  { n: "03", title: "Sketch & hand-paint", text: "Custom pieces start as pencil sketches, then hours of brush and fabric-ink work — heat-set to survive the wash." },
  { n: "04", title: "Sign & deliver", text: "Signed by the artist, packed with a care card, and sent anywhere in Uganda. Same or next day within Kampala." },
];

export default function About() {
  return (
    <main className="bg-asphalt">
      {/* hero */}
      <section className="relative overflow-hidden border-b border-bone/10 py-24 sm:py-32">
        <img src={heroCrane} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-asphalt via-asphalt/85 to-asphalt/40" />
        <div className="relative mx-auto max-w-7xl px-4">
          <Reveal>
            <img src={logo} alt="Gayita Collections" className="h-16 w-auto" />
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 max-w-3xl font-display text-5xl uppercase leading-[0.92] sm:text-7xl">
              A needle, a thread,<br />
              <span className="text-volt">& Kampala's imagination.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-bone/65">
              Gayita Collections is a Kampala atelier doing two things with obsession: rescuing
              beautiful vintage clothing, and painting original art you can wear. Now with Friday
              kicks, because the streets kept asking.
            </p>
          </Reveal>
        </div>
      </section>

      <MarqueeRow
        items={["EST. 2021", "NAJJERA, KAMPALA", "VINTAGE ✕ ART ✕ KICKS", "1 OF 1 ONLY"]}
        separator="✦"
        slow
        className="border-b border-bone/10 bg-coal2 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-bone/50"
      />

      {/* story */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead kicker="Our story" title={<>It started with<br />market bales</>} />
            <Reveal delay={120} className="mt-6 space-y-5 text-[15px] leading-relaxed text-bone/65">
              <p>
                Our founder grew up between a tailor's shop and the art class — a needle in one
                hand, a pencil in the other. Weekends meant Owino Market: mountains of second-hand
                clothes, and the thrill of finding that one perfect 90s jacket hiding in a bale.
              </p>
              <p>
                Friends started asking for "the good finds". Then they asked for something new:
                their own stories painted onto those finds. A crowned crane for a sister abroad. A
                matatu for a taxi-obsessed nephew. A sunset over Nakasero for a groom's wedding
                morning.
              </p>
              <p>
                Today Gayita Collections is that same spirit with a studio address in Najjera and a
                Friday 8PM drop the group chat sets alarms for — vintage curated like an archive,
                streetwear painted like a gallery, and kicks authenticated pair by pair.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-9 flex flex-wrap gap-4">
              <Link to="/shop" className="btn-volt">Shop the archive</Link>
              <a href={waLink("Hello Gayita Collections! I'd love a custom painted piece. 🎨")} target="_blank" rel="noreferrer" className="btn-ghost">
                <IconBrush className="h-4 w-4" /> Start a commission
              </a>
            </Reveal>
          </div>
          <Reveal className="relative">
            <div className="hazard absolute -right-2 -top-2 h-full w-full" aria-hidden />
            <img src={atelier} alt="The Gayita Collections studio" className="relative aspect-[4/3] w-full border border-bone/15 object-cover" />
          </Reveal>
        </div>
      </section>

      {/* process */}
      <section id="process" className="scroll-mt-24 border-y border-bone/10 bg-coal2">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:py-28">
          <SectionHead
            center
            kicker="How it works"
            title={<>Market bale → masterpiece</>}
            sub="Four hands-on stages in our Kampala studio, for every single piece."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.n} delay={i * 100}>
                <div className="hover-lift h-full border border-bone/10 bg-asphalt p-7">
                  <span className="font-display text-5xl text-volt/40 transition-colors">{p.n}</span>
                  <h3 className="mt-4 font-display text-xl uppercase tracking-wide">{p.title}</h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-bone/55">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* values */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-3">
        {[
          { icon: <IconBrush className="h-6 w-6" />, t: "Originals only", s: "No prints, no repeats. Every artwork drawn by a Kampala artist — and signed." },
          { icon: <IconRecycle className="h-6 w-6" />, t: "Circular fashion", s: "Vintage first. Every rescued piece is one less garment in a landfill." },
          { icon: <IconShield className="h-6 w-6" />, t: "Human to human", s: "Real people confirm every order on our studio lines before you pay." },
        ].map((v, i) => (
          <Reveal key={v.t} delay={i * 100} className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-volt/40 text-volt">
              {v.icon}
            </span>
            <div>
              <h3 className="font-display text-xl uppercase tracking-wide">{v.t}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-bone/55">{v.s}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* visit + contact */}
      <section id="visit" className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-20 sm:pb-28">
        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="relative h-full min-h-[380px] overflow-hidden border border-bone/10">
              <img src={colCustom} alt="Hand-painting in progress" className="absolute inset-0 h-full w-full object-cover opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/30 to-transparent" />
              <div className="absolute bottom-0 p-8">
                <p className="tag text-volt">The Studio</p>
                <p className="mt-2 flex items-center gap-2 font-display text-2xl uppercase">
                  <IconMapPin className="h-5 w-5 text-volt" /> Najjera, Kampala
                </p>
                <p className="mt-1.5 text-[13.5px] text-bone/65">{CONTACT.location}</p>
                <p className="mt-2 flex items-center gap-2 font-mono text-[11.5px] text-bone/55">
                  <IconClock className="h-4 w-4 text-volt" /> {CONTACT.hours}
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex h-full min-h-[380px] flex-col justify-center border border-bone/10 bg-coal2 p-10">
              <p className="tag text-volt">Talk to us</p>
              <h2 className="mt-3 font-display text-3xl uppercase leading-tight sm:text-4xl">
                Order, ask,<br />or just say jambo 👋
              </h2>
              <div className="mt-8 space-y-4">
                {CONTACT.phones.map((p) => (
                  <a
                    key={p.tel}
                    href={p.primary ? waLink("Hello Gayita Collections!") : `tel:${p.tel}`}
                    target={p.primary ? "_blank" : undefined}
                    rel={p.primary ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 transition-colors hover:text-volt"
                  >
                    <span className="flex h-11 w-11 items-center justify-center border border-bone/20 text-volt transition-all group-hover:border-volt">
                      <IconPhone className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-lg font-bold tracking-wide">{p.display}</span>
                    {p.primary && <span className="tag bg-volt px-2 py-0.5 text-asphalt">WhatsApp</span>}
                  </a>
                ))}
              </div>
              <a href={waLink("Hello Gayita Collections!")} target="_blank" rel="noreferrer" className="btn-volt mt-9 self-start">
                <IconWhatsApp className="h-4 w-4" /> Chat with the studio
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative overflow-hidden border-t border-bone/10 bg-volt py-14 text-asphalt">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left">
          <h2 className="font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
            Fridays, 8PM.<br />Don't be late.
          </h2>
          <Link to="/shop?drop=1" className="btn bg-asphalt text-bone hover:-translate-y-0.5" style={{ boxShadow: "5px 5px 0 rgba(10,10,10,0.35)" }}>
            <IconBolt className="h-4 w-4 text-volt" /> Enter the drop zone
          </Link>
        </div>
      </section>
      <div className="h-2 hazard" />
    </main>
  );
}
