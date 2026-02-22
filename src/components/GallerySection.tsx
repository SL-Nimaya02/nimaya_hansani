import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

interface GalleryImage {
    id: number;
    url: string;
    title: string;
    category: string;
    size: 'small' | 'medium' | 'large';
}

const categories = ['All', 'Education', 'Engineering', 'Volunteering', 'Travel', 'Events'];

const galleryImages: GalleryImage[] = [
    {
        id: 1,
        url: '/images/gallery/team_working.jpg',
        title: 'Team Sessions',
        category: 'Engineering',
        size: 'medium'
    },
    {
        id: 2,
        url: '/images/gallery/iit_campus.jpg',
        title: 'IIT Campus',
        category: 'Education',
        size: 'large'
    },
    {
        id: 3,
        url: '/images/gallery/area5_architecture.jpg',
        title: 'Working Environment',
        category: 'Engineering',
        size: 'medium'
    },
    {
        id: 4,
        url: '/images/gallery/charity.jpeg',
        title: 'Community Support - Kandy',
        category: 'Volunteering',
        size: 'small'
    },
    {
        id: 5,
        url: '/images/gallery/ifs_visit.jpeg',
        title: 'IFS Visit',
        category: 'Engineering',
        size: 'medium'
    },
    {
        id: 6,
        url: '/images/gallery/iit_library.jpeg',
        title: 'Library Hours',
        category: 'Education',
        size: 'small'
    },
    {
        id: 7,
        url: '/images/gallery/codegen_office.jpeg',
        title: 'Codegen Office',
        category: 'Engineering',
        size: 'large'
    },
    {
        id: 8,
        url: '/images/gallery/charity_in_ditwa.jpeg',
        title: 'Charity in Ditwa',
        category: 'Volunteering',
        size: 'medium'
    },
    {
        id: 9,
        url: '/images/gallery/working_at_rise.jpeg',
        title: 'Working at RISE',
        category: 'Engineering',
        size: 'small'
    },
    {
        id: 10,
        url: '/images/gallery/iit_campus_cafe.jpeg',
        title: 'Campus Life',
        category: 'Education',
        size: 'medium'
    },
    {
        id: 11,
        url: '/images/gallery/charity_ppolonnaruwa.jpeg',
        title: 'Community Support - Polonnaruwa',
        category: 'Volunteering',
        size: 'large'
    },
    {
        id: 12,
        url: '/images/gallery/rise_trainging.jpeg',
        title: 'RISE Training Team',
        category: 'Engineering',
        size: 'medium'
    },
    {
        id: 13,
        url: '/images/gallery/iit_lectures.jpeg',
        title: 'Academic Lectures',
        category: 'Education',
        size: 'small'
    },
    {
        id: 14,
        url: '/images/gallery/saloon_opening.jpeg',
        title: 'Saloon Opening',
        category: 'Events',
        size: 'medium'
    },
    {
        id: 15,
        url: '/images/gallery/charity_hatharaliyadda.jpeg',
        title: 'Community Support - Hatharaliyadda',
        category: 'Volunteering',
        size: 'large'
    },
    {
        id: 16,
        url: '/images/gallery/rise_training_AIteam.jpeg',
        title: 'RISE Training Team',
        category: 'Engineering',
        size: 'medium'
    },
    {
        id: 17,
        url: '/images/gallery/uni_work.jpeg',
        title: 'University Projects',
        category: 'Education',
        size: 'small'
    },
    {
        id: 18,
        url: '/images/gallery/Charity_polonnaruwa_lunch.jpeg',
        title: 'Community Support - Polonnaruwa',
        category: 'Volunteering',
        size: 'medium'
    },
    {
        id: 19,
        url: '/images/gallery/ifs_visit_group.jpeg',
        title: 'IFS Group Visit',
        category: 'Engineering',
        size: 'large'
    },
    {
        id: 20,
        url: '/images/gallery/working_at_iit_library.jpeg',
        title: 'IIT Library Work',
        category: 'Education',
        size: 'medium'
    },
    {
        id: 21,
        url: '/images/gallery/Mob.jpeg',
        title: 'Mob Office',
        category: 'Engineering',
        size: 'small'
    },
    {
        id: 22,
        url: '/images/gallery/working_with_friends.jpeg',
        title: 'Collaborative Work',
        category: 'Engineering',
        size: 'medium'
    },
    {
        id: 23,
        url: '/images/gallery/travel.jpeg',
        title: 'Travel Adventures',
        category: 'Travel',
        size: 'large'
    },
    {
        id: 24,
        url: '/images/gallery/enjoy_traveling.jpeg',
        title: 'Enjoy Working Environment',
        category: 'Travel',
        size: 'medium'
    },
    {
        id: 25,
        url: '/images/gallery/traveling_ehibitions.jpeg',
        title: 'Exhibition',
        category: 'Travel',
        size: 'small'
    },
    {
        id: 26,
        url: '/images/gallery/traveling_vehicle.jpeg',
        title: 'Travel',
        category: 'Travel',
        size: 'medium'
    },
    {
        id: 27,
        url: '/images/gallery/tiktok_page_octagal.jpeg',
        title: 'Tiktok Page - Octagal',
        category: 'Events',
        size: 'large'
    }
];

export function GallerySection() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [showAll, setShowAll] = useState(false);

    const INITIAL_DISPLAY_COUNT = 10;

    const filteredImages = galleryImages.filter(img =>
        activeCategory === 'All' || img.category === activeCategory
    );

    const displayedImages = showAll ? filteredImages : filteredImages.slice(0, INITIAL_DISPLAY_COUNT - 1);

    return (
        <section id="gallery" className="relative py-24 md:py-32 overflow-hidden">
            {/* Background glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/[0.02] blur-[140px]"
                aria-hidden="true"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeading
                    label="Gallery"
                    title="Visual Journey"
                    description="A collection of snapshots from various projects, experiments, and creative explorations."
                />

                {/* Filters */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setActiveCategory(category);
                                setShowAll(false);
                            }}
                            className={`
                  px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${activeCategory === category
                                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                                    : 'bg-white/[0.02] text-dark-400 hover:text-white border border-white/[0.05] hover:border-white/[0.1]'}
                `}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[240px]">
                    <AnimatePresence mode="popLayout">
                        {displayedImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className={`
                    relative group overflow-hidden rounded-2xl glass-card h-full
                    ${image.size === 'large' ? 'lg:row-span-2' : ''}
                    ${image.size === 'medium' ? 'sm:row-span-1' : ''}
                  `}
                            >
                                <img
                                    src={image.url}
                                    alt={image.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="font-mono text-[10px] text-purple-400 uppercase tracking-widest mb-1">
                                        {image.category}
                                    </span>
                                    <h3 className="text-white font-display font-semibold text-lg">
                                        {image.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}

                        {/* Toggle Card */}
                        {filteredImages.length >= INITIAL_DISPLAY_COUNT && (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => setShowAll(!showAll)}
                                className="relative group cursor-pointer overflow-hidden rounded-2xl glass-card h-full flex flex-col items-center justify-center border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                            >
                                {/* Dark Overlay & Content */}
                                <div className="absolute inset-0 bg-dark-950/80 backdrop-blur-sm group-hover:bg-dark-950/60 transition-colors duration-300" />

                                <div className="relative z-10 p-6 text-center space-y-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110 group-hover:bg-purple-500/30 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                                        <motion.div
                                            animate={{ rotate: showAll ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </motion.div>
                                    </div>
                                    <div className="transition-all duration-300">
                                        <p className="text-white font-display font-bold text-lg tracking-tight">
                                            {showAll ? 'Show Less' : `+${filteredImages.length - (INITIAL_DISPLAY_COUNT - 1)} More`}
                                        </p>
                                        <p className="text-purple-300/80 text-[10px] uppercase font-mono tracking-[0.2em] mt-1">
                                            {showAll ? 'Back to Gallery' : 'View Full Journey'}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
