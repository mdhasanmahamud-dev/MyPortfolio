import React from "react";
import { Mail, Phone, MapPin, } from "lucide-react";
import SocialLinks from "../../../components/socialLinks";

const Contact = () => {
  return (
    <section id="contact" className="py-10 px-6 md:px-12 bg-(--bg-main)">
      <div className="max-w-7xl mx-auto">
        <div className="py-10">
          <h1 className="text-3xl text-center font-bold text-white/80 mb-2">
            Get in Touch
          </h1>
          <p className="text-sm text-center text-white/70">
            Have a question or want to work together? Fill out the form below
            and I’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Contact Form */}
          <div className="lg:col-span-2 bg-(--bg-secondary) border border-(--border-color) rounded-3xl p-8 md:p-10">
            <form className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-xl bg-(--bg-main) border border-(--border-color) px-4 py-2 text-sm text-white focus:outline-none focus:border-(--accent)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full rounded-xl bg-(--bg-main) border border-(--border-color) px-4 py-2 text-sm text-white focus:outline-none focus:border-(--accent)"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What is this about?"
                  className="w-full rounded-xl bg-(--bg-main) border border-(--border-color) px-4 py-2 text-sm text-white focus:outline-none focus:border-(--accent)"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">
                  Message *
                </label>
                <textarea
                  rows="5"
                  placeholder="Your message here..."
                  className="w-full rounded-xl bg-(--bg-main) border border-(--border-color) px-4 py-2 text-sm text-white focus:outline-none focus:border-(--accent)"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="button"
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-(--accent) px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Information */}
          <div className="bg-(--bg-secondary) border border-(--border-color) rounded-3xl p-8 md:p-10 space-y-6">
            <h3 className="text-xl font-semibold text-white/90">
              Contact Information
            </h3>

            <div className="space-y-4 text-sm text-(--text-secondary)">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-(--accent)" />
                <span>mdhasanmahamud01947@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-(--accent)" />
                <span>+880 1947-910254</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-(--accent)" />
                <span>Bhogdanga, Pateshwari</span>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-sm font-medium text-white/80 mb-3">Connect</p>
              <div>
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
