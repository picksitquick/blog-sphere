"use client"
import React, { useRef } from 'react';
 import {motion} from 'framer-motion';

export default function Animate(){
    const relativeRef = useRef(null);
    return(
        <motion.div>
            <motion.div
                ref = {relativeRef}
                className="w-48 h-48 bg-yellow-300 rounded-lg flex flex-col"
                drag = {true}
                dragConstraints={{left:-20,right: 400,top:-20,bottom:200}}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{
                    duration: 2.5,
                    delay: 0.3,
                    ease: [0, 1.91, 0.2, 1.01]}}>
                <motion.div
                    className="w-24 h-24 bg-blue-300 rounded-lg"
                    drag = {true}
                    dragConstraints={relativeRef}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 2.3,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]}}>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}