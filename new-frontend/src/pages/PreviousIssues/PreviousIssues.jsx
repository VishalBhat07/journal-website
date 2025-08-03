"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, ChevronDownIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const PreviousIssues = () => {
  const [calendarOpen, setCalendarOpen] = React.useState(false);
  const [date, setDate] = React.useState(null);

  const dummyData = [
    {
      title: "Volume 1, Issue 1",
      date: "2023-01-15",
      fileLink: "#",
      updated: "2023-01-20",
    },
    {
      title: "Volume 1, Issue 2",
      date: "2023-04-10",
      fileLink: "#",
      updated: "2023-04-12",
    },
    {
      title: "Volume 2, Issue 1",
      date: "2024-01-05",
      fileLink: "#",
      updated: "2024-01-06",
    },
  ];

  return (
    <div className="space-y-8 p-6 pt-20 pb-20 min-h-screen bg-background text-foreground">
      {/* Add Journal Button with Dialog */}
      <div className="flex justify-end max-w-6xl mx-auto">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">Add Journal</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <form>
              <DialogHeader>
                <DialogTitle>Add Journal Issue</DialogTitle>
                <DialogDescription>
                  Fill in the journal details below and save.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-3">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" name="title" placeholder="Volume X, Issue Y" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="link">File Link</Label>
                  <Input id="link" name="link" placeholder="https://example.com/file.pdf" />
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="date" className="px-1">
                    Publish Date
                  </Label>
                  <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        id="date"
                        className="w-full justify-between font-normal"
                      >
                        {date ? date.toLocaleDateString() : "Select date"}
                        <ChevronDownIcon />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        captionLayout="dropdown"
                        onSelect={(selectedDate) => {
                          setDate(selectedDate);
                          setCalendarOpen(false);
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Table Display */}
      <Card className="w-full max-w-6xl mx-auto border-l-4 border-l-purple-500 border border-muted-foreground backdrop-blur-md bg-background text-foreground pt-8">
        <CardHeader className="text-center">
          <CardTitle className="text-xl md:text-2xl text-foreground">
            Previous Issues
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="bg-primary/80 backdrop-blur hover:bg-primary/90">
                <TableHead className="text-primary-foreground font-bold text-center text-sm md:text-base">
                  Title
                </TableHead>
                <TableHead className="text-primary-foreground font-bold text-center text-sm md:text-base">
                  Date
                </TableHead>
                <TableHead className="text-primary-foreground font-bold text-center text-sm md:text-base">
                  File
                </TableHead>
                <TableHead className="text-primary-foreground font-bold text-center text-sm md:text-base">
                  Last Updated
                </TableHead>
                <TableHead className="text-primary-foreground font-bold text-center text-sm md:text-base">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dummyData.map((issue, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-white/10 dark:hover:bg-gray-800/20 transition-colors backdrop-blur"
                >
                  <TableCell className="text-center text-sm md:text-base text-foreground">
                    {issue.title}
                  </TableCell>
                  <TableCell className="text-center text-sm md:text-base text-foreground">
                    {issue.date}
                  </TableCell>
                  <TableCell className="text-center text-sm md:text-base">
                    <a
                      href={issue.fileLink}
                      className="text-blue-500 hover:underline text-sm md:text-base"
                    >
                      View Article
                    </a>
                  </TableCell>
                  <TableCell className="text-center text-sm md:text-base text-foreground">
                    {issue.updated}
                  </TableCell>
                  <TableCell className="flex justify-center gap-4 items-center text-sm md:text-base">
                    <Pencil className="w-4 h-4 text-blue-500 cursor-pointer hover:text-blue-700" />
                    <Trash2 className="w-4 h-4 text-red-500 cursor-pointer hover:text-red-700" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PreviousIssues;
