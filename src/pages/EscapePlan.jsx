
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const EscapePlan = () => {
    const navigate = useNavigate();
    const [commitments, setCommitments] = useState({
        friction: false,
        grayscale: false,
        twentyMinute: false,
    });

    const toggleCommitment = (key) => {
        setCommitments(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-6xl font-black mb-4 text-gray-900">
                        The Escape Plan
                    </h1>
                    <p className="text-xl text-gray-600">
                        Three simple steps to reclaim your attention
                    </p>
                </motion.div>

                {/* Plan sections */}
                <div className="space-y-8">
                    {/* 1. Friction */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-3xl shadow-lg p-8 border-2 border-gray-200"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h2 className="text-3xl font-bold text-purple-600 mb-2">
                                    1. Add Friction
                                </h2>
                                <p className="text-gray-600 text-lg mb-4">
                                    Turn off infinite scroll settings
                                </p>
                            </div>
                            <motion.button
                                onClick={() => toggleCommitment('friction')}
                                className={`w-16 h-8 rounded-full transition-colors ${commitments.friction ? 'bg-purple-600' : 'bg-gray-300'
                                    }`}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    className="w-6 h-6 bg-white rounded-full shadow-md"
                                    animate={{ x: commitments.friction ? 36 : 4 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            </motion.button>
                        </div>
                        <div className="space-y-3 text-gray-700">
                            <p>📱 <strong>Instagram:</strong> Settings → Account → Sensitive Content Control → Limit</p>
                            <p>🎵 <strong>TikTok:</strong> Settings → Screen Time → Set daily limit to 30 minutes</p>
                            <p>📺 <strong>YouTube:</strong> Settings → Autoplay → Turn off</p>
                        </div>
                    </motion.div>

                    {/* 2. Grayscale */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white rounded-3xl shadow-lg p-8 border-2 border-gray-200"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h2 className="text-3xl font-bold text-blue-600 mb-2">
                                    2. Kill the Dopamine
                                </h2>
                                <p className="text-gray-600 text-lg mb-4">
                                    Turn your phone screen black and white
                                </p>
                            </div>
                            <motion.button
                                onClick={() => toggleCommitment('grayscale')}
                                className={`w-16 h-8 rounded-full transition-colors ${commitments.grayscale ? 'bg-blue-600' : 'bg-gray-300'
                                    }`}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    className="w-6 h-6 bg-white rounded-full shadow-md"
                                    animate={{ x: commitments.grayscale ? 36 : 4 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            </motion.button>
                        </div>
                        <div className="space-y-3 text-gray-700">
                            <p>🍎 <strong>iPhone:</strong> Settings → Accessibility → Display & Text Size → Color Filters → Grayscale</p>
                            <p>🤖 <strong>Android:</strong> Settings → Digital Wellbeing → Bedtime Mode → Grayscale</p>
                            <p className="text-sm text-gray-500 italic">
                                Pro tip: Set up a shortcut (triple-click home button) to toggle this quickly
                            </p>
                        </div>
                    </motion.div>

                    {/* 3. 20-Minute Rule */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-white rounded-3xl shadow-lg p-8 border-2 border-gray-200"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h2 className="text-3xl font-bold text-green-600 mb-2">
                                    3. The 20-Minute Rule
                                </h2>
                                <p className="text-gray-600 text-lg mb-4">
                                    Set physical boundaries
                                </p>
                            </div>
                            <motion.button
                                onClick={() => toggleCommitment('twentyMinute')}
                                className={`w-16 h-8 rounded-full transition-colors ${commitments.twentyMinute ? 'bg-green-600' : 'bg-gray-300'
                                    }`}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    className="w-6 h-6 bg-white rounded-full shadow-md"
                                    animate={{ x: commitments.twentyMinute ? 36 : 4 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            </motion.button>
                        </div>
                        <div className="space-y-3 text-gray-700">
                            <p>⏰ No phone for the first 20 minutes after waking up</p>
                            <p>🛏️ No phone for the last 20 minutes before bed</p>
                            <p>🍽️ No phone during meals</p>
                            <p className="text-sm text-gray-500 italic">
                                Keep your phone in another room during these times
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Progress indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-600 mb-4">
                        Commitments made: {Object.values(commitments).filter(Boolean).length} / 3
                    </p>
                    <div className="flex gap-2 justify-center mb-8">
                        {Object.values(commitments).map((committed, i) => (
                            <div
                                key={i}
                                className={`w-3 h-3 rounded-full transition-colors ${committed ? 'bg-green-500' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>

                    <motion.button
                        onClick={() => navigate('/return')}
                        className="px-10 py-4 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white text-xl font-bold shadow-xl hover:scale-105 transition-transform"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        I'm Ready to Return
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default EscapePlan;
