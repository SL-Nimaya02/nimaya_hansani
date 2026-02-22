import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import {
  ExternalLinkIcon,
  GithubIcon,
} from
  'lucide-react';
type TabType = 'development' | 'design';
interface CaseStudy {
  title: string;
  category: string;
  description: string;
  image: string;
  liveUrl?: string;
}
const designCaseStudies: CaseStudy[] = [
  {
    title: 'Saloon Booking Mobile App',
    category: 'UI/UX Case Study',
    description: 'A comprehensive mobile solution for salons, featuring a streamlined booking flow, service catalogs, and personalized user profiles. Focused on reducing appointment abandonment and improving user retention.',
    image: '/images/projects/saloon_booking_mobile_app.png',
    liveUrl: 'https://www.figma.com/design/vROtIuI6yI8gC4lXsCrql1/Saloon-Booking-Mobile-App?t=jo2B7e0modyuKhps-1'
  },
  {
    title: 'EV Charging Booking Mobile App',
    category: 'UI/UX Case Study',
    description: 'Designed a clean and intuitive mobile app that helps EV users find charging stations, check availability, and book slots seamlessly, focusing on smooth user flow and simple navigation.',
    image: '/images/projects/ev_charging.png',
    liveUrl: 'https://www.figma.com/design/Dxs1TuduGAtPaqFiJXP8xr/EV-Charging-App?t=jo2B7e0modyuKhps-1'
  },
  {
    title: 'Coffee Shop website',
    category: 'UI/UX Case Study',
    description: 'Designed a modern and visually engaging coffee shop website focused on brand identity, smooth navigation, and an intuitive ordering experience. Emphasized warm visuals, clear layout structure, and user-friendly interactions.',
    image: '/images/projects/Coffee_shop.png',
    liveUrl: 'https://www.figma.com/design/mBugWAaDjeSFT2t2aF0pO6/Coffee-Shop---Sweet-Coffee?node-id=1-2&t=MiPm62OGJz4iQDqU-1'
  },
  {
    title: 'Chat UI mobile App',
    category: 'UI/UX Case Study',
    description: 'Created a clean and minimal chat interface with a focus on usability, message clarity, and smooth interaction flow. Designed intuitive layouts, modern components, and a distraction-free communication experience.',
    image: '/images/projects/chat_ui.png',
    liveUrl: 'https://www.figma.com/design/TKSKGBGv2gxPcMfI9I56Zj/Chat-UI?t=9nSvHIAeQ0z1ZOvl-1'
  },
  {
    title: 'Juicy Website',
    category: 'UI/UX Case Study',
    description: 'Designed a vibrant and refreshing product website with strong visual hierarchy and engaging layouts. Focused on showcasing products effectively while ensuring a seamless browsing experience.',
    image: '/images/projects/juicy_website.png',
    liveUrl: 'https://www.figma.com/design/b6xCkY26ATse2gPdUppzJy/Juicy-WebSite?node-id=2-2&t=MiPm62OGJz4iQDqU-1'
  },
  {
    title: 'Sweet cake shop website',
    category: 'UI/UX Case Study',
    description: 'Developed an elegant and user-friendly cake shop website with soft visuals and clear product presentation. Prioritized easy navigation, attractive product displays, and a smooth ordering journey.',
    image: '/images/projects/sweet_cake.png',
    liveUrl: 'https://www.figma.com/design/G0qLmlrNzYdgcxUK4uOVSP/Sweet-Cake-shop-Web-Site?t=MiPm62OGJz4iQDqU-1'
  },
  {
    title: 'Sri lankan Travel mobile App for local and International',
    category: 'UI/UX Case Study',
    description: 'Designed a travel mobile app tailored for both local and international users, focusing on easy trip planning, destination discovery, and intuitive booking flow. Emphasized accessibility, clear information architecture, and smooth user experience.',
    image: '/images/projects/travle_mobile.png',
    liveUrl: 'https://www.figma.com/design/EWLmhE2fezcD9ALKFaAqjo/Sri-lankan-travel-app---Mobile?t=lR7CQaOBSJjoOwMO-1'
  }
];

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<TabType>('development');
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/[0.03] blur-[120px]"
        aria-hidden="true" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Projects"
          title="Selected Work"
          description="A curated selection of engineering projects and design case studies." />


        {/* Tab switcher */}
        <ScrollReveal>
          <div className="flex items-center justify-center mb-12">
            <div className="inline-flex p-1 rounded-full bg-dark-900 border border-white/[0.06]">
              <button
                onClick={() => setActiveTab('development')}
                className={`relative px-5 py-2.5 text-sm font-medium rounded-full transition-colors duration-300 ${activeTab === 'development' ? 'text-white' : 'text-dark-400 hover:text-dark-200'}`}>

                {activeTab === 'development' &&
                  <motion.div
                    className="absolute inset-0 bg-purple-600 rounded-full"
                    layoutId="projectTab"
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30
                    }} />

                }
                <span className="relative z-10">Development</span>
              </button>
              <button
                onClick={() => setActiveTab('design')}
                className={`relative px-5 py-2.5 text-sm font-medium rounded-full transition-colors duration-300 ${activeTab === 'design' ? 'text-white' : 'text-dark-400 hover:text-dark-200'}`}>

                {activeTab === 'design' &&
                  <motion.div
                    className="absolute inset-0 bg-purple-600 rounded-full"
                    layoutId="projectTab"
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30
                    }} />

                }
                <span className="relative z-10">Design</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'development' ?
            <motion.div
              key="development"
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -20
              }}
              transition={{
                duration: 0.4
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Project 1 */}
              <ScrollReveal delay={0}>
                <div className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="/images/projects/wego_travels.jpeg"
                      alt="Wego Travels website preview"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="font-mono text-[10px] text-purple-400 uppercase tracking-wider mb-2">
                      Web-site
                    </span>
                    <h3 className="font-display text-lg font-semibold text-white mb-2">
                      Wego Travels
                    </h3>
                    <p className="text-dark-400 text-sm leading-relaxed mb-4 flex-1">
                      Wego Travels is a fully responsive travel website offering personalized inbound and outbound trips. With interactive features, smooth animations, and an intuitive interface, it makes planning, booking, and exploring your adventures seamless and enjoyable across all devices.
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        React
                      </span>
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        TypeScript
                      </span>
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        Vite
                      </span>
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        Tailwind CSS
                      </span>

                    </div>
                    <div className="flex items-center gap-3 pt-4 border-t border-white/[0.04]">

                      <a
                        href="https://wegotravels.lk/"
                        className="inline-flex items-center gap-1.5 text-xs text-dark-400 hover:text-purple-300 transition-colors">

                        <ExternalLinkIcon className="w-3.5 h-3.5" /> Live
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Project 2 */}
              <ScrollReveal delay={0.1}>
                <div className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="/images/projects/digital_points.png"
                      alt="Digital Points website preview"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="font-mono text-[10px] text-purple-400 uppercase tracking-wider mb-2">
                      Web-site
                    </span>
                    <h3 className="font-display text-lg font-semibold text-white mb-2">
                      Digital Points
                    </h3>
                    <p className="text-dark-400 text-sm leading-relaxed mb-4 flex-1">
                      Our digital printing website lets you create custom products like banners, mugs, and posters with interactive previews and smooth animations, delivering a seamless, responsive experience and professional-quality prints across all devices.
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        React
                      </span>
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        Vite
                      </span>
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        Tailwind CSS
                      </span>
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        TypeScript
                      </span>
                    </div>
                    <div className="flex items-center gap-3 pt-4 border-t border-white/[0.04]">

                      <a
                        href="https://digitalpoint.lk/"
                        className="inline-flex items-center gap-1.5 text-xs text-dark-400 hover:text-purple-300 transition-colors">

                        <ExternalLinkIcon className="w-3.5 h-3.5" /> live
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Project 3 */}
              <ScrollReveal delay={0.2}>
                <div className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="/images/projects/optivex.png"
                      alt="Optivex electronics e-commerce preview"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="font-mono text-[10px] text-purple-400 uppercase tracking-wider mb-2">
                      Frontend Development
                    </span>
                    <h3 className="font-display text-lg font-semibold text-white mb-2">
                      Optivex
                    </h3>
                    <p className="text-dark-400 text-sm leading-relaxed mb-4 flex-1">
                      Our electronics e-commerce website offers a fully responsive, user-friendly platform for browsing and purchasing products like smartphones, laptops, and accessories. With interactive product previews, smooth animations, and intuitive navigation, it ensures a seamless shopping experience across all devices while showcasing products effectively.
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        Next.js
                      </span>
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        Tailwind CSS
                      </span>
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        TypeScript
                      </span>

                    </div>
                    <div className="flex items-center gap-3 pt-4 border-t border-white/[0.04]">

                      <a
                        href="https://optivex-e-commerce.vercel.app"
                        className="inline-flex items-center gap-1.5 text-xs text-dark-400 hover:text-purple-300 transition-colors">

                        <ExternalLinkIcon className="w-3.5 h-3.5" /> Live
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Project 4 */}
              <ScrollReveal delay={0.3}>
                <div className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="/images/projects/yeildpro.jpeg"
                      alt="Yield-Pro apple price forecasting preview"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="font-mono text-[10px] text-purple-400 uppercase tracking-wider mb-2">
                      Machine Learing & Full-stack Development
                    </span>
                    <h3 className="font-display text-lg font-semibold text-white mb-2">
                      Yield-Pro
                    </h3>
                    <p className="text-dark-400 text-sm leading-relaxed mb-4 flex-1">
                      Developed a full-stack apple price forecasting app using React.js, Flask, and FB Prophet. The system predicts future prices per kilo, calculates total cost based on user input, displays comparison charts, and allows report downloads. Gained hands-on experience in machine learning, time series forecasting, and full-stack development.
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        Python
                      </span>
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        React
                      </span>
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        Flask
                      </span>
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        FB Prophet
                      </span>
                    </div>
                    <div className="flex items-center gap-3 pt-4 border-t border-white/[0.04]">
                      <a
                        href="https://github.com/SL-Nimaya02/SDGP_Acadamic_Group_Project"
                        className="inline-flex items-center gap-1.5 text-xs text-dark-400 hover:text-purple-300 transition-colors">
                        <GithubIcon className="w-3.5 h-3.5" /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Project 5 */}
              <ScrollReveal delay={0.4}>
                <div className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="/images/projects/employee_performace.png"
                      alt="Optivex electronics e-commerce preview"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="font-mono text-[10px] text-purple-400 uppercase tracking-wider mb-2">
                      Frontend & Backend Development
                    </span>
                    <h3 className="font-display text-lg font-semibold text-white mb-2">
                      Employee Performance Summaries
                    </h3>
                    <p className="text-dark-400 text-sm leading-relaxed mb-4 flex-1">
                      Developed a comprehensive Employee Performance Summaries system using HTML,CSS,JS , Google Gemini AI, Python & Flask. The application streamlines performance evaluation by generating automated summaries, tracking key metrics, and providing visual analytics for managers and employees.
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        Python
                      </span>
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        Flask
                      </span>
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        Google Gemini AI
                      </span>
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        HTML
                      </span>
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        CSS
                      </span>
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        JavaScript
                      </span>
                    </div>
                    <div className="flex items-center gap-3 pt-4 border-t border-white/[0.04]">
                      <a
                        href="https://github.com/SL-Nimaya02/Employee_Performance_Summaries"
                        className="inline-flex items-center gap-1.5 text-xs text-dark-400 hover:text-purple-300 transition-colors">
                        <GithubIcon className="w-3.5 h-3.5" /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Project 6 */}
              <ScrollReveal delay={0.5}>
                <div className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="/images/projects/blog_post.png"
                      alt="Optivex electronics e-commerce preview"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="font-mono text-[10px] text-purple-400 uppercase tracking-wider mb-2">
                      Backend Development
                    </span>
                    <h3 className="font-display text-lg font-semibold text-white mb-2">
                      Blog Post Management System
                    </h3>
                    <p className="text-dark-400 text-sm leading-relaxed mb-4 flex-1">
                      A simple and clean CRUD API built with .NET 8 Minimal APIs to manage blog posts and categories. This backend service uses Entity Framework Core with in-memory and supports JWT authentication for protected operations.
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        .NET 8
                      </span>
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        Entity Framework Core
                      </span>
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        JWT Authentication
                      </span>
                      <span className="px-2 py-1 text-[10px] font-mono text-dark-400 bg-dark-800 rounded-md">
                        Minimal API
                      </span>
                    </div>
                    <div className="flex items-center gap-3 pt-4 border-t border-white/[0.04]">
                      <a
                        href="https://github.com/SL-Nimaya02/BlogPostManagement"
                        className="inline-flex items-center gap-1.5 text-xs text-dark-400 hover:text-purple-300 transition-colors">
                        <GithubIcon className="w-3.5 h-3.5" /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </motion.div> :

            <motion.div
              key="design"
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -20
              }}
              transition={{
                duration: 0.4
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {designCaseStudies.map((study, index) => (
                <ScrollReveal key={study.title} delay={index * 0.1}>
                  <div className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="font-mono text-[10px] text-purple-400 uppercase tracking-wider mb-2">
                        {study.category}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-white mb-2">
                        {study.title}
                      </h3>
                      <p className="text-dark-400 text-sm leading-relaxed mb-4 flex-1">
                        {study.description}
                      </p>
                      {study.liveUrl && study.liveUrl !== '#' && (
                        <div className="flex items-center gap-3 pt-4 border-t border-white/[0.04]">
                          <a
                            href={study.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-dark-400 hover:text-purple-300 transition-colors">
                            <ExternalLinkIcon className="w-3.5 h-3.5" /> View Project
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </motion.div>
          }
        </AnimatePresence>
      </div>

    </section>);

}