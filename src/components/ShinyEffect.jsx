import React from "react"

const COLORS = {
    cyan: "rgba(6, 182, 212, 0.18)",
    violet: "rgba(124, 58, 237, 0.18)",
}

/**
 * Glow decorativo de fondo.
 * - `color`: "cyan" (por defecto) o "violet".
 * - `left` / `right` / `top`: posición en px.
 * - `size`: diámetro en px.
 */
const ShinyEffect = ({ left, right, top = 0, size = 500, color = "cyan" }) => {
    const style = {
        top: `${top}px`,
        width: `${size}px`,
        height: `${size}px`,
        zIndex: -1,
        background: `radial-gradient(circle, ${COLORS[color] ?? COLORS.cyan}, transparent 70%)`,
    }

    if (left !== undefined) style.left = `${left}px`
    if (right !== undefined) style.right = `${right}px`

    return <div aria-hidden="true" className="shiny-effect" style={style} />
}

export default ShinyEffect
