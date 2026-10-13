import React from "react"
import { FaGithub, FaGitlab, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const SOCIALS = [
    { label: "GitLab", href: "https://gitlab.com/EdwinCS1", Icon: FaGitlab },
    { label: "GitHub", href: "https://github.com/Isseikun10", Icon: FaGithub },
    { label: "Instagram", href: "https://www.instagram.com/edwindolorez/", Icon: FaInstagram },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/edwin-bonilla-dolores/", Icon: FaLinkedinIn },
]

const Footer = () => {
    return (
        <footer className="relative mt-12">
            {/* Línea superior con degradado */}
            <div
                aria-hidden="true"
                className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
            />

            <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row md:py-16">
                {/* Identidad + redes */}
                <div className="space-y-5 text-center md:text-left">
                    <div>
                        <p className="mb-1 font-mono text-sm text-cyan-400">&lt;/&gt;</p>
                        <h3 className="text-2xl font-semibold text-gray-100">Edwin Bonilla Dolores</h3>
                    </div>

                    <ul className="flex justify-center gap-3 md:justify-start" aria-label="Redes sociales">
                        {SOCIALS.map(({ label, href, Icon }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    title={label}
                                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-gray-400 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/40"
                                >
                                    <Icon />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Copyright */}
                <div className="space-y-2 text-center md:text-right">
                    <p className="font-mono text-xs text-gray-500 md:text-sm">
                        <span className="text-violet-400">&copy;</span> 2025-{new Date().getFullYear()} Edwin Bonilla Dolores
                    </p>
                    <p className="font-mono text-xs text-gray-600">All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
