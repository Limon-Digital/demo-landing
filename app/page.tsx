import WhatsAppButton from "./components/WhatsAppButton";

type PricingProduct = {
  name: string;
  description: string;
  initialPayment: string;
  monthlyPlan: string;
  features: string[];
};

const pricingProducts: PricingProduct[] = [
  {
    name: "Emprende con Nosotros",
    description:
      "Landing estratégica con acompañamiento inicial para comenzar.",
    initialPayment: "$220.000",
    monthlyPlan: "$60.000",
    features: [
      "Landing estratégica de una sección",
      "Optimización para dispositivos móviles",
      "Formulario de contacto integrado",
      "Asesoría inicial de propuesta de valor",
    ],
  },
  {
    name: "Landing Profesional",
    description:
      "Sitio de alto impacto para captar clientes y validar oferta.",
    initialPayment: "$600.000",
    monthlyPlan: "$120.000",
    features: [
      "Landing orientada a conversión",
      "Estructura optimizada para campañas",
      "Integración con herramientas de medición",
      "Optimización avanzada de velocidad",
    ],
  },
  {
    name: "Sitio Corporativo",
    description:
      "Presencia digital institucional para empresas y servicios.",
    initialPayment: "$1.200.000",
    monthlyPlan: "$180.000",
    features: [
      "Sitio multi-sección institucional",
      "Arquitectura de información personalizada",
      "Optimización SEO técnica inicial",
      "Soporte y mantenimiento continuo",
    ],
  },
];

function calculateTotalWithIva(value: string) {
  const isFromValue = value.trim().toLowerCase().startsWith("desde");
  const numericValue = Number(value.replace(/[^\d]/g, ""));
  const total = Math.round(numericValue * 1.19);
  const formatted = `$${total.toLocaleString("es-CL")}`;

  return isFromValue ? `Desde ${formatted}` : formatted;
}

function FeatureIcon() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#C4E538] text-[#2F2F2F]">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      >
        <path d="M5 12l5 5L20 7" />
      </svg>
    </span>
  );
}

function PricingCard({ product }: { product: PricingProduct }) {
  const initialTotalWithIva = calculateTotalWithIva(product.initialPayment);
  const monthlyTotalWithIva = calculateTotalWithIva(product.monthlyPlan);

  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#E5E5E5] border-t-[8px] border-t-[#C4E538] bg-white p-6 shadow-sm">
      <div>
        <h3 className="text-xl font-bold text-[#2F2F2F]">{product.name}</h3>
        <p className="mt-2 text-sm text-[#2F2F2F]/70">
          {product.description}
        </p>
      </div>

      <div className="mt-6 rounded-xl bg-[#F7F8FA] p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#2F2F2F]/70">
          Pago Inicial
        </p>
        <p className="mt-1 text-3xl font-extrabold leading-tight text-[#2F2F2F]">
          {product.initialPayment}
        </p>
        <p className="text-sm font-semibold text-[#2F2F2F]/70">+ IVA</p>
        <p className="text-sm font-semibold text-[#2F2F2F]">
          Total + IVA: {initialTotalWithIva}
        </p>

        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#2F2F2F]/70">
          Plan Mensual
        </p>
        <p className="mt-1 text-2xl font-bold leading-tight text-[#2F2F2F]">
          {product.monthlyPlan}
        </p>
        <p className="text-sm font-semibold text-[#2F2F2F]/70">+ IVA</p>
        <p className="text-sm font-semibold text-[#2F2F2F]">
          Total + IVA: {monthlyTotalWithIva}
        </p>
      </div>

      <button
        type="button"
        className="mt-6 rounded-full bg-[#E6007E] px-6 py-3 text-sm font-bold tracking-[0.08em] text-white transition hover:brightness-95"
      >
        CONTRATAR
      </button>

      <ul className="mt-6 space-y-2 text-sm text-[#2F2F2F]">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <FeatureIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] font-sans text-[#2F2F2F]">
      <header className="sticky top-0 z-20 border-b border-[#E5E5E5] bg-[#C4E538]">
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <p className="text-sm font-semibold tracking-[0.2em]">
            LIMON DIGITAL
          </p>
          <ul className="flex items-center gap-6 text-sm font-medium">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#quienes-somos">Quienes Somos</a></li>
            <li><a href="#servicios-valores">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section
          id="inicio"
          className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center px-6 py-20"
        >
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
              Construimos tu presencia digital con estrategia y foco en resultados.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#2F2F2F]/80">
              Diseñamos y desarrollamos landings y sitios corporativos que comunican con claridad, generan confianza y convierten visitas en oportunidades reales. Te acompañamos desde la definición de tu propuesta hasta la puesta en producción.
            </p>
            <a
              href="#servicios-valores"
              className="mt-8 inline-block rounded-full bg-[#E6007E] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
            >
              Ver servicios
            </a>
          </div>
        </section>

        {/* QUIENES SOMOS */}
        <section id="quienes-somos" className="bg-[#C4E538] py-20">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]">
                Quienes Somos
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Ingeniería, estrategia y diseño trabajando en conjunto.
              </h2>
            </div>
            <p className="text-lg leading-relaxed">
              En Limón Digital combinamos experiencia técnica en desarrollo de software con visión estratégica de negocio. No solo diseñamos sitios web: construimos herramientas digitales rápidas, optimizadas y preparadas para crecer.
              Analizamos tu modelo, definimos objetivos claros y desarrollamos soluciones que realmente apoyen tu proceso comercial.
            </p>
          </div>
        </section>

        {/* COMO TRABAJAMOS */}
        <section className="bg-[#F7F8FA] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold">Cómo trabajamos</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-semibold">1. Diagnóstico</h3>
                <p className="mt-2 text-sm text-[#2F2F2F]/70">
                  Analizamos tu negocio, cliente ideal y objetivos.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">2. Desarrollo</h3>
                <p className="mt-2 text-sm text-[#2F2F2F]/70">
                  Diseñamos y construimos una solución optimizada.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">3. Lanzamiento</h3>
                <p className="mt-2 text-sm text-[#2F2F2F]/70">
                  Publicamos y te acompañamos en el proceso inicial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section
          id="servicios-valores"
          className="mx-auto w-full max-w-6xl px-6 py-20"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]">
            Servicios y Valores
          </p>
          <p className="mt-4 max-w-3xl text-lg text-[#2F2F2F]/80">
            Cada etapa del negocio necesita una estructura digital distinta.
            Nuestros planes están pensados para acompañar tu crecimiento.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {pricingProducts.map((product) => (
              <PricingCard key={product.name} product={product} />
            ))}
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="bg-[#2F2F2F] py-20 text-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#C4E538]">
              Contacto
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Conversemos sobre tu próximo paso digital.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[#E5E5E5]">
              Cuéntanos en qué etapa está tu negocio y qué objetivo quieres alcanzar. Te responderemos con claridad sobre la mejor estrategia para ti.
            </p>
            <div className="mt-8 rounded-2xl bg-white p-6 text-[#2F2F2F]">
              <p className="text-sm text-[#2F2F2F]/70">Email</p>
              <p className="text-lg font-semibold">
                contacto@limondigital.cl
              </p>
              <p className="mt-4 text-sm text-[#2F2F2F]/70">Teléfono</p>
              <p className="text-lg font-semibold">
                +56 9 1234 5678
              </p>
            </div>
          </div>
        </section>

        <WhatsAppButton />
      </main>
    </div>
  );
}