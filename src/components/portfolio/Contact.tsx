"use client";

import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Open to Data Analyst roles, internships and opportunities.  
            Feel free to reach out anytime.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100">

          {/* ⭐ WORKING WEB3FORMS CONTACT FORM ⭐ */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6"
          >
            {/* REQUIRED ACCESS KEY */}
            <input type="hidden" name="access_key" value="e95eab1a-8bec-4719-86c0-429399f4376b" />

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:outline-none focus:border-blue-500"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:outline-none focus:border-blue-500"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:outline-none focus:border-blue-500 resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Send Message
            </button>
          </form>

        </div>

        {/* Social Icons */}
        <div className="mt-12 flex justify-center space-x-8">
          <a
            href="https://github.com/ashwin-pawar"
            target="_blank"
            className="flex flex-col items-center"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center shadow">
              <Github className="w-6 h-6 text-slate-700" />
            </div>
            <span className="mt-2 text-slate-600 text-sm">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/er-ashwin/"
            target="_blank"
            className="flex flex-col items-center"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center shadow">
              <Linkedin className="w-6 h-6 text-slate-700" />
            </div>
            <span className="mt-2 text-slate-600 text-sm">LinkedIn</span>
          </a>

          <a
            href="mailto:er.ashwinpawar@gmail.com"
            className="flex flex-col items-center"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center shadow">
              <Mail className="w-6 h-6 text-slate-700" />
            </div>
            <span className="mt-2 text-slate-600 text-sm">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
