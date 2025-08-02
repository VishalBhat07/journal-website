import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function AdvertisementTariff() {
  const tariffData = [
    { page: "PF2- Inside Left Spread", tariff: "20,000" },
    { page: "B1- Back Cover", tariff: "25,000" },
    { page: "B2- Inside Right Spread", tariff: "20,000" },
    { page: "PF3- Premium inside Front Cover", tariff: "15,000" },
    { page: "PF4- Premium inside Front Cover", tariff: "15,000" },
    { page: "PB3- Premium inside Back Cover", tariff: "15,000" },
    { page: "PB4- Premium inside Back Cover", tariff: "15,000" },
    { page: "Inside Full Page", tariff: "6,000" },
  ];

  return (
    <div className="space-y-8 p-6 pt-20 min-h-screen">
      <div className="w-full max-w-7xl mx-auto">
        {/* Title and Description */}
        <div className="backdrop-blur-md bg-white/20 dark:bg-gray-900/20 shadow-lg border border-white/20 rounded-lg p-8 mb-8">
          <h3 className="text-3xl font-bold text-foreground mb-6 text-center">
            Advertisement Tariff
          </h3>
          <p className="text-foreground/90 leading-relaxed text-center max-w-4xl mx-auto">
            Materials and Processing, a peer-reviewed journal from ASM India
            National Council (INC), is available both online and in print as a
            biannual open-access publication. Advertisements in the journal are
            published in color. For tariff details, please contact us:
          </p>
        </div>

        {/* Content Wrapper - Table and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Tariff Table */}
          <div className="lg:col-span-2">
            <Card className="backdrop-blur-md bg-white/20 dark:bg-gray-900/20 shadow-lg border border-white/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground text-center">
                  Pricing Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-primary hover:bg-primary">
                      <TableHead className="text-primary-foreground font-bold">
                        Page
                      </TableHead>
                      <TableHead className="text-primary-foreground font-bold text-right">
                        Tariff (Rs.)
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tariffData.map((item, index) => (
                      <TableRow
                        key={index}
                        className="hover:bg-white/10 dark:hover:bg-gray-800/20 transition-colors"
                      >
                        <TableCell className="font-medium text-foreground">
                          {item.page}
                        </TableCell>
                        <TableCell className="text-right font-semibold text-foreground">
                          ₹{item.tariff}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Advertisement Image */}
          <div className="lg:col-span-3">
            <Card className="backdrop-blur-md bg-white/20 dark:bg-gray-900/20 shadow-lg border border-white/20">
              <CardContent className="p-6">
                <div className="flex justify-center">
                  <img
                    src="/advertisement.png"
                    alt="Advertisement Layout"
                    className="w-full max-w-sm object-contain rounded-lg shadow-md"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvertisementTariff;
