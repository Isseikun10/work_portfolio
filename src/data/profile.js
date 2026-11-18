import { FaGithub, FaGitlab, FaInstagram, FaLinkedinIn, FaMedium } from "react-icons/fa"

export const NAME = "Edwin Bonilla Dolores"
export const YEARS_LABEL = "5 años"

export const TITLES = [
    "Ing. en Sistemas Computacionales",
    "Desarrollo Full Stack",
    "Gestión de Infraestructura",
    "Desarrollo de Chatbots",
    "Soporte Técnico",
]

export const SOCIALS = [
    { label: "GitHub", href: "https://github.com/Isseikun10", Icon: FaGithub },
    { label: "GitLab", href: "https://gitlab.com/EdwinCS1", Icon: FaGitlab },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/edwin-bonilla-dolores/", Icon: FaLinkedinIn },
    { label: "Medium", href: "https://medium.com/@isseikun", Icon: FaMedium },
    { label: "Instagram", href: "https://www.instagram.com/edwindolorez/", Icon: FaInstagram },
]

// Hoja de especificaciones del Hero (todo sale de lo que ya declaras en Skills)
export const SPECS = [
    { label: "Perfil", value: "Ingeniero en Sistemas Computacionales" },
    { label: "Experiencia", value: `${YEARS_LABEL} en desarrollo Full Stack` },
    { label: "Frontend", value: "HTML, CSS, JavaScript, React" },
    { label: "Backend", value: "Node.js, .NET, PHP, Laravel, Python" },
    { label: "Datos", value: "MySQL, PostgreSQL, SQL Server" },
    { label: "Infraestructura", value: "AWS (EC2, S3), Docker, Linux" },
]