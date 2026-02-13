
import { motion } from 'framer-motion';

const GalaxyBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-black w-screen h-screen">
            {/* Stars - Simplified with CSS animations - Full viewport coverage */}
            {[...Array(150)].map((_, i) => {
                const size = Math.random() * 3 + 1;
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                const delay = Math.random() * 5;
                const duration = Math.random() * 3 + 2;

                return (
                    <div
                        key={`star-${i}`}
                        className="absolute bg-white rounded-full animate-pulse"
                        style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            width: `${size}px`,
                            height: `${size}px`,
                            boxShadow: `0 0 ${size * 2}px rgba(255,255,255,0.8)`,
                            animationDelay: `${delay}s`,
                            animationDuration: `${duration}s`,
                        }}
                    />
                );
            })}

            {/* Rotating Galaxy Core - Bright and visible - FULL SCREEN */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2000px] h-[2000px] rounded-full blur-3xl opacity-80"
                style={{
                    background: 'radial-gradient(circle at center, rgba(168,85,247,0.8) 0%, rgba(147,51,234,0.5) 30%, rgba(59,130,246,0.3) 60%, transparent 100%)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            {/* Secondary rotating layer - Counter rotation - FULL SCREEN */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] rounded-full blur-2xl opacity-70"
                style={{
                    background: 'radial-gradient(circle at center, rgba(236,72,153,0.6) 0%, rgba(168,85,247,0.4) 50%, transparent 100%)',
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Pulsing rings around black hole */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-4 border-purple-500/50"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Black Hole Event Horizon - Very visible pulsing */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-black rounded-full border-2 border-purple-400/30"
                animate={{
                    boxShadow: [
                        '0 0 60px 20px rgba(168,85,247,0.9)',
                        '0 0 100px 30px rgba(236,72,153,1)',
                        '0 0 60px 20px rgba(168,85,247,0.9)',
                    ]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Inner black hole core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-black rounded-full" />
        </div>
    );
};

export default GalaxyBackground;
