import React from "react";
import { Mail, Phone, Globe, Eye, FileText, Users } from "lucide-react";
import CountUp from "../../../components/CountUp/CountUp";
import { Link } from "react-router-dom";

const HomeHeroSection = () => {
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
    <div className="w-full bg-background text-foreground">
      {/* Editorial Team Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* Associate Editors */}
        <div className="group relative overflow-hidden backdrop-blur-sm rounded-2xl hover:-translate-y-2 transition-all duration-500 border border-muted-foreground p-6">
          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-green-300 transition-colors text-center mb-4">
            Associate Editors
          </h3>
          <div className="space-y-3">
            {[
              { name: "Dr. Gangadhar Angadi", phone: "8105888568" },
              { name: "Dr. Nataraj J R", phone: "9901150505" },
            ].map((editor) => (
              <div
                key={editor.name}
                className="p-4 backdrop-blur-sm rounded-lg border border-muted-foreground bg-white/5"
              >
                <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                  {editor.name}
                </h4>
                <div className="flex items-center gap-2 text-foreground/70">
                  <div className="p-2 bg-green-500/20 rounded backdrop-blur-sm">
                    <Phone className="h-4 w-4 text-green-400" />
                  </div>
                  <Link
                    to={`tel:${editor.phone}`}
                    className="text-sm md:text-base hover:text-green-400 transition-colors font-medium"
                  >
                    {editor.phone}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chief Editor */}
        <div className="group relative overflow-hidden backdrop-blur-sm rounded-2xl hover:-translate-y-2 transition-all duration-500 border border-muted-foreground p-6">
          <h3 className="text-xl md:text-2xl  font-bold text-foreground group-hover:text-blue-300 transition-colors text-center mb-4">
            Chief Editor
          </h3>
          <div className="p-4 backdrop-blur-sm rounded-lg border border-muted-foreground bg-white/5 space-y-3">
            <h4 className="text-sm md:text-base font-semibold text-foreground mb-2">
              Ajith Kumar
            </h4>
            <div className="flex items-center gap-2 text-foreground/70">
              <div className="p-2 bg-blue-500/20 rounded-lg backdrop-blur-sm">
                <Phone className="h-5 w-5 text-blue-400" />
              </div>
              <Link
                to="tel:9944452591"
                className="text-sm md:text-base hover:text-blue-400 transition-colors font-medium"
              >
                9944452591
              </Link>
            </div>
          </div>
        </div>

        {/* Publication Info */}
        <div className="group relative overflow-hidden backdrop-blur-sm rounded-2xl hover:-translate-y-2 transition-all duration-500 border border-muted-foreground p-6">
          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-purple-300 transition-colors text-center mb-4">
            Publication Info
          </h3>
          <div className="space-y-3">
            <div className="p-4 backdrop-blur-sm rounded-lg border border-muted-foreground bg-white/5">
              <p className="text-sm md:text-base font-semibold text-foreground mb-2">
                Publisher
              </p>
              <p className="text-sm md:text-base text-foreground  font-medium">
                ASM India
              </p>
            </div>

            <div className="p-4 backdrop-blur-sm rounded-lg border border-muted-foreground bg-white/5">
              <p className="text-sm md:text-base font-semibold text-foreground mb-2">
                Email
              </p>
              <div className="flex items-center gap-2 text-foreground/70">
                <div className="p-2 bg-purple-500/20 rounded backdrop-blur-sm">
                  <Mail className="h-4 w-4 text-purple-400" />
                </div>
                <Link
                  to="mailto:asmincjournal@gmail.com"
                  className="text-sm md:text-base hover:text-purple-400 transition-colors font-medium break-all"
                >
                  asmincjournal@gmail.com
                </Link>
              </div>
            </div>

            <div className="p-4 backdrop-blur-sm rounded-lg border border-muted-foreground bg-white/5">
              <p className="text-sm md:text-base font-semibold text-foreground mb-2">
                Website
              </p>
              <div className="flex items-center gap-2 text-foreground/70">
                <div className="p-2 bg-purple-500/20 rounded backdrop-blur-sm">
                  <Globe className="h-4 w-4 text-purple-400" />
                </div>
                <a
                  href="http://www.asmblrchapter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base hover:text-purple-400 transition-colors font-medium"
                >
                  asmblrchapter.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
          Platform Statistics
        </h2>
        <p className="text-sm md:text-base text-foreground/70 max-w-xl mx-auto">
          Real-time metrics showcasing our growing community
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {metrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <div
              key={metric.title}
              className="backdrop-blur-sm rounded-2xl border border-muted-foreground p-8 text-center hover:scale-105 transition-all duration-300 bg-white/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-2 bg-white/10 rounded-full backdrop-blur-sm border border-muted-foreground">
                  <IconComponent className="h-8 w-8 md:h-10 md:w-10 text-foreground" />
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                <CountUp
                  from={0}
                  to={metric.value}
                  duration={2}
                  separator=","
                  className="count-up-text"
                />
                <span className="text-blue-400">{metric.suffix}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-1">
                {metric.title}
              </h3>
              <p className="text-sm md:text-base text-foreground/70">
                {metric.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-2xl p-8 text-white border border-muted-foreground">
          <h3 className="text-4xl md:text-5xl font-bold mb-3">
            Ready to Contribute to Materials Science?
          </h3>
          <p className="text-sm md:text-base mb-5 opacity-90">
            Submit your research and join our community of innovators
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/author-guidelines"
              className="bg-background text-foreground px-6 py-2.5 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-colors text-sm md:text-base border border-muted-foreground"
            >
              Author Guidelines
            </Link>
            <Link
              to="/previous-issues"
              className="border-2 border-muted-foreground text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-sm md:text-base"
            >
              Browse Issues
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
