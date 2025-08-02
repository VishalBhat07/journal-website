import React from "react";
import academicBenefits from "./AcademicBenefits.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AcademicBenefits = () => {
  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return (
        <div className="space-y-3">
          {content.map((contentItem, contentIndex) => (
            <div key={contentIndex} className="text-foreground leading-relaxed">
              {contentItem}
            </div>
          ))}
        </div>
      );
    }
    return <div className="text-foreground leading-relaxed">{content}</div>;
  };

  return (
    <div className="space-y-8 p-6 pt-20 min-h-screen">
      <div className="w-full max-w-5xl mx-auto backdrop-blur-md  shadow-lg border  rounded-lg p-8">
        <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
          Academic Benefits
        </h3>
        
        <Accordion type="single" collapsible className="w-full">
          {academicBenefits.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`benefit-${index}`} 
              className=""
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground text-left">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>
                {renderContent(item.content)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default AcademicBenefits;
