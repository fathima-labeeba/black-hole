
import { useNavigate } from 'react-router-dom';
import GalaxyBackground from '../components/GalaxyBackground';
import { motion } from 'framer-motion';

const EscapeEntry = () => {
    const navigate = useNavigate();

    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
            <GalaxyBackground />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 p-8 max-w-2xl"
            >
                <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter text-white">
                    The Escape
                </h1>
                <p className="text-2xl text-gray-300 font-light mb-12">
                    Breaking free is harder than getting trapped. <br />
                    Are you ready to disconnect?
                </p>

                <button
                    onClick={() => navigate('/escape-plan')}
                    className="px-12 py-5 bg-white text-black font-bold text-xl rounded-full hover:scale-105 hover:bg-gray-200 transition-all shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                >
                    Initialize Escape Protocol
                </button>
            </motion.div>
        </main>
    );
};

export default EscapeEntry;
