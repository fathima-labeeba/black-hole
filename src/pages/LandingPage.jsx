
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <main className="relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
            {/* Starfield background */}
            <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(100)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.7 + 0.3,
                        }}
                        animate={{
                            opacity: [null, Math.random() * 0.5 + 0.5, null],
                            scale: [1, Math.random() * 1.5 + 0.5, 1],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Black Hole Animation */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Outer accretion disk glow */}
                <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-40 animate-glow-pulse"
                    style={{
                        background: 'radial-gradient(circle, transparent 30%, rgba(147,51,234,0.4) 50%, rgba(59,130,246,0.3) 70%, transparent 100%)',
                        filter: 'blur(40px)',
                    }}
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Rotating accretion disk - outer ring */}
                <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
                    style={{
                        background: 'conic-gradient(from 0deg, transparent, rgba(147,51,234,0.8), rgba(59,130,246,0.6), transparent)',
                        filter: 'blur(8px)',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Middle accretion ring */}
                <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-4 border-purple-500/40"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    style={{
                        boxShadow: '0 0 60px rgba(147,51,234,0.6), inset 0 0 40px rgba(147,51,234,0.3)',
                    }}
                />

                {/* Inner swirling vortex */}
                <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full"
                    style={{
                        background: 'conic-gradient(from 180deg, rgba(59,130,246,0.9), rgba(147,51,234,0.9), rgba(236,72,153,0.7), rgba(59,130,246,0.9))',
                        filter: 'blur(12px)',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                {/* Event horizon - the black center */}
                <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-black flex items-center justify-center"
                    style={{
                        boxShadow: 'inset 0 0 100px rgba(0,0,0,1), 0 0 80px rgba(147,51,234,0.8)',
                    }}
                    animate={{
                        boxShadow: [
                            'inset 0 0 100px rgba(0,0,0,1), 0 0 80px rgba(147,51,234,0.8)',
                            'inset 0 0 100px rgba(0,0,0,1), 0 0 120px rgba(59,130,246,1)',
                            'inset 0 0 100px rgba(0,0,0,1), 0 0 80px rgba(147,51,234,0.8)',
                        ]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {/* Gravitational lensing effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-purple-900/20 to-transparent" />
                </motion.div>

                {/* Quote below black hole */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-[350px] text-2xl md:text-3xl text-gray-400 font-light italic max-w-2xl text-center px-4"
                    style={{
                        textShadow: '0 0 20px rgba(147,51,234,0.5)',
                    }}
                >
                    "The further you go, the harder it is to leave."
                </motion.p>
            </div>

            {/* Enter the Void button */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                onClick={() => navigate('/simulation')}
                className="relative z-20 mt-16 px-12 py-5 rounded-full text-white text-xl md:text-2xl font-bold tracking-wider overflow-hidden group"
                style={{
                    background: 'linear-gradient(135deg, rgba(147,51,234,0.4), rgba(59,130,246,0.4))',
                    border: '2px solid rgba(147,51,234,0.8)',
                    boxShadow: '0 0 40px rgba(147,51,234,0.6)',
                }}
                whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 60px rgba(147,51,234,1), 0 0 100px rgba(59,130,246,0.8)',
                }}
                whileTap={{ scale: 0.95 }}
            >
                <motion.span
                    className="relative z-10"
                    animate={{
                        textShadow: [
                            '0 0 10px rgba(255,255,255,0.5)',
                            '0 0 20px rgba(147,51,234,1)',
                            '0 0 10px rgba(255,255,255,0.5)',
                        ]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    Enter the Void
                </motion.span>

                {/* Hover glow effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                />
            </motion.button>

            {/* Subtle title at top */}
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1.5 }}
                className="absolute top-12 text-4xl md:text-5xl font-black tracking-wider gradient-text"
                style={{
                    textShadow: '0 0 30px rgba(147,51,234,0.5)',
                }}
            >
                BLACKHOLE
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
                className="absolute top-24 text-sm md:text-base text-gray-500 tracking-widest"
            >
                The Gravity of the Scroll
            </motion.p>
        </main>
    );
};

export default LandingPage;
