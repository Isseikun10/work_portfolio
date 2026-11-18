import { NAME, SOCIALS } from "../data/profile"

const Footer = () => {
    return (
        <footer className="mt-12 border-t border-line">
            <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row md:py-14">
                <div className="space-y-5 text-center md:text-left">
                    <div>
                        <p className="mb-1 font-mono text-xs uppercase tracking-[0.2em] text-rust-soft">
                            Contacto
                        </p>
                        <h3 className="text-2xl font-semibold text-paper">{NAME}</h3>
                    </div>

                    <ul className="flex justify-center gap-2 md:justify-start" aria-label="Redes sociales">
                        {SOCIALS.map(({ label, href, Icon }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${label} (se abre en una pestaña nueva)`}
                                    title={label}
                                    className="flex h-11 w-11 items-center justify-center rounded-sm border border-line text-lg text-mute transition-colors hover:border-rust-soft hover:text-rust-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-rust-soft focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
                                >
                                    <Icon aria-hidden="true" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="font-mono text-xs text-mute md:text-right">
                    © 2025–{new Date().getFullYear()} {NAME}
                    <br />
                    Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}

export default Footer