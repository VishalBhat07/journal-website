import React from "react";
import academicBenefits from "./AcademicBenefits.json";

const AcademicBenefits = () => {
  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return (
        <ul className="space-y-2 list-disc pl-5">
          {content.map((item, index) => (
            <li
              key={index}
              className="text-foreground/90 leading-relaxed text-sm md:text-base"
            >
              {item}
            </li>
          ))}
        </ul>
      );
    }
    return (
      <div className="text-foreground/90 leading-relaxed text-sm md:text-base">
        {content}
      </div>
    );
  };

  return (
    <div className="space-y-8 md:p-8 min-h-screen bg-background text-foreground">
      <div className="w-full max-w-5xl mx-auto backdrop-blur-md shadow-lg border rounded-lg p-8 bg-background text-foreground">
        <h3 className="text-xl md:text-2xl font-bold mb-8 text-center">
          Academic Benefits
        </h3>
        <div className="space-y-6">
          {academicBenefits.map((item, index) => (
            <div key={index}>
              <h4 className="font-semibold text-sm md:text-base mb-1">
                {item.title}
              </h4>
              {renderContent(item.content)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicBenefits;
