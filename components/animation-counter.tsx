"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
    end: number
    duration?: number
    suffix?: string
    prefix?: string
    separator?: string
    decimals?: number
    className?: string
}

export default function AnimatedCounter({
    end,
    duration = 2000,
    suffix = "",
    prefix = "",
    separator = ",",
    decimals = 0,
    className = "",
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const [hasAnimated, setHasAnimated] = useState(false)
    const counterRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsVisible(true)
                    setHasAnimated(true)
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            },
        )

        if (counterRef.current) {
            observer.observe(counterRef.current)
        }

        return () => observer.disconnect()
    }, [hasAnimated])

    useEffect(() => {
        if (!isVisible) return

        let startTime: number
        let animationFrame: number

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const currentCount = Math.floor(easeOutQuart * end)

            setCount(currentCount)

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            } else {
                setCount(end)
            }
        }

        animationFrame = requestAnimationFrame(animate)

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame)
            }
        }
    }, [isVisible, end, duration])

    const formatNumber = (num: number) => {
        const fixed = num.toFixed(decimals)
        const parts = fixed.split(".")
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator)
        return parts.join(".")
    }

    return (
        <span ref={counterRef} className={className}>
            {prefix}
            {formatNumber(count)}
            {suffix}
        </span>
    )
}
