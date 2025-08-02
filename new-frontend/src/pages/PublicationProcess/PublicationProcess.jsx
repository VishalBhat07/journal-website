import React, { useState, useEffect } from "react";
import publication from "./publication.json";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const PublicationTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercent = scrollY / (documentHeight - windowHeight);
      const currentStep = Math.min(
        Math.floor(scrollPercent * publication.length),
        publication.length - 1
      );
      setActiveStep(currentStep);
      setProgress(scrollPercent * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = (content) => {
    return content.map((contentItem, contentIndex) => {
      if (contentItem.type === "text") {
        return (
          <p
            key={contentIndex}
            className="text-foreground/90 leading-relaxed mb-3"
          >
            {contentItem.value}
          </p>
        );
      } else if (contentItem.type === "list") {
        return (
          <ul key={contentIndex} className="space-y-2 ml-4 mb-3">
            {contentItem.value.map((listItem, listIndex) => (
              <li
                key={listIndex}
                className="text-foreground/90 leading-relaxed list-disc"
              >
                {listItem}
              </li>
            ))}
          </ul>
        );
      }
      return null;
    });
  };

  return (
    <div className="p-6 pt-20 min-h-screen relative bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Publication Process
        </h2>

        <div className="relative">
          {!isMobile && (
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-muted-foreground" />
          )}

          <div className="space-y-8">
            {publication.map((step, index) => (
              <div
                key={index}
                className={`relative flex ${
                  isMobile
                    ? "flex-col items-start gap-4"
                    : "flex-row items-start gap-6"
                }`}
              >
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                      index <= activeStep
                        ? "bg-foreground border-foreground shadow-lg"
                        : "bg-background border-muted-foreground"
                    }`}
                  >
                    {index <= activeStep ? (
                      <CheckCircle className="w-6 h-6 text-background" />
                    ) : (
                      <Circle className="w-6 h-6 text-muted-foreground" />
                    )}
                  </div>
                  <Badge
                    variant={index <= activeStep ? "default" : "secondary"}
                    className="absolute left-1/2 top-full mt-1 -translate-x-1/2"
                  >
                    {index + 1}
                  </Badge>
                </div>

                <Card
                  className={`flex-1 backdrop-blur-md border transition-all duration-500 bg-background ${
                    index <= activeStep ? "border-foreground" : "border-muted"
                  }`}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <div className="space-y-3">
                      {renderContent(step.content)}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationTimeline;
