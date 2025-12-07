import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-black via-purple-900 to-blue-900 text-white py-8 border-t border-purple-500/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-300">
              © {currentYear} Ashwinp Pawar All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-gray-300">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>and React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
