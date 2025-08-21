import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import ConfirmationDialog from "@/components/ConfirmationDialog/ConfirmationDialog";

const PreviousIssues = () => {
  const [issues, setIssues] = React.useState([]);

  React.useEffect(() => {
    const fetchArchives = async () => {
      try {
        const res = await fetch("/api/archive/fetch");
        const data = await res.json();
        console.log("Fetched Archives:", data);
        if (data.success) {
          setIssues(data.data.archives);
        }
      } catch (err) {
        console.error("Error fetching archives:", err);
      }
    };

    fetchArchives();
  }, []);

  return (
    <div className="space-y-8 p-6 pt-20 pb-20 min-h-screen bg-background text-foreground">
      <div className="flex justify-end max-w-6xl mx-auto">
        <AddJournalDialog />
      </div>
      <ArchiveCard issues={issues} />
    </div>
  );
};

// -------------------- Internal Components --------------------

function AddJournalDialog() {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [date, setDate] = useState(null);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/archive/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          cloudStorageUrl: link,
          publishedDate: date,
          tags: tags
            .split(",")
            .map((t) => t.trim())
            .filter((t) => t.length > 0),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Error:", data.error || "Failed to add archive");
        return;
      }

      console.log("Success:", data);

      // Reset form
      setTitle("");
      setLink("");
      setDate(null);
      setTags("");

      // Close dialog programmatically
      document.querySelector("[data-dialog-close]")?.click();
      window.location.reload();

    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Add Journal</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Journal Issue</DialogTitle>
            <DialogDescription>
              Fill in the journal details below and save.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <InputField
              label="Title"
              id="title"
              placeholder="Volume X, Issue Y"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <InputField
              label="File Link"
              id="link"
              placeholder="https://example.com/file.pdf"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <InputField
              label="Tags (comma separated)"
              id="tags"
              placeholder="science, research, AI"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
            <DatePickerField
              calendarOpen={calendarOpen}
              setCalendarOpen={setCalendarOpen}
              date={date}
              setDate={setDate}
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" data-dialog-close>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}



function EditArchiveDialog({ archive }) {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [date, setDate] = useState(archive?.publishedDate ? new Date(archive.publishedDate) : null);
  const [title, setTitle] = useState(archive?.title || "");
  const [link, setLink] = useState(archive?.cloudStorageUrl || "");
  const [tags, setTags] = useState(archive?.tags?.join(", ") || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/archive/${archive._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          cloudStorageUrl: link,
          publishedDate: date,
          tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
        }),
      });

      if (!res.ok) throw new Error("Failed to update archive");

      // Close dialog programmatically
      document.querySelector("[data-dialog-close]")?.click();
      window.location.reload();
    } catch (error) {
      console.error("Error updating archive:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Pencil className="w-4 h-4 text-blue-500 cursor-pointer hover:text-blue-700" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Archive</DialogTitle>
            <DialogDescription>
              Update the archive details below and save.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <InputField
              label="Title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <InputField
              label="File Link"
              id="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <InputField
              label="Tags (comma separated)"
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
            <DatePickerField
              calendarOpen={calendarOpen}
              setCalendarOpen={setCalendarOpen}
              date={date}
              setDate={setDate}
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" data-dialog-close>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}




function InputField({ label, id, value, onChange, placeholder }) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

function DatePickerField({ calendarOpen, setCalendarOpen, date, setDate }) {
  return (
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
  );
}

function ArchiveCard({ issues }) {
  return (
    <Card className="w-full max-w-6xl mx-auto border-l-4 border-l-purple-500 border border-muted-foreground backdrop-blur-md bg-background text-foreground pt-8">
      <CardHeader className="text-center">
        <CardTitle className="text-xl md:text-2xl text-foreground">
          Previous Issues
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ArchiveTable issues={issues} />
      </CardContent>
    </Card>
  );
}

async function deleteArchive(archiveId) {
  try {
    const res = await fetch(`/api/archive/${archiveId}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Failed to delete archive");
    }

    return await res.json();
  } catch (error) {
    console.error("Error deleting archive:", error);
    throw error;
  }
}

function ArchiveTable({ issues }) {
  return (
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
            Tags
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
        {issues.map((issue) => (
          <TableRow
            key={issue._id}
            className="hover:bg-white/10 dark:hover:bg-gray-800/20 transition-colors backdrop-blur"
          >
            {/* Title */}
            <TableCell className="text-center text-sm md:text-base text-foreground">
              {issue.title}
                            {console.log(issue._id, issue._id.length)}

            </TableCell>

            {/* Published Date */}
            <TableCell className="text-center text-sm md:text-base text-foreground">
              {new Date(issue.publishedDate).toLocaleDateString()}
            </TableCell>

            {/* Cloud Storage Link */}
            <TableCell className="text-center text-sm md:text-base">
              <a
                href={issue.cloudStorageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm md:text-base"
              >
                View Article
              </a>
            </TableCell>

            {/* Tags */}
            <TableCell className="text-center text-sm md:text-base text-foreground">
              {issue.tags && issue.tags.length > 0 ? (
                <div className="flex flex-wrap gap-2 justify-center">
                  {issue.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-full text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : (
                <span className="text-gray-500 italic">No tags</span>
              )}
            </TableCell>

            {/* Last Updated */}
            <TableCell className="text-center text-sm md:text-base text-foreground">
              {new Date(issue.updatedAt).toLocaleDateString()}
            </TableCell>

            {/* Actions */}
            <TableCell className="flex justify-center gap-4 items-center text-sm md:text-base">
              <EditArchiveDialog archive={issue} />
              <ConfirmationDialog
                onConfirm={async () => {
                  await deleteArchive(issue._id);

                  window.location.reload(); // ensures UI refresh
                }}
                confirmText="Are you sure you want to delete this archive? This action cannot be undone."
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}


export default PreviousIssues;
