import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero.jpg";
import logo from "@/assets/logo.png";
import {
  Snowflake,
  Wind,
  Wrench,
  Cog,
  Factory,
  Refrigerator,
  WashingMachine,
  Gauge,
  Zap,
  ShieldCheck,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CircuitBoard,
  ThermometerSnowflake,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prime Cool — HVAC, Appliance & Industrial Mechanical Solutions" },
      {
        name: "description",
        content:
          "Rapid-response HVAC, refrigeration, washing machine and heavy industrial mechanical service across Pune, Wagholi to Shirur, Karegaon and Ranjangaon.",
      },
      { property: "og:title", content: "Prime Cool — Engineered Climate & Mechanical Solutions" },
      {
        property: "og:description",
        content:
          "From split ACs to factory cooling towers — precision engineering, AMCs, and zero-downtime maintenance.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const domesticServices = [
  {
    icon: ThermometerSnowflake,
    title: "Air Conditioning Systems",
    desc: "Split, window & centralized AC troubleshooting, jet/dry chemical cleaning, gas charging and precision installation.",
  },
  {
    icon: Refrigerator,
    title: "Refrigeration Units",
    desc: "Repair & temperature calibration for domestic fridges, commercial deep freezers and retail display chillers.",
  },
  {
    icon: WashingMachine,
    title: "Washing Machine Service",
    desc: "Top-load, front-load & semi-automatic — drum alignment, motor repair and electronic fault resolution.",
  },
];

const industrialServices = [
  {
    icon: Factory,
    title: "Heavy Mechanical Maintenance",
    desc: "Routine & emergency servicing for plant machinery, large ventilation networks and cooling towers.",
  },
  {
    icon: CircuitBoard,
    title: "Component & Electrical Precision",
    desc: "Capacitors, complex wiring, industrial valves and pressure gauges — installed, calibrated, and verified.",
  },
  {
    icon: Cog,
    title: "Equipment Overhauls",
    desc: "High-capacity overhauls and diagnostics designed to minimise downtime and protect factory throughput.",
  },
  {
    icon: ShieldCheck,
    title: "Preventative AMCs",
    desc: "Tailored Annual Maintenance Contracts that prevent failures and extend the life of demanding equipment.",
  },
];

const stats = [
  { value: "24/7", label: "Rapid Response" },
  { value: "2", label: "Industrial Hubs Served" },
  { value: "100%", label: "Engineered Reliability" },
  { value: "AMC", label: "Zero-Downtime Plans" },
];

const regions = [
  "Wagholi",
  "Lonikand",
  "Kesnand",
  "Koregaon Bhima",
  "Shikrapur",
  "Karegaon MIDC",
  "Ranjangaon MIDC",
  "Shirur",
];

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Industrial />
        <Catalog />
        <Portfolio />
        <Testimonials />
        <About />
        <Coverage />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logo} alt="Prime Cool logo" className="h-9 w-9" />
          <span className="font-display font-bold text-lg tracking-tight">
            Prime <span className="text-gradient">Cool</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#catalog" className="hover:text-foreground transition">Catalog</a>
          <a href="#portfolio" className="hover:text-foreground transition">Projects</a>
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a
          href="tel:+917507408461"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">Call Now</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          maskImage:
            "linear-gradient(to left, black 0%, black 40%, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to left, black 0%, black 40%, transparent 90%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-ring" />
            Pune · Wagholi–Shirur corridor · Karegaon · Ranjangaon
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Engineered cooling.
            <br />
            <span className="text-gradient">Mechanical precision.</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Prime Cool is a premier provider of HVAC, appliance repair, and
            heavy industrial mechanical solutions — from your home AC to
            factory-scale cooling towers.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition glow-ring"
            >
              Book a Service <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+917507408461"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold hover:bg-card transition"
            >
              <Phone className="h-4 w-4 text-primary" /> 7507408461
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" /> Rapid Response
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" /> AMC Backed
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" /> Industrial Grade
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative aspect-square rounded-3xl surface-card overflow-hidden glow-ring">
            <img
              src={heroImage}
              alt="Futuristic HVAC and industrial cooling visualization"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-border bg-background/70 backdrop-blur-md p-4">
              <div>
                <div className="text-xs text-muted-foreground">Live Service</div>
                <div className="font-display font-semibold">Cooling Tower · Ranjangaon</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Status</div>
                <div className="text-sm font-semibold text-primary">Optimal</div>
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -left-4 animate-float">
            <div className="surface-card rounded-2xl px-4 py-3 flex items-center gap-3">
              <Snowflake className="h-5 w-5 text-primary" />
              <div className="text-xs">
                <div className="font-semibold">-3°C</div>
                <div className="text-muted-foreground">Refrigerant Optimal</div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 animate-float" style={{ animationDelay: "1.5s" }}>
            <div className="surface-card rounded-2xl px-4 py-3 flex items-center gap-3">
              <Gauge className="h-5 w-5 text-primary" />
              <div className="text-xs">
                <div className="font-semibold">5.2 bar</div>
                <div className="text-muted-foreground">Pressure Verified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <div className="font-display text-3xl md:text-4xl font-bold text-gradient">
              {s.value}
            </div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Domestic & Commercial"
          title="Climate & appliance solutions, sharper than service-as-usual."
          subtitle="Trained technicians, genuine parts, and verifiable diagnostics for every home and storefront."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {domesticServices.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Industrial() {
  return (
    <section id="industrial" className="py-24 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, color-mix(in oklab, var(--electric) 25%, transparent), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Heavy Industrial"
          title="Factory-grade mechanical engineering, on-call."
          subtitle="Karegaon and Ranjangaon manufacturing zones rely on us to keep production lines running."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {industrialServices.map((s) => (
            <ServiceCard key={s.title} {...s} large />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
  large,
}: {
  icon: typeof Wrench;
  title: string;
  desc: string;
  large?: boolean;
}) {
  return (
    <div
      className={`group surface-card rounded-2xl p-6 hover:border-primary/40 transition relative overflow-hidden ${
        large ? "md:p-8" : ""
      }`}
    >
      <div
        aria-hidden
        className="absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-0 group-hover:opacity-100 transition"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--primary) 35%, transparent), transparent 70%)",
        }}
      />
      <div className="relative">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary mb-5">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function SectionHeader({
  tag,
  title,
  subtitle,
}: {
  tag: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
        <span className="h-px w-8 bg-primary" />
        {tag}
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
        {title}
      </h2>
      <p className="mt-4 text-muted-foreground">{subtitle}</p>
    </div>
  );
}

function Coverage() {
  return (
    <section id="coverage" className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeader
            tag="Service Footprint"
            title="Rapid deployment along the Wagholi–Shirur corridor."
            subtitle="A dedicated route keeps response times tight and field technicians close to your site."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {regions.map((r) => (
              <span
                key={r}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted-foreground"
              >
                <MapPin className="h-3 w-3 text-primary" />
                {r}
              </span>
            ))}
          </div>
        </div>

        <div className="surface-card rounded-3xl p-8 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <Wind className="h-6 w-6 text-primary" />
            <h3 className="font-display text-xl font-semibold">Route Highlights</h3>
          </div>
          <ul className="space-y-4 text-sm">
            {[
              "Dedicated rapid-response van on the Wagholi–Shirur corridor",
              "Embedded engineers at Karegaon & Ranjangaon manufacturing hubs",
              "On-site spares for capacitors, valves & pressure gauges",
              "Same-day diagnostics for domestic AC, fridge & washing machines",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0 animate-pulse-ring" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div
          className="relative overflow-hidden rounded-3xl border border-border p-10 md:p-14"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center relative">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                Need service <span className="text-gradient">today?</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Call Saurav Temgire directly. Domestic, commercial, or industrial — we'll dispatch
                the right technician along the Wagholi–Shirur route.
              </p>
              <div className="mt-8 space-y-3">
                <a
                  href="tel:+917507408461"
                  className="flex items-center gap-3 rounded-2xl surface-card p-4 hover:border-primary/40 transition"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs text-muted-foreground">Primary</div>
                    <div className="font-display font-semibold">+91 75074 08461</div>
                  </div>
                </a>
                <a
                  href="tel:+917972253787"
                  className="flex items-center gap-3 rounded-2xl surface-card p-4 hover:border-primary/40 transition"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs text-muted-foreground">Secondary</div>
                    <div className="font-display font-semibold">+91 79722 53787</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="surface-card rounded-2xl p-6">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Proprietor</div>
              <div className="font-display text-2xl font-bold mt-1">Saurav Kailas Temgire</div>

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <Info icon={MapPin} label="Region" value="Pune, Maharashtra" />
                <Info icon={Clock} label="Hours" value="Rapid 24/7" />
                <Info icon={Factory} label="Hubs" value="Karegaon · Ranjangaon" />
                <Info icon={Wrench} label="Specialty" value="HVAC · Industrial" />
              </div>

              <a
                href="tel:+917507408461"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:opacity-90 transition"
              >
                Request a Visit <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Wrench;
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <div className="mt-0.5 font-medium">{value}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="h-6 w-6" />
          <span>© {new Date().getFullYear()} Prime Cool — Saurav Kailas Temgire</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Pune · Wagholi–Shirur · Karegaon · Ranjangaon</span>
        </div>
      </div>
    </footer>
  );
}
