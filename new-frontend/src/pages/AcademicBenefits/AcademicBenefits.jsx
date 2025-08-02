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
        <ul className="space-y-2">
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

  const createAccordion = (data, accordionValue) => {
    return (
      <Accordion type="single" collapsible className="w-full">
        {data.map((item, index) => (
          <AccordionItem key={index} value={`${accordionValue}-${index}`}>
            <AccordionTrigger className="text-left font-semibold text-foreground hover:text-foreground/80 text-sm md:text-base">
              {item.title}
            </AccordionTrigger>
            <AccordionContent>{renderContent(item.content)}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  };

  return (
    <div className="space-y-8 p-6 pt-20 min-h-screen">
      <div className="w-full max-w-5xl mx-auto backdrop-blur-md shadow-lg border rounded-lg p-8">
        <h3 className="text-xl md:text-2xl  font-bold text-foreground mb-8 text-center">
          Academic Benefits
        </h3>
        {createAccordion(academicBenefits, "academic-benefits")}
      </div>
    </div>
  );
};

export default AcademicBenefits;
