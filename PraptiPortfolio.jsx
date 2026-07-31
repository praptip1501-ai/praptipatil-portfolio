import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight, Menu, X, Download } from "lucide-react";

/**
 * Prapti Patil — Shopify Developer Portfolio
 * ------------------------------------------
 * Single-file React component. Drop into any React + Tailwind project.
 *
 * BEFORE SHIPPING:
 * 1. Replace `RESUME_PATH` below with the real hosted path to your resume PDF
 *    (e.g. put it in /public/resume.pdf and set RESUME_PATH = "/resume.pdf").
 * 2. Update EMAIL / PHONE / links if anything changes.
 * 3. Tailwind is used with arbitrary values, so no tailwind.config changes
 *    are required — just make sure Tailwind is already set up in the project.
 */

const RESUME_PATH = "/resume/Prapti_Patil_Shopify_Resume.pdf";
const EMAIL = "praptip.1501@gmail.com";
const PHONE_DISPLAY = "+91 96049 04854";
const PHONE_HREF = "tel:+919604904854";
const CATALOG_URL = "https://praptip1501-ai.github.io/praptipatil-portfolio/";

const STORES = [
  {
    sku: "AUS-01",
    name: "Austpek Bathrooms",
    category: "Bathroomware · AU",
    desc: "Catalog-heavy storefront for an Australian bathroomware retailer, built around tap and fixture browsing.",
    url: "https://www.austpekbathrooms.com.au/",
    domain: "austpekbathrooms.com.au",
  },
  {
    sku: "ASP-02",
    name: "Aspire Drinks",
    category: "Beverage",
    desc: "DTC storefront for a beverage brand, tuned for fast product discovery and repeat ordering.",
    url: "https://aspiredrinks.com/",
    domain: "aspiredrinks.com",
  },
  {
    sku: "ACA-03",
    name: "Açaí Amsterdam",
    category: "Food & Wellness · NL",
    desc: "Bilingual storefront for an Amsterdam açaí brand, built mobile-first for quick ordering.",
    url: "https://acaiamsterdam.nl/en",
    domain: "acaiamsterdam.nl",
  },
  {
    sku: "DPT-04",
    name: "DeeperTalk",
    category: "Conversation Card Games",
    desc: "Catalog for a conversation-card brand, with themed collections for couples, friends, and family.",
    url: "https://deepertalk.com/",
    domain: "deepertalk.com",
  },
  {
    sku: "SSJ-05",
    name: "Sterling Saint James",
    category: "Luxury Menswear",
    desc: "Editorial, boutique-feel storefront for an Italian-crafted cashmere and suede menswear label.",
    url: "https://sterlingsaintj.com/",
    domain: "sterlingsaintj.com",
  },
  {
    sku: "EVS-06",
    name: "EvenSkyn",
    category: "Skincare",
    desc: "Skincare storefront balancing routine-building UX with fast, clear product pages.",
    url: "https://www.evenskyn.com/",
    domain: "evenskyn.com",
  },
  {
    sku: "HPH-07",
    name: "Happy Pet Happy",
    category: "Pet Care",
    desc: "Pet-care shop built for easy repeat orders, bundles, and cross-sell.",
    url: "https://happypethappy.shop/",
    domain: "happypethappy.shop",
  },
];

const EXPERIENCE = [
  {
    role: "FRONT-END DEVELOPER (SHOPIFY SPECIALIST)",
    company: "Nonstop Infotech, Nagpur",
    dates: "MAY 2025 — PRESENT",
    note: "Shopify 2.0 theme builds, GoKwik / Razorpay / Cashfree checkout integrations, Klaviyo flows, CRO experiments.",
  },
  {
    role: "FRONT-END DEVELOPER (SHOPIFY)",
    company: "Vowelweb, Nagpur",
    dates: "OCT 2023 — APR 2025",
    note: "Custom Liquid sections, responsive theme builds, close collaboration with UI/UX designers.",
  },
  {
    role: "WEB DEVELOPER INTERN",
    company: "PrimaThink Pvt Ltd, Nagpur",
    dates: "APR 2023 — SEP 2023",
    note: "Responsive pages for college websites, WordPress theme upkeep and optimization.",
  },
  {
    role: "APPLICATION SUPPORT EXECUTIVE / AFC",
    company: "Excellon Software, Nagpur",
    dates: "APR 2017 — FEB 2019",
    note: "L1 support for a cloud DMS used by Bajaj Auto dealers nationwide.",
  },
];

const SKILL_GROUPS = [
  {
    label: "Shopify",
    tags: ["Liquid", "Shopify 2.0", "Shopify CLI", "Theme Sections", "Metafields", "RESTful APIs", "JSON"],
  },
  {
    label: "Front-End",
    tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "jQuery", "Bootstrap", "Responsive Design"],
  },
  {
    label: "Commerce & Growth",
    tags: ["Razorpay", "Cashfree", "GoKwik", "Klaviyo", "A/B Testing", "CRO", "Loyalty Programs"],
  },
  {
    label: "Platforms",
    tags: ["WordPress", "CRM Integrations", "Analytics Systems"],
  },
];

const BAR_WIDTHS = [3, 1, 2, 4, 1, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 1, 4, 2, 3, 1, 1, 2, 4, 1, 3, 2, 1];

function Barcode() {
  return (
    <div className="scanbox relative w-full max-w-[280px] h-20 bg-[#F7F9F4] rounded-[2px] overflow-hidden p-3 flex items-end gap-[2px]">
      {BAR_WIDTHS.map((w, i) => (
        <div
          key={i}
          className="bg-[#12201A]"
          style={{ width: `${w * 2}px`, height: i % 5 === 0 ? "100%" : "78%" }}
        />
      ))}
      <div className="scanline" />
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="pricetag inline-flex items-center h-8 pl-4 pr-3 text-[12px] font-['Space_Mono'] tracking-tight text-[#12201A] bg-[#F7F9F4] border border-[#D8DED4]">
      {children}
    </span>
  );
}

export default function PraptiPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = "text-[13px] tracking-[0.08em] uppercase text-[#EAF0E7]/80 hover:text-[#EAF0E7] transition-colors";

  return (
    <div className="w-full min-h-screen bg-[#EFF3ED] text-[#12201A] font-['Inter']">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.01em; }

        .scanbox { border: 1px solid #D8DED4; }
        .scanline {
          position: absolute; left: 0; right: 0; height: 2px;
          background: #1F6E4A; box-shadow: 0 0 8px 1px rgba(31,110,74,0.7);
          animation: scan 2.8s ease-in-out infinite;
        }
        @keyframes scan {
          0% { top: 4%; opacity: 0; }
          8% { opacity: 1; }
          48% { top: 92%; opacity: 1; }
          56% { opacity: 0; }
          100% { top: 92%; opacity: 0; }
        }

        .pricetag {
          clip-path: polygon(10px 0, 100% 0, 100% 100%, 10px 100%, 0 50%);
          position: relative;
        }
        .pricetag::before {
          content: '';
          position: absolute; left: 4px; top: 50%; transform: translateY(-50%);
          width: 3px; height: 3px; border-radius: 50%; background: #1F6E4A;
        }

        .ticket-edge-top, .ticket-edge-bottom {
          position: absolute; left: 0; right: 0; height: 14px; z-index: 2;
        }
        .ticket-edge-top { top: -1px; }
        .ticket-edge-bottom { bottom: -1px; transform: scaleY(-1); }
        .ticket-edge-top, .ticket-edge-bottom {
          background:
            linear-gradient(-45deg, #EFF3ED 7px, transparent 0) 0 7px,
            linear-gradient(45deg, #EFF3ED 7px, transparent 0) 0 7px;
          background-size: 14px 14px;
          background-repeat: repeat-x;
        }

        .dash-row { border-top: 1px dashed #C7D0C4; }

        @media (prefers-reduced-motion: reduce) {
          .scanline { animation: none; display: none; }
        }
      `}</style>

      {/* NAV */}
      <header className="sticky top-0 z-40 bg-[#0E1912]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-2xl text-[#EAF0E7] tracking-wide">
            PRAPTI<span className="text-[#1F6E4A]">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#work" className={navLink}>Work</a>
            <a href="#experience" className={navLink}>Experience</a>
            <a href="#skills" className={navLink}>Skills</a>
            <a href="#contact" className={navLink}>Contact</a>
            <a
              href={RESUME_PATH}
              download
              className="inline-flex items-center gap-2 h-9 px-4 bg-[#1F6E4A] text-[#EAF0E7] text-[12px] uppercase tracking-[0.08em] hover:bg-[#255E42] transition-colors"
            >
              <Download size={14} /> Resume
            </a>
          </nav>
          <button className="md:hidden text-[#EAF0E7]" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#0E1912] border-t border-[#1F2E24] px-6 pb-6 flex flex-col gap-4">
            <a href="#work" className={navLink} onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#experience" className={navLink} onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#skills" className={navLink} onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#contact" className={navLink} onClick={() => setMenuOpen(false)}>Contact</a>
            <a href={RESUME_PATH} download className="text-[13px] uppercase tracking-[0.08em] text-[#1F6E4A]">Download Resume</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="bg-[#0E1912] text-[#EAF0E7]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-[1.3fr_1fr] gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#1F6E4A]" />
              <span className="font-['Space_Mono'] text-[11px] uppercase tracking-[0.15em] text-[#9FB3A5]">
                In stock — available for hire
              </span>
            </div>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl leading-[0.95] mb-6">
              Prapti Patil
            </h1>
            <p className="font-display text-2xl md:text-3xl text-[#C99A2E] mb-6 leading-tight">
              Storefronts built to check out, not just look good.
            </p>
            <p className="text-[15px] md:text-base text-[#C7D2C9] max-w-xl leading-relaxed mb-10">
              Two years deep in Liquid, Shopify 2.0 sections, and the checkout APIs that actually
              move revenue — Razorpay, Cashfree, GoKwik, Klaviyo. Seven live stores shipped across
              bathware, beverages, skincare, menswear, and more, each built for speed, mobile, and
              the small UX details that lift AOV.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={RESUME_PATH}
                download
                className="inline-flex items-center gap-2 h-11 px-6 bg-[#1F6E4A] text-[#EAF0E7] text-[13px] uppercase tracking-[0.08em] hover:bg-[#255E42] transition-colors"
              >
                <Download size={15} /> Add to cart — Resume
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 h-11 px-6 border border-[#3A4A3F] text-[#EAF0E7] text-[13px] uppercase tracking-[0.08em] hover:border-[#1F6E4A] transition-colors"
              >
                View the catalog ↓
              </a>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10 font-['Space_Mono'] text-[12px] text-[#9FB3A5]">
              <span className="inline-flex items-center gap-2"><Mail size={13} /> {EMAIL}</span>
              <span className="inline-flex items-center gap-2"><Phone size={13} /> {PHONE_DISPLAY}</span>
              <span className="inline-flex items-center gap-2"><MapPin size={13} /> Nagpur, Maharashtra</span>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <Barcode />
            <div className="flex justify-between w-full max-w-[280px] font-['Space_Mono'] text-[10px] uppercase tracking-[0.1em] text-[#9FB3A5]">
              <span>SKU 2025-PRAPTI</span>
              <span>Est. 2023</span>
            </div>
            <div className="w-full max-w-[280px] text-right font-['Space_Mono'] text-[10px] uppercase tracking-[0.1em] text-[#C99A2E]">
              2+ yrs Shopify experience
            </div>
          </div>
        </div>
      </section>

      {/* WORK / CATALOG */}
      <section id="work" className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="mb-12 max-w-2xl">
          <p className="font-['Space_Mono'] text-[11px] uppercase tracking-[0.15em] text-[#1F6E4A] mb-3">
            Live storefronts · currently taking orders
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-4">Stores I've helped ship</h2>
          <p className="text-[#5B6B5F] leading-relaxed">
            Seven live Shopify builds across seven different categories — same obsession with
            clean checkout flows and pixel-tight front ends on every one.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STORES.map((s) => (
            <a
              key={s.sku}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white border border-[#D8DED4] p-6 flex flex-col justify-between hover:border-[#1F6E4A] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-['Space_Mono'] text-[11px] text-[#9FB0A0]">SKU {s.sku}</span>
                  <ArrowUpRight size={16} className="text-[#9FB0A0] group-hover:text-[#1F6E4A] transition-colors" />
                </div>
                <h3 className="font-display text-2xl mb-1 leading-tight">{s.name}</h3>
                <p className="font-['Space_Mono'] text-[11px] uppercase tracking-[0.08em] text-[#C99A2E] mb-3">
                  {s.category}
                </p>
                <p className="text-[13.5px] text-[#5B6B5F] leading-relaxed mb-6">{s.desc}</p>
              </div>
              <div className="font-['Space_Mono'] text-[11px] text-[#12201A] border-t border-dashed border-[#D8DED4] pt-3">
                {s.domain}
              </div>
            </a>
          ))}

          <a
            href={CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#0E1912] text-[#EAF0E7] p-6 flex flex-col justify-center items-start gap-3 hover:bg-[#123B2B] transition-colors"
          >
            <span className="font-['Space_Mono'] text-[11px] uppercase tracking-[0.1em] text-[#9FB3A5]">Full archive</span>
            <h3 className="font-display text-2xl leading-tight">More projects &amp; case studies</h3>
            <span className="inline-flex items-center gap-2 text-[13px] text-[#C99A2E]">
              Visit full catalog <ArrowUpRight size={15} />
            </span>
          </a>
        </div>
      </section>

      {/* EXPERIENCE / RECEIPT */}
      <section id="experience" className="bg-[#E4E9E0] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="font-['Space_Mono'] text-[11px] uppercase tracking-[0.15em] text-[#1F6E4A] mb-3">
              Two years on the clock
            </p>
            <h2 className="font-display text-4xl md:text-5xl">The receipt</h2>
          </div>

          <div className="relative bg-white shadow-[0_2px_24px_rgba(18,32,26,0.08)] px-7 md:px-10 py-10 font-['Space_Mono']">
            <div className="ticket-edge-top" />
            <div className="text-center mb-8">
              <p className="text-[13px] tracking-[0.1em] font-bold">PRAPTI PATIL — SERVICE RECORD</p>
              <p className="text-[11px] text-[#5B6B5F] mt-1">APR 2017 — PRESENT · NAGPUR, IN</p>
            </div>

            {EXPERIENCE.map((e, i) => (
              <div key={i} className={`py-5 ${i !== 0 ? "dash-row" : ""}`}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <p className="text-[12.5px] font-bold leading-snug">{e.role}</p>
                  <p className="text-[11px] text-[#5B6B5F] whitespace-nowrap">{e.dates}</p>
                </div>
                <p className="text-[11.5px] text-[#1F6E4A] mt-1">{e.company}</p>
                <p className="text-[12px] text-[#5B6B5F] leading-relaxed mt-2">{e.note}</p>
              </div>
            ))}

            <div className="dash-row pt-5 mt-2 space-y-2 text-[11.5px]">
              <div className="flex justify-between"><span>SUBTOTAL — SHOPIFY EXPERIENCE</span><span>2+ YEARS</span></div>
              <div className="flex justify-between text-[#5B6B5F]"><span>EDUCATION</span><span className="text-right">B.E. COMP. SCI, NAGPUR UNIV. '14</span></div>
              <div className="flex justify-between text-[#5B6B5F]"><span>CERTIFICATION</span><span className="text-right">FULL-STACK DEV, ARC TECH. &amp; INST.</span></div>
            </div>

            <div className="dash-row mt-4 pt-4 flex justify-between items-center">
              <span className="text-[13px] font-bold">TOTAL</span>
              <span className="text-[13px] font-bold text-[#1F6E4A]">READY TO SHIP ✓</span>
            </div>

            <p className="text-center text-[10px] text-[#9FB0A0] mt-8">
              THANK YOU FOR SHOPPING SMALL · NO RETURNS ON GOOD CODE
            </p>
            <div className="ticket-edge-bottom" />
          </div>
        </div>
      </section>

      {/* SKILLS / INVENTORY */}
      <section id="skills" className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="mb-12 max-w-2xl">
          <p className="font-['Space_Mono'] text-[11px] uppercase tracking-[0.15em] text-[#1F6E4A] mb-3">Inventory</p>
          <h2 className="font-display text-4xl md:text-5xl">What's in stock</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {SKILL_GROUPS.map((g) => (
            <div key={g.label}>
              <h3 className="font-display text-xl text-[#C99A2E] mb-4">{g.label}</h3>
              <div className="flex flex-wrap gap-2">
                {g.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT / CHECKOUT */}
      <section id="contact" className="bg-[#0E1912] text-[#EAF0E7]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <p className="font-['Space_Mono'] text-[11px] uppercase tracking-[0.15em] text-[#1F6E4A] mb-3">Checkout</p>
          <h2 className="font-display text-4xl md:text-6xl mb-6 max-w-2xl leading-[0.95]">
            Let's build your storefront
          </h2>
          <p className="text-[#C7D2C9] max-w-xl leading-relaxed mb-10">
            Available for freelance Shopify builds, theme customization, and front-end work.
            Based in Nagpur, shipping for stores anywhere.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 h-11 px-6 bg-[#1F6E4A] text-[#EAF0E7] text-[13px] uppercase tracking-[0.08em] hover:bg-[#255E42] transition-colors"
            >
              <Mail size={15} /> Email me
            </a>
            <a
              href={RESUME_PATH}
              download
              className="inline-flex items-center gap-2 h-11 px-6 border border-[#3A4A3F] text-[13px] uppercase tracking-[0.08em] hover:border-[#1F6E4A] transition-colors"
            >
              <Download size={15} /> Download resume
            </a>
            <a
              href={CATALOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-6 text-[13px] uppercase tracking-[0.08em] text-[#C99A2E] hover:text-[#e0b543] transition-colors"
            >
              Full project catalog <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-3 font-['Space_Mono'] text-[12px] text-[#9FB3A5] border-t border-[#1F2E24] pt-8">
            <span className="inline-flex items-center gap-2"><Mail size={13} /> {EMAIL}</span>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 hover:text-[#EAF0E7]"><Phone size={13} /> {PHONE_DISPLAY}</a>
            <span className="inline-flex items-center gap-2"><MapPin size={13} /> Nagpur, Maharashtra, IN</span>
          </div>
        </div>
        <div className="border-t border-[#1F2E24] py-6 px-6 md:px-10 text-center font-['Space_Mono'] text-[10px] uppercase tracking-[0.1em] text-[#5B6B5F]">
          © {new Date().getFullYear()} Prapti Patil — Shopify Developer
        </div>
      </section>
    </div>
  );
}
