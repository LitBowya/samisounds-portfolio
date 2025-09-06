"use client";

import React, { JSX } from "react";
import { Album, Headphones, Mic, Music2, Play } from "lucide-react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { constants } from "@/utils/constants";

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, JSX.Element> = {
  Headphones: <Headphones className="w-6 h-6 text-blue-400" />,
  Music2: <Music2 className="w-6 h-6 text-green-400" />,
  Mic: <Mic className="w-6 h-6 text-red-400" />,
  Album: <Album className="w-6 h-6 text-purple-400" />,
};

const MyWorks = () => {
  const { myWorks } = constants;

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#my-works",
        start: "top top",
        end: "+=1500",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    tl.from("#my-works .text-center h2, #my-works .text-center p", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
    });

    tl.from(".content-item", { opacity: 0, y: 50, stagger: 0.15 }, "-=0.5");

    tl.from(".mb-16 > h3", { opacity: 0, y: 30 });
    tl.from(".mb-16 .group", { opacity: 0, y: 50, stagger: 0.2 }, "<0.2");

    tl.from(".bg-white\\/5 > h3", { opacity: 0, y: 30 });
    tl.from(
      ".bg-white\\/5 .grid > div",
      { opacity: 0, y: 50, stagger: 0.2 },
      "<0.2",
    );
  }, []);

  return (
    <section id="my-works" className="relative py-20 bg-white text-gray-800">
      <div className="max-width">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 mb-4">
            <Music2 className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-white">
              {myWorks.sectionLabel}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {myWorks.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {myWorks.sectionSubtitle}
          </p>
        </div>

        {/* Services */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {myWorks.services.map((service, i) => (
            <div key={i} className="content-item bg-white/5 p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-full bg-${service.color}-500/20`}>
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {myWorks.featuredProjects.map((project, i) => (
              <div
                key={i}
                className="group relative aspect-square rounded-2xl overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-yellow-400/20">
                    <Play className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h4 className="font-semibold text-white">{project.title}</h4>
                  <p className="text-sm text-gray-100">{project.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white/5 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-center mb-8">
            Client Experiences
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {myWorks.testimonials.map((testimonial, i) => (
              <div key={i}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{`"${testimonial.quote}"`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
