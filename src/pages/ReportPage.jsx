
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ReportPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { scrollCount = 0, timeSpent = 0, scrollDistance = 0, notificationCount = 0 } = location.state || {};

    const [showGlitch, setShowGlitch] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Glitch effect then show content
        setTimeout(() => {
            setShowGlitch(false);
            setShowContent(true);
        }, 2000);
    }, []);

    const minutes = Math.floor(timeSpent / 60);
    const seconds = timeSpent % 60;
    const distanceKm = (scrollDistance / 1000).toFixed(2);

    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden">
            {/* Glitch overlay */}
            {showGlitch && (
                <motion.div
                    className="fixed inset-0 z-50 bg-black flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 0.5, 1, 0.3, 1, 0] }}
                    transition={{ duration: 2 }}
                >
                    <div className="glitch-text text-6xl font-black text-red-500">
                        SYSTEM ERROR
                    </div>
                </motion.div>
            )}

            {/* Main content */}
            {showContent && (
                <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
                    {/* TRAPPED message */}
                    <motion.h1
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="text-8xl md:text-9xl font-black text-red-500 mb-12"
                        style={{
                            textShadow: '0 0 40px rgba(239,68,68,0.8), 0 0 80px rgba(239,68,68,0.4)',
                        }}
                    >
                        TRAPPED
                    </motion.h1>

                    {/* Waste Metrics */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-4xl w-full space-y-8"
                    >
                        {/* Time Lost */}
                        <div className="bg-gradient-to-r from-red-900/20 to-purple-900/20 border border-red-500/30 rounded-2xl p-6">
                            <h2 className="text-2xl font-bold text-red-400 mb-3">⏱️ Time Lost</h2>
                            <p className="text-4xl font-black text-white mb-2">
                                {minutes} minutes {seconds} seconds
                            </p>
                            <p className="text-gray-400 text-lg">
                                You scrolled for <span className="text-red-400 font-bold">{minutes > 0 ? `${minutes} minutes` : `${seconds} seconds`}</span> without intent.
                            </p>

                            {/* Progress bar */}
                            <div className="mt-4 h-3 bg-gray-800 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${Math.min((timeSpent / 120) * 100, 100)}%` }}
                                    transition={{ delay: 0.5, duration: 1 }}
                                    className="h-full bg-gradient-to-r from-red-500 to-orange-500"
                                />
                            </div>
                        </div>

                        {/* Distance */}
                        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-6">
                            <h2 className="text-2xl font-bold text-blue-400 mb-3">📏 Distance</h2>
                            <p className="text-4xl font-black text-white mb-2">
                                {distanceKm} km
                            </p>
                            <p className="text-gray-400 text-lg">
                                You traveled <span className="text-blue-400 font-bold">{distanceKm}km</span> with your thumb.
                            </p>

                            {/* Circular progress */}
                            <div className="mt-4 flex items-center gap-4">
                                <svg className="w-20 h-20" viewBox="0 0 100 100">
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="none"
                                        stroke="#1f2937"
                                        strokeWidth="8"
                                    />
                                    <motion.circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="none"
                                        stroke="url(#blueGradient)"
                                        strokeWidth="8"
                                        strokeLinecap="round"
                                        strokeDasharray={`${2 * Math.PI * 40}`}
                                        initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                                        animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - Math.min(scrollDistance / 2000, 1)) }}
                                        transition={{ delay: 0.7, duration: 1.5 }}
                                        transform="rotate(-90 50 50)"
                                    />
                                    <defs>
                                        <linearGradient id="blueGradient">
                                            <stop offset="0%" stopColor="#3b82f6" />
                                            <stop offset="100%" stopColor="#8b5cf6" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="text-sm text-gray-400">
                                    Scroll distance tracked
                                </div>
                            </div>
                        </div>

                        {/* Dopamine Hits */}
                        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-6">
                            <h2 className="text-2xl font-bold text-purple-400 mb-3">💊 Dopamine Hits</h2>
                            <p className="text-4xl font-black text-white mb-2">
                                {notificationCount} notifications
                            </p>
                            <p className="text-gray-400 text-lg">
                                You ignored <span className="text-purple-400 font-bold">{notificationCount} fake notifications</span>.
                            </p>

                            {/* Bar chart */}
                            <div className="mt-4 flex items-end gap-2 h-24">
                                {Array.from({ length: 8 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        animate={{ height: `${Math.random() * 60 + 40}%` }}
                                        transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
                                        className="flex-1 bg-gradient-to-t from-purple-600 to-pink-500 rounded-t"
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                        onClick={() => navigate('/escape-plan')}
                        className="mt-12 px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl font-bold shadow-2xl hover:scale-105 transition-transform"
                        style={{
                            boxShadow: '0 0 40px rgba(147,51,234,0.6)',
                        }}
                    >
                        See Your Escape Plan
                    </motion.button>
                </div>
            )}

            {/* Glitch CSS */}
            <style>{`
                @keyframes glitch {
                    0% { transform: translate(0); }
                    20% { transform: translate(-2px, 2px); }
                    40% { transform: translate(-2px, -2px); }
                    60% { transform: translate(2px, 2px); }
                    80% { transform: translate(2px, -2px); }
                    100% { transform: translate(0); }
                }
                
                .glitch-text {
                    animation: glitch 0.3s infinite;
                    text-shadow: 
                        2px 2px 0 #ff0000,
                        -2px -2px 0 #00ffff;
                }
            `}</style>
        </div>
    );
};

export default ReportPage;
