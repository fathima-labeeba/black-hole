
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const FAKE_USERS = ['alex_wanderlust', 'tech_insider', 'foodie_adventures', 'fitness_goals', 'travel_diaries', 'fashion_daily', 'pet_lovers', 'motivation_hub', 'art_vibes', 'music_life'];

const FAKE_CONTENT = [
    'Just discovered this hidden gem! 🌴✨',
    'This changed everything for me 🚀',
    'Best meal of my life! You NEED to try this 🍕',
    '30 day transformation! Swipe to see results 💪',
    'Woke up to this view... pinch me 😍',
    'Obsessed with this outfit combo 👗',
    'My heart just melted 🐶❤️',
    'Your only limit is you. Start today! 🔥',
    'Can\'t believe this is real 😱',
    'Tag someone who needs to see this! 👇',
];

const NOTIFICATIONS = [
    'Someone liked your photo ❤️',
    'New Video for you! 🎥',
    'Don\'t miss out! 🔥',
    '3 new followers',
    'Your post is trending!',
    'Someone mentioned you',
    'New comment on your post',
    'Check out this story!',
];

const CATEGORIES = ['nature', 'tech', 'food', 'fitness', 'travel', 'fashion', 'animals', 'art'];

const SimulationLab = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [scrollCount, setScrollCount] = useState(0);
    const [timeSpent, setTimeSpent] = useState(0);
    const [notifications, setNotifications] = useState([]);
    const [scrollDistance, setScrollDistance] = useState(0);
    const [notificationCount, setNotificationCount] = useState(0);
    const scrollRef = useRef(null);
    const lastScrollTop = useRef(0);
    const startTime = useRef(Date.now());

    // Generate initial posts
    useEffect(() => {
        const initialPosts = Array.from({ length: 10 }, (_, i) => generatePost(i));
        setPosts(initialPosts);
    }, []);

    const generatePost = (index) => ({
        id: Date.now() + index,
        user: FAKE_USERS[Math.floor(Math.random() * FAKE_USERS.length)],
        content: FAKE_CONTENT[Math.floor(Math.random() * FAKE_CONTENT.length)],
        likes: Math.floor(Math.random() * 10000) + 100,
        comments: Math.floor(Math.random() * 500) + 10,
        category: CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)],
        seed: Math.random() * 10000,
    });

    // Timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeSpent(Math.floor((Date.now() - startTime.current) / 1000));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Random notifications (every 3-8 seconds)
    useEffect(() => {
        const showNotification = () => {
            const randomNotif = NOTIFICATIONS[Math.floor(Math.random() * NOTIFICATIONS.length)];
            const id = Date.now();
            setNotifications(prev => [...prev, { id, text: randomNotif }]);
            setNotificationCount(prev => prev + 1);

            setTimeout(() => {
                setNotifications(prev => prev.filter(n => n.id !== id));
            }, 3000);
        };

        const interval = setInterval(showNotification, Math.random() * 5000 + 3000);
        return () => clearInterval(interval);
    }, []);

    // Scroll tracking
    const handleScroll = () => {
        if (!scrollRef.current) return;
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

        // Track scroll distance
        const distance = Math.abs(scrollTop - lastScrollTop.current);
        if (distance > 10) {
            setScrollDistance(prev => prev + distance);
            setScrollCount(prev => prev + 1);
            lastScrollTop.current = scrollTop;
        }

        // Infinite scroll - add more posts
        if (scrollTop + clientHeight >= scrollHeight - 500) {
            const newPosts = Array.from({ length: 5 }, (_, i) => generatePost(posts.length + i));
            setPosts(prev => [...prev, ...newPosts]);
        }
    };

    // Auto-navigate after significant scrolling
    useEffect(() => {
        if (timeSpent >= 60 || scrollCount >= 50) {
            setTimeout(() => {
                navigate('/report', {
                    state: {
                        scrollCount,
                        timeSpent,
                        scrollDistance: Math.floor(scrollDistance / 1000), // Convert to meters
                        notificationCount
                    }
                });
            }, 500);
        }
    }, [timeSpent, scrollCount, navigate, scrollDistance, notificationCount]);

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-black p-4">
            {/* Mobile Container - Perfectly Centered */}
            <div className="relative w-[380px] h-[90vh] max-h-[800px] rounded-[30px] overflow-hidden bg-gradient-to-b from-gray-900 to-black shadow-2xl border border-gray-800">

                {/* Top Bar (Instagram-style) */}
                <div className="absolute top-0 left-0 right-0 z-20 bg-black/90 backdrop-blur-sm px-4 py-3 border-b border-gray-800">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            InstaVoid
                        </h1>
                        <div className="flex gap-3">
                            <span className="text-2xl">❤️</span>
                            <span className="text-2xl">💬</span>
                        </div>
                    </div>
                </div>

                {/* Feed */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="h-full pt-14 overflow-y-scroll scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {posts.map((post, i) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-3"
                        >
                            {/* User header */}
                            <div className="flex items-center px-3 py-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 mr-2" />
                                <span className="text-white text-sm font-semibold">{post.user}</span>
                            </div>

                            {/* Image */}
                            <img
                                src={`https://picsum.photos/seed/${post.seed}/400/500`}
                                alt="post"
                                className="w-full h-96 object-cover"
                                loading="lazy"
                            />

                            {/* Actions */}
                            <div className="px-3 py-2">
                                <div className="flex gap-4 mb-2">
                                    <motion.button
                                        whileTap={{ scale: 1.3 }}
                                        className="text-2xl"
                                    >
                                        ❤️
                                    </motion.button>
                                    <span className="text-2xl">💬</span>
                                    <span className="text-2xl">📤</span>
                                </div>
                                <p className="text-white text-xs font-bold mb-1">
                                    {post.likes.toLocaleString()} likes
                                </p>
                                <p className="text-gray-300 text-xs">
                                    <span className="font-semibold text-white">{post.user}</span> {post.content}
                                </p>
                                <p className="text-gray-500 text-xs mt-1">
                                    View all {post.comments} comments
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Loading indicator */}
                    <div className="flex justify-center py-4">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full"
                        />
                    </div>
                </div>

                {/* Notifications */}
                <div className="absolute top-16 right-3 z-30 flex flex-col gap-2 pointer-events-none">
                    <AnimatePresence>
                        {notifications.map((n) => (
                            <motion.div
                                key={n.id}
                                initial={{ x: 100, opacity: 0, scale: 0.8 }}
                                animate={{ x: 0, opacity: 1, scale: 1 }}
                                exit={{ x: 100, opacity: 0, scale: 0.8 }}
                                className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold shadow-2xl"
                                style={{
                                    boxShadow: '0 0 20px rgba(168,85,247,0.6)',
                                }}
                            >
                                {n.text}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default SimulationLab;
