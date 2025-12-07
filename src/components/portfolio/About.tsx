import React, { useEffect, useRef, useState } from "react";
import {
  FolderKanban,
  Wrench,
  Target,
  Award,
  FileSpreadsheet,
  Database,
  Code,
  BarChart3,
  GitBranch,
  BookOpen,
} from "lucide-react";

const stats = [
  {
    icon: FolderKanban,
    title: "Projects Built",
    subtitle: "10+ Practice Projects Completed",
  },
  {
    icon: Wrench,
    title: "Core Strengths",
    subtitle: "SQL • Python • Excel • Power BI • Tableau",
  },
  {
    icon: Target,
    title: "Focus Areas",
    subtitle: "Dashboards • EDA • Data Cleaning",
  },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10 h-[416px]"
            }`}
          >
            <div className="prose prose-lg max-w-none w-[642px] h-[205px]">
              <p className="text-slate-600 leading-relaxed text-lg">
                I'm a passionate Data Analyst with a strong foundation in
                transforming complex datasets into clear, actionable insights.
                With expertise in Python, SQL, and Power BI. My approach
                combines technical proficiency with creative problem-solving,
                ensuring that every analysis not only answers questions but also
                uncovers new opportunities.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                I'm committed to continuous learning and staying at the
                forefront of data analytics trends and technologies.
              </p>
            </div>

            {/* Certifications Block */}
            <div className="mt-8 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-600" />
                Certifications
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <a
                      href="https://github.com/ashwin-pawar/Achievements-and-Certifications/blob/main/Oracle/Oracle_AI_eCertificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-800 font-medium"
                    >
                      OCI 2025 Certified Al Foundations Associate
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <a
                      href="https://github.com/ashwin-pawar/Achievements-and-Certifications/blob/main/Deloitte/Delloit%20Certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-800 font-medium"
                    >
                      Deloitte Certified
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools Strip */}
            <div className="mt-6"></div>
          </div>

          {/* Stats Cards */}
          <div
            className={`grid gap-6 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-blue-50 to-white backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-blue-100"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900 mb-1">
                        {stat.title}
                      </div>
                      <div className="text-slate-600 font-medium">
                        {stat.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
