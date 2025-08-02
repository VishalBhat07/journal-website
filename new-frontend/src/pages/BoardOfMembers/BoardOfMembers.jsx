import React from "react";
import IndianData from "./Indian.json";
import InternationalData from "./International.json";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BoardOfMember = () => {
  const renderTable = (data, title, variant = "default") => (
    <Card
      className={`w-full max-w-6xl mx-auto border-l-4 backdrop-blur-md bg-transparent border border-muted-foreground pt-8 ${
        variant === "international" ? "border-l-blue-500" : "border-l-green-500"
      }`}
    >
      <CardHeader className="text-center">
        <CardTitle className="text-xl md:text-2xl text-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="bg-primary/80 backdrop-blur hover:bg-primary/90">
              <TableHead className="text-primary-foreground font-bold text-center w-16 text-sm md:text-base">
                #
              </TableHead>
              <TableHead className="text-primary-foreground font-bold text-center text-sm md:text-base">
                Name
              </TableHead>
              <TableHead className="text-primary-foreground font-bold text-center text-sm md:text-base">
                Institution
              </TableHead>
              <TableHead className="text-primary-foreground font-bold text-center text-sm md:text-base">
                Location
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((entry, index) => (
              <TableRow
                key={index}
                className="hover:bg-white/10 dark:hover:bg-gray-800/20 transition-colors backdrop-blur"
              >
                <TableCell className="font-medium text-center text-sm md:text-base">
                  {index + 1}
                </TableCell>
                <TableCell className="text-center text-sm md:text-base">
                  {entry.name}
                </TableCell>
                <TableCell className="text-center text-sm md:text-base">
                  {entry.institution}
                </TableCell>
                <TableCell className="text-center text-sm md:text-base">
                  {entry.location}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );

  return (
    <div id="advisory-board" className="space-y-8 p-6 pt-20 pb-20 min-h-screen">
      {renderTable(
        InternationalData,
        "International Board Members",
        "international"
      )}
      {renderTable(IndianData, "Indian Board Members", "indian")}
    </div>
  );
};

export default BoardOfMember;
