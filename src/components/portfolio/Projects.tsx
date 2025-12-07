import React, { useEffect, useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  Database,
  FileSpreadsheet,
  Code,
  BarChart3,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Vendor Sales Analysis",
    description:
      "Complete data analytics pipeline from data collection to visualization and insights.",
    image:
      "https://raw.githubusercontent.com/ashwin-pawar/Learnings-/main/PowerBI/Vendor%20Sales%20Analysis%20Dashboard%20(END-TO-END)%20D2/Dashboard%20VSA.png",
    tags: ["Python", "SQL", "Excel", "Power BI"],
    link: "#",
    github:
      "https://github.com/ashwin-pawar/Learnings-/tree/main/PowerBI/Vendor%20Sales%20Analysis%20Dashboard%20(END-TO-END)%20D2",
  },
  {
    title: "Banking Business Performance Dashboard",
    description:
      "Integrated analysis combining Python scripting, SQL queries, and Power BI dashboards.",
    image:
      "https://raw.githubusercontent.com/ashwin-pawar/End-to-End-Data-Analytics-Projects/main/Banking%20Dashboard/Home%20Page.png",
    tags: ["Power BI", "Excel", "PostgreSQL"],
    link: "#",
    github: "https://github.com/ashwin-pawar/End-to-End-Data-Analytics-Projects/tree/main/Banking%20Dashboard",
  },
  {
    title: "FNP Sales Analysis Dashboard",
    description:
      "Advanced Excel analysis with pivot tables, formulas, and data visualization.",
    image:
      "https://raw.githubusercontent.com/ashwin-pawar/Learnings-/main/MS-Excel/FNP%20Sales%20Analysis%20Dashboard/Dashboard.png",
    tags: ["Excel"],
    link: "#",
    github:
      "https://github.com/ashwin-pawar/Learnings-/tree/main/MS-Excel/FNP%20Sales%20Analysis%20Dashboard",
  },
  {
    title: "Meta Ad Performance Dashboard",
    description:
      "Interactive Tableau dashboard with storytelling and visual exploration.",
    image:
      "https://raw.githubusercontent.com/ashwin-pawar/Learnings-/main/PowerBI/Meta%20Ad%20Performance%20Dashboard%20D4/Facebook%20Dashboard%20(Main).png",
    tags: ["Power BI"],
    link: "#",
    github: "https://github.com/ashwin-pawar/Learnings-/tree/main/PowerBI/Meta%20Ad%20Performance%20Dashboard%20D4",
  },
];

const projectCategories = [
  {
    name: "SQL",
    icon: Database,
    link: "https://github.com/ashwin-pawar/SQL-Practice-Projects",
  },
  {
    name: "Excel",
    icon: FileSpreadsheet,
    link: "https://github.com/ashwin-pawar/Learnings-/tree/main/MS-Excel",
  },
  {
    name: "Python",
    icon: Code,
    link: "https://github.com/ashwin-pawar/Learnings-/tree/main/Python",
  },
  {
    name: "Power BI",
    icon: BarChart3,
    link: "https://github.com/ashwin-pawar/Learnings-/tree/main/PowerBI",
  },
  {
    name: "Tableau",
    icon: BarChart3,
    link: "https://github.com/ashwin-pawar/Learnings-/tree/main/Tableau",
  },
  {
    name: "End-to-End",
    icon: Layers,
    link: "https://github.com/ashwin-pawar/End-to-End-Data-Analytics-Projects",
  },
];

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Showcasing data-driven solutions that deliver real business impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/95 to-blue-700/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center space-y-4 p-6">
                    <p className="text-white text-lg leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex justify-center">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white text-blue-600 hover:bg-slate-100"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All My Projects Section */}
        <div
          className={`mt-20 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">
            See All My Projects
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {projectCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <a
                  key={index}
                  href={category.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-slate-900 font-semibold text-center">
                    {category.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
