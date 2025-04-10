

import React from 'react'
import { motion } from 'framer-motion'

const TransitionEffect = () => {
    return (
        <>
            <motion.div
                className="fixed inset-0 z-30 backdrop-blur-md bg-[#58E6D9]/30 pointer-events-none"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
        </>
    )
}

export default TransitionEffect
