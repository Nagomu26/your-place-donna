import { Phone } from "lucide-react";
import { CONFIG } from "@/lib/config";
import { Reveal } from "./Reveal";

const STATS = [
  { valor: "4.9★", etiqueta: "Valoración de clientes" },
  { valor: "1 min", etiqueta: "Para pedir cita" },
  { valor: "7 días", etiqueta: "De antelación máxima" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-paper">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[460px] w-[460px] rounded-full bg-accent/15 blur-3xl" aria-hidden="true"></div>
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[380px] w-[380px] rounded-full bg-limon/30 blur-3xl" aria-hidden="true"></div>
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-stone">
                <span className="inline-block h-[3px] w-10 rounded-full bg-accent"></span>
                Tu negocio en {CONFIG.zona}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display text-6xl font-bold leading-[1.05] tracking-tight text-ink sm:text-7xl lg:text-8xl">
                Tu negocio,
                <br />
                <span className="italic text-accent">con esencia.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-stone sm:text-xl">
                Lo que ofreces, dónde estás y cómo contactar. Pide tu cita
                en segundos: {CONFIG.nombre}, en {CONFIG.ciudad}.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#reserva"
                  className="btn-sheen inline-flex items-center justify-center rounded-full bg-ink px-8 py-4 text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:bg-accent"
                >
                  Pedir cita
                </a>
                <a
                  href={`tel:${CONFIG.telefonoEnlace}`}
                  className="inline-flex items-center justify-center rounded-full border border-ink bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-wide text-ink transition-all hover:bg-ink hover:text-paper"
                >
                  <Phone className="mr-2 h-4 w-4 text-accent" aria-hidden="true" />
                  Llamar · {CONFIG.telefono}
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t-2 border-line pt-8">
                {STATS.map((stat) => (
                  <div key={stat.etiqueta}>
                    <p className="font-display text-3xl font-bold leading-none text-ink">{stat.valor}</p>
                    <p className="mt-2 text-xs uppercase tracking-wide text-stone">{stat.etiqueta}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} className="lg:col-span-5">
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-[2rem] bg-accent/20"
                aria-hidden="true"
              ></div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-4 border-white shadow-soft">
                <img
                  src="img/haircut-close.jpg"
                  alt="Foto del negocio"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}