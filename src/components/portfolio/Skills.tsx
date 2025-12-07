import { useEffect, useRef, useState } from "react";
import {
  Code,
  Database,
  BarChart3,
  FileSpreadsheet,
  Brain,
  Sparkles,
} from "lucide-react";

const skills = [
  {
    icon: Database,
    name: "SQL",
    description: "Database querying and optimization",
    backContent: ["Joins", "CTEs", "Subqueries", "Window Functions"],
  },
  {
    icon: Code,
    name: "Python",
    description: "Data analysis, automation, and scripting",
    backContent: ["Pandas", "NumPy", "EDA", "Data Cleaning"],
  },
  {
    icon: BarChart3,
    name: "Power BI",
    description: "Interactive dashboards and reports",
    backContent: ["DAX", "Power Query", "Data Modeling", "Dashboard Creation"],
  },
  {
    icon: FileSpreadsheet,
    name: "Excel",
    description: "Advanced formulas and pivot tables",
    backContent: [
      "Pivot Tables",
      "Advanced Formulas",
      "Pivot Charts",
      "Quick Analysis",
    ],
  },
  {
    icon: BarChart3,
    name: "Tableau",
    description: "Data visualization and storytelling",
    backContent: [
      "Dashboard Design",
      "Charting",
      "Storytelling",
      "Visual Exploration",
    ],
  },
  {
    icon: Brain,
    name: "Machine Learning",
    description: "Predictive modeling and analysis",
    backContent: [
      "Regression Concepts",
      "Classification Concepts",
      "Model Evaluation Basics",
      "Feature Understanding",
    ],
  },
  {
    icon: Sparkles,
    name: "AI Tools & Techniques",
    description: "AI-powered automation and workflows",
    backContent: [
      "AI Workflows",
      "AI Agents",
      "GenAI Prompting",
      "Automation via AI",
    ],
  },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hoverTimers = useRef<{ [key: number]: NodeJS.Timeout }>({});
  const leaveTimers = useRef<{ [key: number]: NodeJS.Timeout }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.0 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      // Clear all timers on unmount
      Object.values(hoverTimers.current).forEach((timer) =>
        clearTimeout(timer),
      );
      Object.values(leaveTimers.current).forEach((timer) =>
        clearTimeout(timer),
      );
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    // Clear any existing leave timer for this card
    if (leaveTimers.current[index]) {
      clearTimeout(leaveTimers.current[index]);
      delete leaveTimers.current[index];
    }

    // Set hover timer to flip after 1.5 seconds
    hoverTimers.current[index] = setTimeout(() => {
      setFlippedCards((prev) =>
        prev.includes(index) ? prev : [...prev, index],
      );
    }, 1000);
  };

  const handleMouseLeave = (index: number) => {
    // Clear hover timer if user leaves before flip
    if (hoverTimers.current[index]) {
      clearTimeout(hoverTimers.current[index]);
      delete hoverTimers.current[index];
    }

    // Set leave timer to unflip after 1 second
    leaveTimers.current[index] = setTimeout(() => {
      setFlippedCards((prev) => prev.filter((i) => i !== index));
    }, 500);
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            My Skillset
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            The tools and technologies I use to analyze and visualize data.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isFlipped = flippedCards.includes(index);
            return (
              <div
                key={index}
                className={`group relative h-64 perspective-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  perspective: "1000px",
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front of card */}
                  <div
                    className="absolute inset-0 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-100 backface-hidden flex flex-col items-center justify-center"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
                      {skill.name}
                    </h3>
                    <p className="text-slate-600 text-center text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Back of card */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 shadow-lg backface-hidden flex flex-col items-center justify-center"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <h3 className="text-lg font-bold text-white mb-4 text-center">
                      {skill.name}
                    </h3>
                    <ul className="space-y-2 text-center">
                      {skill.backContent.map((item, i) => (
                        <li
                          key={i}
                          className="text-white/90 text-sm flex items-center justify-center"
                        >
                          <span className="w-1.5 h-1.5 bg-white/70 rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
