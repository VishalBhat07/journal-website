import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BankDetails = () => {
  const bankData = [
    { label: "Account Name", value: "ASM India National Council Trust" },
    { label: "Bank Name", value: "HDFC Bank" },
    { label: "Account Number", value: "50200087378860" },
    { label: "IFSC Code", value: "HDFC0001232" },
    { label: "PAN Card no.", value: "AADAA9068L" },
  ];

  return (
    <div className="space-y-8 p-6 pt-24 min-h-screen">
      <div className="w-full max-w-4xl mx-auto backdrop-blur-md bg-white/20 dark:bg-gray-900/20 shadow-lg border border-white/20 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Bank Details
        </h2>

        <Card className="backdrop-blur-md bg-white/10 dark:bg-gray-900/10 shadow-lg border border-white/10">
          <CardContent className="p-0">
            <Table>
              <TableBody>
                {bankData.map((item, index) => (
                  <TableRow
                    key={index}
                    className="hover:bg-white/10 dark:hover:bg-gray-800/20 transition-colors border-white/20"
                  >
                    <TableCell className="font-bold text-foreground py-4 w-1/3">
                      {item.label}:
                    </TableCell>
                    <TableCell className="text-foreground/90 py-4 font-medium">
                      {item.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BankDetails;
