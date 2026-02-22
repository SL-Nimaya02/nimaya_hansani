import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { MagneticButton } from './MagneticButton';
import emailjs from '@emailjs/browser';
import {
  SendIcon,
  MailIcon,
  MapPinIcon,
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  FacebookIcon,
  CheckCircleIcon
} from
  'lucide-react';
function TikTokIcon({ className }: { className?: string; }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg">

      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.2a8.16 8.16 0 005.58 2.17v-3.44a4.85 4.85 0 01-3.77-1.47V6.69h3.77z" />
    </svg>);

}
interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}
export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required'; else
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        newErrors.email = 'Invalid email format';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_t3cwwmr",
        "template_p8wqnkd",
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "0HT41Ki6kuVSVtk9J"
      );

      setIsSubmitted(true);

      setForm({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      alert("Failed to send message. Try again.");
    }

    setIsSubmitting(false);
  };
  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined
      }));
    }
  };
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/[0.04] blur-[120px]"
        aria-hidden="true" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          description="Have a project in mind or just want to chat? I'd love to hear from you." />


        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <MailIcon className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-500 mb-1">Email</p>
                    <a
                      href="mailto:nimayahansani73@gmail.com"
                      className="text-white hover:text-purple-300 transition-colors text-sm font-medium">

                      nimayahansani73@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-500 mb-1">Location</p>
                    <p className="text-white text-sm font-medium">
                      No.257/B,Hatharaliyadda,kandy,Sri Lanka
                    </p>
                    <p className="text-dark-500 text-xs">Open to remote work</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <p className="text-sm text-dark-500 mb-3">Connect with me</p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/SL-Nimaya02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-dark-400 hover:text-purple-400 hover:border-purple-500/20 transition-all duration-300"
                    aria-label="GitHub">
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nimaya-hansani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-dark-400 hover:text-purple-400 hover:border-purple-500/20 transition-all duration-300"
                    aria-label="LinkedIn">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@octal_gal.l?_r=1&_t=ZS-944i6ck8TDD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-dark-400 hover:text-purple-400 hover:border-purple-500/20 transition-all duration-300"
                    aria-label="TikTok">
                    <TikTokIcon className="w-5 h-5" />
                  </a>

                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="right">
              <div className="glass-card rounded-2xl p-6 md:p-8">
                {isSubmitted ?
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                      <CheckCircleIcon className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-dark-400 text-sm mb-6">
                      Thank you for reaching out. I'll get back to you within 24
                      hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-sm text-purple-400 hover:text-purple-300 transition-colors">

                      Send another message
                    </button>
                  </div> :

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm text-dark-300 mb-2 font-medium">

                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={form.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className={`w-full px-4 py-3 bg-dark-900/50 border rounded-xl text-white text-sm placeholder-dark-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all ${errors.name ? 'border-red-500/50' : 'border-white/[0.06]'}`}
                          placeholder="Your name" />

                        {errors.name &&
                          <p className="text-red-400 text-xs mt-1">
                            {errors.name}
                          </p>
                        }
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm text-dark-300 mb-2 font-medium">

                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            handleChange('email', e.target.value)
                          }
                          className={`w-full px-4 py-3 bg-dark-900/50 border rounded-xl text-white text-sm placeholder-dark-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all ${errors.email ? 'border-red-500/50' : 'border-white/[0.06]'}`}
                          placeholder="you@email.com" />

                        {errors.email &&
                          <p className="text-red-400 text-xs mt-1">
                            {errors.email}
                          </p>
                        }
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm text-dark-300 mb-2 font-medium">

                        Subject{' '}
                        <span className="text-dark-600">(optional)</span>
                      </label>
                      <input
                        id="subject"
                        type="text"
                        value={form.subject}
                        onChange={(e) =>
                          handleChange('subject', e.target.value)
                        }
                        className="w-full px-4 py-3 bg-dark-900/50 border border-white/[0.06] rounded-xl text-white text-sm placeholder-dark-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                        placeholder="What's this about?" />

                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm text-dark-300 mb-2 font-medium">

                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          handleChange('message', e.target.value)
                        }
                        className={`w-full px-4 py-3 bg-dark-900/50 border rounded-xl text-white text-sm placeholder-dark-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all resize-none ${errors.message ? 'border-red-500/50' : 'border-white/[0.06]'}`}
                        placeholder="Tell me about your project..." />

                      {errors.message &&
                        <p className="text-red-400 text-xs mt-1">
                          {errors.message}
                        </p>
                      }
                    </div>

                    <MagneticButton strength={0.15}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-purple-600 hover:bg-purple-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-full transition-colors duration-300 text-sm">

                        {isSubmitting ?
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </> :

                          <>
                            Send Message
                            <SendIcon className="w-4 h-4" />
                          </>
                        }
                      </button>
                    </MagneticButton>
                  </form>
                }
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>);

}