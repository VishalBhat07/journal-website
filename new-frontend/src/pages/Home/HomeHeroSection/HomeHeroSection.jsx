import React from "react";
import { Mail, Phone, Globe, Eye, FileText, Users } from "lucide-react";
import CountUp from "../../../components/CountUp/CountUp";

const HomeHeroSection = () => {
  // Updated metrics data with requested information
  const metrics = [
    {
      title: "Visitor Count",
      value: 45782,
      suffix: "+",
      icon: Eye,
      description: "Total site visitors",
    },
    {
      title: "Articles",
      value: 1247,
      suffix: "+",
      icon: FileText,
      description: "Published articles",
    },
    {
      title: "Authors",
      value: 589,
      suffix: "+",
      icon: Users,
      description: "Contributing authors",
    },
  ];

  return (
    <div className="w-full">
      {/* Editorial Team Cards - Updated font sizes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* Associate Editors Card - Left */}
        <div className="group relative overflow-hidden backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
          <div className="relative p-6">
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-green-300 transition-colors text-center">
                Associate Editors
              </h3>
            </div>

            {/* Editors List */}
            <div className="space-y-3">
              <div className="p-3 backdrop-blur-sm rounded-lg border border-white/30 bg-white/5">
                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1">
                  Dr. Gangadhar Angadi
                </h4>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="p-1.5 bg-green-500/20 rounded backdrop-blur-sm">
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
                  </div>
                  <a
                    href="tel:8105888568"
                    className="text-xs sm:text-sm md:text-base hover:text-green-400 transition-colors font-medium"
                  >
                    8105888568
                  </a>
                </div>
              </div>

              <div className="p-3 backdrop-blur-sm rounded-lg border border-white/30 bg-white/5">
                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1">
                  Dr. Nataraj J R
                </h4>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="p-1.5 bg-green-500/20 rounded backdrop-blur-sm">
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
                  </div>
                  <a
                    href="tel:9901150505"
                    className="text-xs sm:text-sm md:text-base hover:text-green-400 transition-colors font-medium"
                  >
                    9901150505
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chief Editor Card - Center with updated font sizes */}
        <div className="group relative overflow-hidden backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
          <div className="relative p-6">
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors text-center">
                Chief Editor
              </h3>
            </div>

            {/* Editor Details - Centered with box */}
            <div className="space-y-3">
              <div className="p-3 backdrop-blur-sm rounded-lg border border-white/30 bg-white/5">
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 text-center">
                  Ajith Kumar
                </h4>
                <div className="flex items-center justify-center gap-2 text-gray-300">
                  <div className="p-2 bg-blue-500/20 rounded-lg backdrop-blur-sm">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                  </div>
                  <a
                    href="tel:9944452591"
                    className="text-sm sm:text-base md:text-lg hover:text-blue-400 transition-colors font-medium"
                  >
                    9944452591
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Publisher Information Card - Right */}
        <div className="group relative overflow-hidden backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
          <div className="relative p-6">
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors text-center">
                Publication Info
              </h3>
            </div>

            {/* Publication Details */}
            <div className="space-y-3">
              <div className="p-3 backdrop-blur-sm rounded-lg border border-white/30 bg-white/5">
                <p className="text-xs sm:text-sm text-gray-400 mb-1">
                  Publisher
                </p>
                <p className="font-semibold text-white text-sm sm:text-base md:text-lg">
                  ASM India
                </p>
              </div>

              <div className="p-3 backdrop-blur-sm rounded-lg border border-white/30 bg-white/5">
                <p className="text-xs sm:text-sm text-gray-400 mb-1">Email</p>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="p-1.5 bg-purple-500/20 rounded backdrop-blur-sm">
                    <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400" />
                  </div>
                  <a
                    href="mailto:asmincjournal@gmail.com"
                    className="text-xs sm:text-sm md:text-base hover:text-purple-400 transition-colors font-medium break-all"
                  >
                    asmincjournal@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-3 backdrop-blur-sm rounded-lg border border-white/30 bg-white/5">
                <p className="text-xs sm:text-sm text-gray-400 mb-1">Website</p>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="p-1.5 bg-purple-500/20 rounded backdrop-blur-sm">
                    <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400" />
                  </div>
                  <a
                    href="http://www.asmblrchapter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm md:text-base hover:text-purple-400 transition-colors font-medium"
                  >
                    asmblrchapter.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Section - Updated font sizes */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
          Platform Statistics
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          Real-time metrics showcasing our growing community
        </p>
      </div>

      {/* Metrics Grid - Updated font sizes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {metrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <div
              key={metric.title}
              className="backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-white/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/30">
                  <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                <CountUp
                  from={0}
                  to={metric.value}
                  duration={2}
                  separator=","
                  className="count-up-text"
                />
                <span className="text-blue-400">{metric.suffix}</span>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1">
                {metric.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-300">
                {metric.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Call to Action - Updated font sizes */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg border border-white/10">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Ready to Contribute to Materials Science?
          </h3>
          <p className="text-base sm:text-lg md:text-xl mb-5 opacity-90">
            Submit your research and join our community of innovators
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/author-guidelines"
              className="bg-white text-gray-900 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base md:text-lg border"
            >
              Author Guidelines
            </a>
            <a
              href="/previous-issues"
              className="border-2 border-white text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-sm sm:text-base md:text-lg"
            >
              Browse Issues
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
