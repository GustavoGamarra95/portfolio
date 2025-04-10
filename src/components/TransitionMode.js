

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

const TransitionMode = ({ children }) => {
    const pathname = usePathname()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ filter: 'blur(10px)', opacity: 0.6 }}
                animate={{ filter: 'blur(0px)', opacity: 1 }}
                exit={{ filter: 'blur(10px)', opacity: 0.6 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default TransitionMode
