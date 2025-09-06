"use client";

import { constants } from "@/utils/constants";
import { Award, Users, Music, Mic, Headphones } from "lucide-react";
import { JSX } from "react";
import Image from "next/image";

const iconMap: Record<string, JSX.Element> = {
  Award: <Award className="w-6 h-6 text-yellow-400" />,
  Users: <Users className="w-6 h-6 text-blue-400" />,
  Music: <Music className="w-6 h-6 text-pink-400" />,
  Mic: <Mic className="w-6 h-6 text-green-400" />,
  Headphones: <Headphones className="w-6 h-6 text-purple-400" />,
};

export default function AboutMe() {
  const { about } = constants;

  return (
    <section id="about" className="relative py-20">
      <div className="max-width lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 mb-4">
            <span className="text-sm font-medium text-white flex gap-2 items-center">
              {iconMap.Users}
              {about.sectionLabel}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {about.sectionTitle}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {about.sectionSubtitle}
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/*Left column*/}
          <div>
            <div className="relative">
              {" "}
              <div className="aspect-square rounded-2xl relative">
                {" "}
                <Image
                  src="/about.jpg"
                  alt="Sound engineer working in studio"
                  fill
                  className="object-cover w-full h-full rounded-xl absolute z-10 shadow-xl shadow-white/10"
                />{" "}
              </div>{" "}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-blue-500 p-6 rounded-2xl shadow-lg z-20">
                {" "}
                <div className="text-center">
                  {" "}
                  <div className="text-2xl font-bold">10+</div>{" "}
                  <div className="text-sm">Years Experience</div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          </div>
          {/* Right Column */}
          <div>
            <h3 className="text-3xl font-bold mb-6">{about.mainHeading}</h3>
            <p className="text-lg mb-6">{about.paragraphOne}</p>
            <p className="text-lg mb-8">{about.paragraphTwo}</p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4">
              {about.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full"
                >
                  {iconMap[highlight.icon]}
                  <span className="text-gray-300 font-medium">
                    {highlight.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {about.stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-white/5">
              <p className="text-3xl font-bold text-yellow-400 stat-number">
                {stat.value}
              </p>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">
            {about.specializationTitle}
          </h3>
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {about.skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item p-6 rounded-2xl border border-white/10 hover:border-yellow-400 transition-all hover:cursor-pointer duration-300"
              >
                <div className={"flex items-center justify-start gap-4"}>
                  <div className="mb-4 text-2xl bg-white/10 w-16 h-16 rounded-full flex items-center justify-center">
                    {iconMap[skill.icon]}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
                </div>
                <p className="text-gray-300 mb-4">{skill.description}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {skill.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
