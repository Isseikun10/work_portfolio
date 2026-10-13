import React from "react"
import { motion, useReducedMotion } from "framer-motion"

/**
 * Anima su contenido al entrar en pantalla (una sola vez).
 *
 * - `width`:  por defecto 100% para que las tarjetas llenen su celda del grid.
 * - `y`:      distancia inicial del desplazamiento vertical.
 * - `delay`:  útil para escalonar, p. ej. delay={(index % 3) * 0.1}.
 */
const Reveal = ({
    children,
    width = "100%",
    delay = 0.1,
    duration = 0.6,
    y = 40,
    className = "",
}) => {
    const reduceMotion = useReducedMotion()

    return (
        <motion.div
            className={`h-full ${className}`}
            style={{ width }}
            initial={reduceMotion ? false : { opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
            {children}
        </motion.div>
    )
}

export default Reveal
