import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import InputField from "./InputField";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Spinner";

export default function UploadArticleForm({
  userId,
  onUploadSuccess,
  onClose,
}) {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [tags, setTags] = useState("");

  const [authors, setAuthors] = useState([]);
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [authorPhone, setAuthorPhone] = useState("");
  const [authorORCID, setAuthorORCID] = useState("");

  const handleAddAuthor = () => {
    if (!authorName.trim() || !authorEmail.trim() || !authorPhone.trim()) {
      toast.error("Please fill in Name, Email, and Phone for the author.");
      return;
    }
    setAuthors((prev) => [
      ...prev,
      {
        name: authorName.trim(),
        email: authorEmail.trim().toLowerCase(),
        phone: authorPhone.trim(),
        ORCID: authorORCID.trim() || undefined,
      },
    ]);
    setAuthorName("");
    setAuthorEmail("");
    setAuthorPhone("");
    setAuthorORCID("");
  };

  const handleRemoveAuthor = (index) => {
    setAuthors((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!title || !file) {
      toast.error("Please provide a title and select a file.");
      return;
    }
    if (authors.length === 0) {
      toast.error("Please add at least one author.");
      return;
    }
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("userId", userId);
      formData.append("file", file);
      formData.append(
        "tags",
        tags
          .split(",")
          .map((tag) => tag.trim().toLowerCase())
          .join(",") // Join tags as comma separated string for backend parsing
      );
      formData.append("authors", JSON.stringify(authors)); // Serialize authors array as JSON string

      const res = await fetch("/api/article/upload", {
        method: "POST",
        body: formData, // multipart/form-data with file
      });
      if (!res.ok) throw new Error("Upload failed");
      const newArticle = await res.json();
      console.log(newArticle);
      setUploading(false);
      toast.success("Article uploaded successfully");
      onUploadSuccess(newArticle.article);
      onClose();
    } catch (error) {
      setUploading(false);
      toast.error(`Upload error: ${error.message || "Something went wrong"}`);
    }
  };

  const [uploading, setUploading] = useState(false);

  return (
    <>
      <ToastContainer position="top-right" />
      <form onSubmit={handleUpload} className="space-y-6 p-6">
        <InputField
          id="title"
          label="Title"
          value={title}
          onChange={setTitle}
          placeholder="Article title"
        />
        <div className="p-4 border rounded space-y-3">
          <h3 className="font-semibold text-lg">Add Authors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              id="authorName"
              label="Name *"
              value={authorName}
              onChange={setAuthorName}
              placeholder="Author full name"
            />
            <InputField
              id="authorEmail"
              label="Email *"
              value={authorEmail}
              onChange={setAuthorEmail}
              placeholder="author@example.com"
            />
            <InputField
              id="authorPhone"
              label="Phone *"
              value={authorPhone}
              onChange={setAuthorPhone}
              placeholder="+123456789"
            />
            <InputField
              id="authorORCID"
              label="ORCID"
              value={authorORCID}
              onChange={setAuthorORCID}
              placeholder="Optional ORCID"
            />
          </div>
          <Button type="button" onClick={handleAddAuthor} className="mt-2">
            Add Author
          </Button>
          {authors.length > 0 && (
            <ul className="mt-4 divide-y divide-muted-foreground max-h-48 overflow-y-auto rounded border text-sm md:text-base">
              {authors.map((author, i) => (
                <li key={i} className="flex justify-between items-center p-2">
                  <div>
                    {author.name} | {author.email} | {author.phone}{" "}
                    {author.ORCID ? `| ORCID: ${author.ORCID}` : ""}
                  </div>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleRemoveAuthor(i)}
                    aria-label="Remove author"
                    className="h-7 w-7"
                  >
                    &times;
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <Label htmlFor="file" className="text-sm md:text-base">
            Choose File
          </Label>
          <Input
            id="file"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="text-sm md:text-base"
            required
          />
        </div>
        <div>
          <InputField
            id="tags"
            label="Tags (comma separated)"
            value={tags}
            onChange={setTags}
            placeholder="science, research, AI"
          />
        </div>
        <Button type="submit" disabled={uploading} className="w-full">
          {uploading ? <Spinner /> : "Upload Article"}
        </Button>
      </form>
    </>
  );
}
