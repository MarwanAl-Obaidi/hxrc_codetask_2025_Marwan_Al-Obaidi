import { useRef, useState, createElement } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function HoverCard({ children }) {
    const ref = useRef()
    const [hovered, setHovered] = useState(false)

    const targetY = useRef(0)
    const currentY = useRef(0)

    const targetScale = useRef(1)
    const currentScale = useRef(1)

    useFrame(() => {
        if (!ref.current) return

        currentY.current = THREE.MathUtils.lerp(currentY.current, targetY.current, 0.1)
        currentScale.current = THREE.MathUtils.lerp(currentScale.current, targetScale.current, 0.1)

        ref.current.position.y = currentY.current
        ref.current.scale.set(currentScale.current, currentScale.current, currentScale.current)

        const targetRotY = hovered ? 0.1 : 0
        ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetRotY, 0.1)
    })

    const handlePointerOver = (e) => {
        e.stopPropagation()
        setHovered(true)
        targetY.current = 0.3
        targetScale.current = 1.1
    }

    const handlePointerOut = (e) => {
        e.stopPropagation()
        setHovered(false)
        targetY.current = 0
        targetScale.current = 1
    }

    return createElement(
        'group',
        {
            ref,
            onPointerOver: handlePointerOver,
            onPointerOut: handlePointerOut
        },
        children
    )
}
