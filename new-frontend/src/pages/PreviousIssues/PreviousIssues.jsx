import React, { useState, useEffect } from "react";
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
import { useUser } from "@clerk/clerk-react";
import ArchiveTable from "./ArchiveTable";

const PreviousIssues = () => {
  const { user } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    // Fetch archives
    const fetchArchives = async () => {
      try {
        const res = await fetch("/api/archive/fetch");
        const data = await res.json();
        if (data.success) {
          setIssues(data.data.archives);
        }
      } catch (err) {
        console.error("Error fetching archives:", err);
      }
    };

    // Check admin status
    const checkAdmin = async () => {
      if (!user?.id) {
        setIsAdmin(false);
        return;
      }
      try {
        const res = await fetch(`/api/admin/check/${user.id}`);
        const data = await res.json();
        setIsAdmin(data.isAdmin);
      } catch (err) {
        console.error("Error checking admin status:", err);
        setIsAdmin(false);
      }
    };

    checkAdmin();
    fetchArchives();
  }, [user]);

  return (
    <div className="space-y-8 p-6 pt-20 pb-20 min-h-screen bg-background text-foreground">
      <div className="flex justify-end max-w-6xl mx-auto">
        <AddJournalDialog />
      </div>
      <ArchiveCard issues={issues} isAdmin={isAdmin} />
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
  const [date, setDate] = useState(
    archive?.publishedDate ? new Date(archive.publishedDate) : null
  );
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
          tags: tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean),
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
  );
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

function ArchiveCard({ issues, isAdmin }) {
  return (
    <Card className="w-full max-w-6xl mx-auto border-l-4 border-l-purple-500 border border-muted-foreground backdrop-blur-md bg-background text-foreground pt-8">
      <CardHeader className="text-center">
        <CardTitle className="text-xl md:text-2xl text-foreground">
          Previous Issues
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ArchiveTable issues={issues} isAdmin={isAdmin} />
      </CardContent>
    </Card>
  );
}

export default PreviousIssues;
