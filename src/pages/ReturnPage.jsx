
import { motion } from 'framer-motion';

const ReturnPage = () => {
    return (
        <div
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
            style={{
                background: 'linear-gradient(to bottom, #87CEEB 0%, #98D8C8 50%, #F7DC6F 100%)',
            }}
        >
            {/* Floating particles (like pollen or light) */}
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/40 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                        duration: Math.random() * 4 + 3,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            {/* Sun/light source */}
            <motion.div
                className="absolute top-20 right-20 w-32 h-32 rounded-full bg-yellow-300/60 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                }}
            />

            {/* Main content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center px-8 max-w-3xl"
            >
                {/* Nature emoji */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-8xl mb-8"
                >
                    🌿
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-6xl md:text-7xl font-black mb-6 text-gray-800"
                    style={{
                        textShadow: '2px 2px 4px rgba(255,255,255,0.5)',
                    }}
                >
                    Welcome Back
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-2xl md:text-3xl text-gray-700 mb-12 font-light"
                >
                    You've escaped the void.
                    <br />
                    The real world is waiting.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="space-y-6"
                >
                    <p className="text-xl text-gray-600 mb-8">
                        It's time to reconnect with what matters.
                    </p>

                    <motion.button
                        onClick={() => window.close()}
                        className="px-12 py-5 rounded-full bg-gradient-to-r from-green-400 to-blue-400 text-white text-2xl font-bold shadow-2xl"
                        whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Close this tab and go outside
                    </motion.button>

                    <p className="text-sm text-gray-500 mt-6">
                        (Or press Alt+F4 / Cmd+W)
                    </p>
                </motion.div>

                {/* Quote */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-16 text-lg text-gray-600 italic"
                >
                    "The best things in life aren't things."
                </motion.p>
            </motion.div>

            {/* Bottom nature elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-400/30 to-transparent" />
        </div>
    );
};

export default ReturnPage;
