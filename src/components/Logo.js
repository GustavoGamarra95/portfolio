import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { motion } from "framer-motion";
import LogoJp from "@/components/Icons";

const MotionLink = motion(Link);

const Logo = () => {
    // return (
    //     <div className="flex items-center justify-center mt-2">
    //         <MotionLink
    //             href="/"
    //             className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border-2 border-solid border-transparent dark:border-light"
    //         >
    //             <div className="flex items-center justify-center">
    //                 <Image
    //                     src="/public/logo.png"
    //                     className="w-full h-auto"  
    //                     alt="Logo"
    //                     width={50}
    //                     height={45}
    //                 />
    //             </div>
    //         </MotionLink>
    //     </div>
    // );
}

export default Logo;
