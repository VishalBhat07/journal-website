import React from "react";
import guidelines from "./guidelines.json";
import responsibilities from "./responsibilities.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AuthorGuidelines = () => {
  // Function to render content (handles both string and array content)
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

  // Function to create accordion from data
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
      {/* Main Title */}
      <div className="w-full max-w-7xl mx-auto text-center mb-8">
        <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Author Guidelines and Responsibilities
        </h3>
      </div>

      {/* Overview Section */}
      <div className="w-full max-w-7xl mx-auto backdrop-blur-md rounded-lg p-6 mb-8">
        <p className="text-foreground/90 leading-relaxed text-sm md:text-base">
          <strong className="text-foreground">
            Materials and Processing,{" "}
          </strong>
          a journal by the ASM India, invites submissions of original research
          articles, technical papers, reviews, case studies, and short
          communications that contribute to the understanding and advancement of
          engineering and manufacturing processes. The journal aims to provide a
          platform for students, academicians, scholars, industrialists,
          researchers, and practitioners to share their latest findings,
          innovative ideas, and critical insights in the field of engineering
          and manufacturing processes.
        </p>
      </div>

      {/* Two-Column Accordion Layout */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
        {/* Guidelines Section */}
        <Card className="backdrop-blur-md p-4 pt-8 w-full sm:w-[400px] md:w-[600px]">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl font-bold text-foreground text-center">
              Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>{createAccordion(guidelines, "guidelines")}</CardContent>
        </Card>

        {/* Responsibilities Section */}
        <Card className="backdrop-blur-md p-4 pt-8 w-full sm:w-[400px] md:w-[600px]">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl font-bold text-foreground text-center">
              Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            {createAccordion(responsibilities, "responsibilities")}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthorGuidelines;
