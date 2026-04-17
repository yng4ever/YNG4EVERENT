import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)

  useEffect(() => {
    const move = e => {
      if (dot.current) {
        dot.current.style.left = e.clientX + 'px'
        dot.current.style.top = e.clientY + 'px'
      }
    }
    const over = e => {
      if (!dot.current) return
      const hovered = !!e.target.closest('a, button, input, textarea, select, [role="button"]')
      dot.current.classList.toggle('cursor-outline', hovered)
    }
    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [])

  return <div ref={dot} className="cursor-dot" />
}
