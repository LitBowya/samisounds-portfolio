"use client";

import React, { JSX } from "react";
import { constants } from "@/utils/constants";
import { Mail, MessageSquare, Music2, Send, User } from "lucide-react";

const iconMap: Record<string, JSX.Element> = {
  User: <User className="w-4 h-4 text-gray-500" />,
  Mail: <Mail className="w-4 h-4 text-gray-500" />,
  MessageSquare: <MessageSquare className="w-4 h-4 text-gray-500" />,
  Send: <Send className="w-5 h-5" />,
};

const ContactUs = () => {
  const { contact } = constants;

  return (
    <section id="contact-us" className="relative py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 mb-4">
            <Music2 className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-white">
              {contact.sectionLabel}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {contact.sectionTitle}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {contact.sectionSubtitle}
          </p>
        </div>

        {/* Contact Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-2xl shadow-lg">
          {contact.formFields.map((field) =>
            field.type === "textarea" ? (
              <div key={field.id} className="col-span-1 md:col-span-2">
                <label
                  htmlFor={field.id}
                  className="flex items-center gap-2 text-sm font-medium mb-2 text-gray-700"
                >
                  {iconMap[field.icon]} {field.label}
                </label>
                <textarea
                  id={field.id}
                  rows={field.rows}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition resize-none"
                ></textarea>
              </div>
            ) : (
              <div key={field.id} className="col-span-1">
                <label
                  htmlFor={field.id}
                  className="flex items-center gap-2 text-sm font-medium mb-2 text-gray-700"
                >
                  {iconMap[field.icon]} {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                />
              </div>
            ),
          )}

          {/* Submit */}
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-xl shadow-md transition-transform transform hover:scale-105"
            >
              {iconMap[contact.submitButton.icon]} {contact.submitButton.text}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default ContactUs;
