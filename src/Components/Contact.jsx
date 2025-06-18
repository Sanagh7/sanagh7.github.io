// src/components/Contact.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../constants";
import {
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCheck,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="relative py-24 sm:py-32">
      {/* Enhanced background elements */}
      <div className="absolute left-0 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-500/5 to-blue-500/5 blur-3xl animate-pulse" style={{ animationDuration: "15s" }}></div>
      <div className="absolute bottom-1/4 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-purple-500/5 to-blue-500/5 blur-3xl animate-pulse" style={{ animationDuration: "12s", animationDelay: "2s" }}></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-sm uppercase tracking-wider text-cyan-400 font-semibold">Get in Touch</span>
            <h2 className="mt-2 mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Let's <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="mx-auto max-w-xl text-neutral-400 text-sm sm:text-base">
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect. I'm always open to new opportunities 
              and collaborations.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-20">
            {/* Contact Information */}
            <motion.div
              className="lg:col-span-2"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 shadow-xl border border-neutral-800/50 backdrop-blur-sm h-full">
                <motion.h3
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  className="mb-6 text-2xl font-semibold text-white"
                >
                  Contact Information
                </motion.h3>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  className="mb-10 text-neutral-400"
                >
                  I'm currently available for freelance work and full-time
                  positions. Let's build something amazing together!
                </motion.p>

                <div className="space-y-8">
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                    className="flex items-start gap-5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
                      <MdEmail size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-neutral-400 mb-1">
                        Email
                      </p>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="block text-lg text-white transition-colors hover:text-cyan-400 truncate"
                        title={CONTACT.email}
                      >
                        {CONTACT.email}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                    className="flex items-start gap-5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/20">
                      <MdLocationOn size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-neutral-400 mb-1">
                        Location
                      </p>
                      <p className="text-lg text-white truncate" title={CONTACT.address}>
                        {CONTACT.address}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                    className="flex items-start gap-5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/20">
                      <MdPhone size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-neutral-400 mb-1">
                        Phone
                      </p>
                      <a
                        href={`tel:${CONTACT.phone}`}
                        className="block text-lg text-white transition-colors hover:text-cyan-400 truncate"
                        title={CONTACT.phone}
                      >
                        {CONTACT.phone}
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Social Media */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  className="mt-12"
                >
                  <p className="mb-5 text-sm font-medium text-neutral-400 uppercase tracking-wider">
                    Connect with me
                  </p>
                  <div className="flex gap-4">
                    <motion.a
                      href={CONTACT.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 transition-all duration-300"
                      whileHover={{ 
                        y: -5, 
                        backgroundColor: "#2b3137", 
                        color: "#fff",
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.2)" 
                      }}
                      aria-label="GitHub"
                    >
                      <FaGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={CONTACT.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 transition-all duration-300"
                      whileHover={{ 
                        y: -5, 
                        backgroundColor: "#0077b5", 
                        color: "#fff",
                        boxShadow: "0 10px 15px -3px rgba(0, 119, 181, 0.3), 0 4px 6px -4px rgba(0, 119, 181, 0.2)"
                      }}
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 shadow-xl border border-neutral-800/50 backdrop-blur-sm overflow-hidden">
                {submitSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center p-8 text-center h-full"
                  >
                    <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-500/10">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                          delay: 0.2
                        }}
                      >
                        <FaCheck className="text-4xl text-green-500" />
                      </motion.div>
                    </div>
                    <h3 className="mb-2 text-2xl font-medium text-white">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-base text-neutral-400 mb-8">
                      Thank you for reaching out. I'll get back to you as soon
                      as possible.
                    </p>
                    <motion.button
                      onClick={() => setSubmitSuccess(false)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-base text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="mb-6 text-2xl font-semibold text-white">
                      Send Me a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium text-neutral-400"
                          >
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full rounded-lg border ${
                              formErrors.name
                                ? "border-red-500"
                                : "border-neutral-700"
                            } bg-neutral-800/50 px-4 py-3 text-base text-white placeholder-neutral-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all duration-300`}
                            placeholder="John Doe"
                          />
                          {formErrors.name && (
                            <p className="mt-2 text-sm text-red-500">
                              {formErrors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-neutral-400"
                          >
                            Your Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full rounded-lg border ${
                              formErrors.email
                                ? "border-red-500"
                                : "border-neutral-700"
                            } bg-neutral-800/50 px-4 py-3 text-base text-white placeholder-neutral-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all duration-300`}
                            placeholder="john@example.com"
                          />
                          {formErrors.email && (
                            <p className="mt-2 text-sm text-red-500">
                              {formErrors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="mb-2 block text-sm font-medium text-neutral-400"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full rounded-lg border ${
                            formErrors.subject
                              ? "border-red-500"
                              : "border-neutral-700"
                          } bg-neutral-800/50 px-4 py-3 text-base text-white placeholder-neutral-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all duration-300`}
                          placeholder="How can I help you?"
                        />
                        {formErrors.subject && (
                          <p className="mt-2 text-sm text-red-500">
                            {formErrors.subject}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block text-sm font-medium text-neutral-400"
                        >
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5"
                          className={`w-full rounded-lg border ${
                            formErrors.message
                              ? "border-red-500"
                              : "border-neutral-700"
                          } bg-neutral-800/50 px-4 py-3 text-base text-white placeholder-neutral-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all duration-300 resize-none`}
                          placeholder="Tell me about your project..."
                        ></textarea>
                        {formErrors.message && (
                          <p className="mt-2 text-sm text-red-500">
                            {formErrors.message}
                          </p>
                        )}
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group relative inline-flex w-full sm:w-auto items-center justify-center overflow-hidden rounded-full p-0.5 font-medium text-white"
                        >
                          <span className="absolute h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500"></span>
                          <span className="relative flex h-full w-full items-center justify-center rounded-full bg-neutral-900 px-8 py-3 text-base transition-all duration-300 ease-out group-hover:bg-opacity-0">
                            {isSubmitting ? (
                              <>
                                <svg
                                  className="mr-2 h-5 w-5 animate-spin text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                                Sending...
                              </>
                            ) : (
                              <>
                                <FaPaperPlane className="mr-2 h-5 w-5" /> Send Message
                              </>
                            )}
                          </span>
                        </button>
                      </motion.div>
                    </form>
                  </>
                )}

                {/* Decorative Gradients */}
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-2xl"></div>
                <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 blur-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
