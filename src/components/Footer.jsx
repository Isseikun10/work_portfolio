import React from "react"
import { AiOutlineGithub, AiOutlineGitlab, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai"

const SOCIALS = [
    { label: "GitLab", href: "https://gitlab.com/EdwinCS1", Icon: AiOutlineGitlab },
    { label: "GitHub", href: "https://github.com/Isseikun10", Icon: AiOutlineGithub },
    { label: "Instagram", href: "https://www.instagram.com/edwindolorez/", Icon: AiOutlineInstagram },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/edwin-bonilla-dolores/", Icon: AiOutlineLinkedin },
]

const Footer = () => {
    return (
        <footer className="relative mt-12">
            {/* Línea superior */}
            <div
                aria-hidden="true"
                className="h-px w-full bg-line"
            />

            <div className="mx-auto flex max-w-[1100px] flex-col items-start justify-between gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
                {/* Identidad + redes */}
                <div className="space-y-5">
                    <div>
                        <h3 className="text-2xl font-semibold text-fg">Edwin Bonilla Dolores</h3>
                    </div>

                    <ul className="flex gap-3" aria-label="Redes sociales">
                        {SOCIALS.map(({ label, href, Icon }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    title={label}
                                    className="flex h-11 w-11 items-center justify-center rounded border border-line bg-surface text-2xl text-muted transition-colors duration-300 hover:border-accent hover:text-fg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                                >
                                    <Icon />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Copyright */}
                <div className="space-y-2 md:text-right">
                    <p className="font-mono text-xs text-muted md:text-sm">
                        <span className="text-muted">&copy;</span> 2025-{new Date().getFullYear()} Edwin Bonilla Dolores
                    </p>
                    <p className="font-mono text-xs text-muted">All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
