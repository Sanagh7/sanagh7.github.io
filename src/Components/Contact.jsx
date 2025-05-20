// src/components/Contact.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../constants";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative border-b border-neutral-800/50 py-20">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/5 to-blue-500/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/5 to-blue-500/5 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4"
      >
        <div className="text-center">
          <h2 className="mb-6 text-5xl font-light tracking-tight text-white">
            <span className="mr-2 inline-block rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-2 py-1 text-3xl font-bold text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            Get In Touch
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-neutral-400">
            Feel free to reach out if you're looking for a developer, have a
            question, or just want to connect.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-16">
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
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 p-4 sm:p-8 shadow-xl">
                <motion.h3
                  variants={itemVariants}
                  className="mb-6 text-xl sm:text-2xl font-medium text-white"
                >
                  Contact Information
                </motion.h3>
                <motion.p
                  variants={itemVariants}
                  className="mb-8 text-sm sm:text-base text-neutral-400"
                >
                  I'm currently available for freelance work or full-time
                  positions. Feel free to reach out!
                </motion.p>

                <div className="space-y-4 sm:space-y-6">
                  <motion.div
                    variants={itemVariants}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                      <MdEmail size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-neutral-400">
                        Email
                      </p>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="block text-sm sm:text-lg text-white transition-colors hover:text-cyan-400 truncate"
                        title={CONTACT.email}
                      >
                        {CONTACT.email}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                      <MdLocationOn size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-neutral-400">
                        Location
                      </p>
                      <p className="text-sm sm:text-lg text-white truncate" title={CONTACT.address}>
                        {CONTACT.address}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                      <MdPhone size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-neutral-400">
                        Phone
                      </p>
                      <a
                        href={`tel:${CONTACT.phone}`}
                        className="block text-sm sm:text-lg text-white transition-colors hover:text-cyan-400 truncate"
                        title={CONTACT.phone}
                      >
                        {CONTACT.phone}
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Social Media */}
                <motion.div variants={itemVariants} className="mt-8 sm:mt-12">
                  <p className="mb-4 text-sm font-medium text-neutral-400">
                    FIND ME ON
                  </p>
                  <div className="flex gap-3 sm:gap-4">
                    <a
                      href={CONTACT.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-700 hover:text-white hover:shadow-lg hover:shadow-cyan-900/20"
                      aria-label="GitHub"
                    >
                      <FaGithub size={18} className="sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href={CONTACT.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-700 hover:text-white hover:shadow-lg hover:shadow-cyan-900/20"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={18} className="sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 p-4 sm:p-8 shadow-xl">
                {submitSuccess ? (
                  <div className="flex flex-col items-center justify-center p-4 sm:p-8 text-center">
                    <div className="mb-4 sm:mb-6 flex h-16 w-16 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-green-600/20">
                      <FaCheck className="text-3xl sm:text-4xl text-green-500" />
                    </div>
                    <h3 className="mb-2 text-xl sm:text-2xl font-medium text-white">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-400">
                      Thank you for your message. I'll get back to you as soon
                      as possible.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 sm:py-3 text-sm sm:text-base text-white hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-medium text-white">
                      Send Me a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
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
                            } bg-neutral-800/50 px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-neutral-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all duration-300`}
                            placeholder="John Doe"
                          />
                          {formErrors.name && (
                            <p className="mt-1 text-xs sm:text-sm text-red-500">
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
                            } bg-neutral-800/50 px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-neutral-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all duration-300`}
                            placeholder="john@example.com"
                          />
                          {formErrors.email && (
                            <p className="mt-1 text-xs sm:text-sm text-red-500">
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
                          } bg-neutral-800/50 px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-neutral-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all duration-300`}
                          placeholder="How can I help you?"
                        />
                        {formErrors.subject && (
                          <p className="mt-1 text-xs sm:text-sm text-red-500">
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
                          rows="4"
                          className={`w-full rounded-lg border ${
                            formErrors.message
                              ? "border-red-500"
                              : "border-neutral-700"
                          } bg-neutral-800/50 px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-neutral-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all duration-300 resize-none`}
                          placeholder="Tell me about your project..."
                        ></textarea>
                        {formErrors.message && (
                          <p className="mt-1 text-xs sm:text-sm text-red-500">
                            {formErrors.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group relative inline-flex w-full sm:w-auto items-center justify-center overflow-hidden rounded-full p-0.5 font-medium text-white"
                        >
                          <span className="absolute h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500"></span>
                          <span className="relative flex h-full w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-2.5 sm:py-3 text-sm sm:text-base transition-all duration-300 ease-out group-hover:bg-opacity-0">
                            {isSubmitting ? (
                              <>
                                <svg
                                  className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin text-white"
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
                                <FaPaperPlane className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Send Message
                              </>
                            )}
                          </span>
                        </button>
                      </div>
                    </form>
                  </>
                )}

                {/* Decorative Gradient */}
                <div className="absolute -bottom-1 -right-1 -z-10 h-32 w-32 rounded-br-2xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30 blur-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
