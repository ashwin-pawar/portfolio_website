import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  ArrowDown,
  BarChart3,
  TrendingUp,
  Database,
  PieChart,
} from "lucide-react";

const roles = ["Data Analyst", "Power BI Developer", "Python Automation"];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      const currentText = roles[roleIndex];

      if (!isDeleting && charIndex < currentText.length) {
        setCurrentRole(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentRole(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactMe = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900">
                Ashwin Pawar
              </h1>
              <div className="h-16 md:h-20 flex items-center justify-center lg:justify-start">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600">
                  {currentRole}
                  <span className="animate-pulse">|</span>
                </h2>
              </div>
            </div>
            <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed w-full">
              I focus on understanding data deeply—cleaning it, exploring it and
              finding patterns that actually matter. Using Python, SQL and Power
              BI, I build dashboards that are clean, accurate and easy to
              understand. I may be a fresher, but I work with a mindset of
              clarity, logic and problem-solving ensuring every visual or metric
              tells a meaningful story.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 w-full max-w-md mx-auto lg:mx-0">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleContactMe}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Let's Connect
              </Button>
            </div>
          </div>

          {/* Profile Image with Floating Data Elements */}
          <div className="relative flex items-center justify-center mt-10 lg:mt-0">
            {/* Floating Data Elements */}

            {/* Bar Chart - Top Left */}
            <div className="absolute top-8 left-12 animate-float-slow opacity-70">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-blue-100">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
            </div>

            {/* Line Chart - Top Right */}
            <div className="absolute top-16 right-8 animate-float-delayed opacity-70">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-blue-100">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
            </div>

            {/* Power BI Icon - Right Side */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 animate-float-slow opacity-70">
              <div className="bg-yellow-400/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M10 2v20H8V2h2zm6 4v16h-2V6h2zm-12 6v10H2V12h2z" />
                </svg>
              </div>
            </div>

            {/* SQL Database - Bottom Left */}
            <div className="absolute bottom-12 left-8 animate-float-delayed opacity-70">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-blue-100">
                <Database className="w-8 h-8 text-blue-700" />
              </div>
            </div>

            {/* KPI Card - Bottom Right */}
            <div className="absolute bottom-8 right-12 animate-float-slow opacity-70">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-white text-2xl font-bold">98%</div>
                <div className="text-white/80 text-xs">Accuracy</div>
              </div>
            </div>

            {/* Pie Chart - Left Side */}
            <div className="absolute left-4 top-1/3 animate-float-delayed opacity-70">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-blue-100">
                <PieChart className="w-8 h-8 text-purple-600" />
              </div>
            </div>

            {/* Main Profile Image */}
            <div className="  w-48 h-48          /* 📱 Mobile */
                              sm:w-64 sm:h-64    /* 📱 Tablet */
                              lg:w-80 lg:h-[100] /* 💻 Laptop */
                              xl:w-96 xl:h-96    /* 🖥️ Big Screens */
                              rounded-3xl shadow-2xl border-4 border-white 
                              overflow-hidden animate-float-gentle z-10">
              <img
                src="https://raw.githubusercontent.com/ashwin-pawar/Achievements-and-Certifications/main/Profile_img/profilr_img.jpg"
                alt="Ashwin Pawar"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-float-gentle {
          animation: float-gentle 5s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 4.5s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 5.5s ease-in-out infinite 0.5s;
        }
      `}</style>
    </section>
  );
}
