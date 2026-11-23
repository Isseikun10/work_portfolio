import { FiDownload } from "react-icons/fi"
import profilepic from "../assets/profpic.webp"
import CV from "../assets/Curriculum/CV.pdf"
import { NAME, SOCIALS, SPECS, TITLES, YEARS_LABEL } from "../data/profile"

const focusRing =
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-rust-soft focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"

const Hero = () => {
    return (
        <section className="mx-auto mt-24 max-w-[1100px] px-6 pb-16 md:pb-24" id="home">
            <div className="grid items-center gap-12 md:grid-cols-[1.25fr_1fr]">
                {/* ───────── Texto ───────── */}
                <div>
                    <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-rust-soft">
                        Perfil / 01
                    </p>

                    <h1 className="mb-6 font-semibold leading-[1.08] tracking-tight text-paper">
                        <span className="mb-1 block text-2xl font-normal text-mute md:text-3xl">Hola, soy</span>
                        <span className="block text-4xl md:text-6xl">{NAME}</span>
                    </h1>

                    {/* Títulos en una línea estática, separados por "·" */}
                    <p className="mb-6 max-w-[34rem] font-mono text-sm leading-7 text-paper/80 md:text-base">
                        {TITLES.map((title, i) => (
                            <span key={title}>
                                {i > 0 && (
                                    <span aria-hidden="true" className="mx-2 text-rust-soft">
                                        ·
                                    </span>
                                )}
                                {title}
                            </span>
                        ))}
                    </p>

                    <p className="mb-8 max-w-[34rem] text-base leading-7 text-mute md:text-lg">
                        Desarrollador full stack con más de {YEARS_LABEL} de experiencia en aplicaciones web,
                        infraestructura de red y automatización.
                    </p>

                    <div className="flex flex-wrap items-center gap-5">
                        <a
                            href={CV}
                            download="CV.pdf"
                            className={`inline-flex items-center gap-2 rounded-sm bg-rust px-5 py-3 font-mono text-sm font-medium text-white transition-colors hover:bg-rust-hover ${focusRing}`}
                        >
                            <FiDownload aria-hidden="true" />
                            Descargar CV
                        </a>

                        <ul className="flex gap-2" aria-label="Redes sociales">
                            {SOCIALS.map(({ label, href, Icon }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${label} (se abre en una pestaña nueva)`}
                                        title={label}
                                        className={`flex h-11 w-11 items-center justify-center rounded-sm border border-line text-lg text-mute transition-colors hover:border-rust-soft hover:text-rust-soft ${focusRing}`}
                                    >
                                        <Icon aria-hidden="true" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ───────── Foto ───────── */}
                <figure className="mx-auto w-full max-w-[340px] md:max-w-none">
                    <div className="border border-line bg-ink-900 p-3">
                        {/* Reemplaza width/height por las dimensiones reales de profpic.png */}
                        <img
                            src={profilepic}
                            alt={`Foto de ${NAME}`}
                            width={440}
                            height={440}
                            fetchPriority="high"
                            decoding="async"
                            className="mx-auto h-auto w-full max-w-[380px] object-contain"
                        />
                    </div>
                    <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-widest text-mute">
                        Fig. 01 — {NAME}
                    </figcaption>
                </figure>
            </div>

            {/* ───────── Hoja de especificaciones ───────── */}
            <div className="mt-16 md:mt-20">
                <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-rust-soft">
                    Especificaciones
                </h2>
                <dl className="border-y border-line">
                    {SPECS.map(({ label, value }) => (
                        <div
                            key={label}
                            className="grid grid-cols-1 gap-1 border-b border-line py-3 last:border-b-0 sm:grid-cols-[11rem_1fr] sm:gap-6"
                        >
                            <dt className="font-mono text-xs uppercase tracking-widest text-mute">{label}</dt>
                            <dd className="text-sm text-paper md:text-base">{value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}

export default Hero