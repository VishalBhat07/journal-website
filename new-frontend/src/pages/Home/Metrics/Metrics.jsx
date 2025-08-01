import React from "react";
import { Mail, Phone, Globe, User, Users } from "lucide-react";
import CountUp from "../../../components/CountUp/CountUp";

const HomeHeroSection = () => {
  // Sample metrics data - replace with your actual data
  const metrics = [
    {
      title: "Published Articles",
      value: 2847,
      suffix: "+",
      icon: "📚",
      description: "Research papers published",
    },
    {
      title: "Active Researchers",
      value: 1250,
      suffix: "+",
      icon: "👨‍🔬",
      description: "Contributing scientists",
    },
    {
      title: "Citations",
      value: 15420,
      suffix: "+",
      icon: "📊",
      description: "Total citations received",
    },
    {
      title: "Journal Issues",
      value: 156,
      suffix: "",
      icon: "📖",
      description: "Issues published to date",
    },
    {
      title: "Countries Represented",
      value: 45,
      suffix: "+",
      icon: "🌍",
      description: "Global research community",
    },
    {
      title: "Years of Excellence",
      value: 25,
      suffix: "+",
      icon: "⭐",
      description: "Serving the materials community",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Information Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ASM India Materials & Processing Journal
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A biannual open-access journal providing a platform for the latest
              research, technical insights, and case studies in engineering and
              manufacturing.
            </p>
          </div>

          {/* Editorial Team Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Editor Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Editor
                  </h3>
                  <p className="text-sm text-gray-500">Chief Editor</p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Ajith Kumar</h4>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">9944452591</span>
                </div>
              </div>
            </div>

            {/* Associate Editors Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Associate Editors
                  </h3>
                  <p className="text-sm text-gray-500">Editorial Board</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900">
                    Dr. Gangadhar Angadi
                  </h4>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">8105888568</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Dr. Nataraj J R</h4>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">9901150505</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Publisher Information Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Publication Details
                  </h3>
                  <p className="text-sm text-gray-500">Contact & Information</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Publisher</p>
                  <p className="font-medium text-gray-900">ASM India</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Submission Email</p>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="h-4 w-4" />
                    <a
                      href="mailto:asmincjournal@gmail.com"
                      className="text-sm hover:text-blue-600 transition-colors"
                    >
                      asmincjournal@gmail.com
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Website</p>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Globe className="h-4 w-4" />
                    <a
                      href="http://www.asmblrchapter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-blue-600 transition-colors"
                    >
                      www.asmblrchapter.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Impact & Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Driving innovation and excellence in materials science and
            engineering research
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={metric.title}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-3">{metric.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                <CountUp
                  from={0}
                  to={metric.value}
                  duration={2}
                  separator=","
                  className="count-up-text"
                />
                <span className="text-blue-600">{metric.suffix}</span>
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1">
                {metric.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Contribute to Materials Science?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Submit your research and join our community of innovators
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/author-guidelines"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Author Guidelines
              </a>
              <a
                href="/previous-issues"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Browse Issues
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
