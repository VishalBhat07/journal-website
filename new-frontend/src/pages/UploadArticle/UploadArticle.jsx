import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Spinner = () => (
  <div className="w-8 h-8 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
);

const UploadArticlePage = () => {
  const { user, isSignedIn, isLoaded } = useUser();

  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [uploading, setUploading] = useState(false);

  // Article form states
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [tags, setTags] = useState("");

  // Author list and single author inputs
  const [authors, setAuthors] = useState([]);
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [authorPhone, setAuthorPhone] = useState("");
  const [authorORCID, setAuthorORCID] = useState("");

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      window.location.href = "/login";
    }
  }, [isLoaded, isSignedIn]);

  useEffect(() => {
    if (!loading && user) {
      const fetchArticles = async () => {
        try {
          console.log(user.id);
          const res = await fetch(`/api/article/fetch/${user.id}`);
          const data = await res.json();
          setArticles(data);
        } catch {
          setArticles([]);
        }
      };
      fetchArticles();
    }
  }, [isLoaded, user]);

  const handleAddAuthor = () => {
    // Basic validation for required fields
    if (!authorName.trim() || !authorEmail.trim() || !authorPhone.trim()) {
      alert("Please fill in Name, Email, and Phone for the author.");
      return;
    }

    // Add new author
    setAuthors((prev) => [
      ...prev,
      {
        name: authorName.trim(),
        email: authorEmail.trim().toLowerCase(),
        phone: authorPhone.trim(),
        ORCID: authorORCID.trim() || undefined,
      },
    ]);

    // Reset author input fields
    setAuthorName("");
    setAuthorEmail("");
    setAuthorPhone("");
    setAuthorORCID("");
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!title || !file) {
      alert("Please provide a title and select a file.");
      return;
    }

    if (authors.length === 0) {
      alert("Please add at least one author.");
      return;
    }

    setUploading(true);

    try {
      console.log(user, user.id);
      const res = await fetch("/api/article/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          userId: user.id,
          tags: tags.split(",").map((tag) => tag.trim().toLowerCase()),
          authors, // send authors array
        }),
      });

      if (res.ok) {
        const newArticle = await res.json();
        setArticles((prev) => [...prev, newArticle.article]);
        setTitle("");
        setFile(null);
        setTags("");
        setAuthors([]);
      } else {
        alert("Upload failed");
      }
    } catch {
      alert("Upload error");
    }

    setUploading(false);
  };

  if (loading || !isLoaded || !user) {
    return (
      <div className="flex justify-center items-center h-full">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="mb-6 text-2xl font-semibold">My Articles</h1>
      {articles.length > 0 ? (
        <>
          {articles.map((article) => (
            <Card key={article._id} className="mb-4">
              <CardHeader>
                <CardTitle>{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Status: <strong>{article.status}</strong>
                </p>
                <p>
                  Uploaded Date: {new Date(article.createdAt).toLocaleString()}
                </p>
                <p>File Size: {article.fileSize ?? "N/A"}</p>
                <p>
                  <a
                    href={article.cloudStorageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View Article
                  </a>
                </p>
              </CardContent>
            </Card>
          ))}
        </>
      ) : (
        <p>No previous uploads found.</p>
      )}

      <h2 className="mb-4 text-xl font-semibold">Upload New Article</h2>
      <form onSubmit={handleUpload} className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Authors input section */}
        <div className="p-4 border rounded space-y-3">
          <h3 className="font-semibold text-lg">Add Authors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <Label htmlFor="authorName">Name *</Label>
              <Input
                id="authorName"
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Author full name"
              />
            </div>
            <div>
              <Label htmlFor="authorEmail">Email *</Label>
              <Input
                id="authorEmail"
                type="email"
                value={authorEmail}
                onChange={(e) => setAuthorEmail(e.target.value)}
                placeholder="author@example.com"
              />
            </div>
            <div>
              <Label htmlFor="authorPhone">Phone *</Label>
              <Input
                id="authorPhone"
                type="tel"
                value={authorPhone}
                onChange={(e) => setAuthorPhone(e.target.value)}
                placeholder="+123456789"
              />
            </div>
            <div>
              <Label htmlFor="authorORCID">ORCID</Label>
              <Input
                id="authorORCID"
                type="text"
                value={authorORCID}
                onChange={(e) => setAuthorORCID(e.target.value)}
                placeholder="Optional ORCID"
              />
            </div>
          </div>
          <Button type="button" onClick={handleAddAuthor}>
            Add Author
          </Button>

          {/* Show added authors */}
          {authors.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold">Authors Added:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {authors.map((author, index) => (
                  <li key={index}>
                    {author.name} | {author.email} | {author.phone}{" "}
                    {author.ORCID ? `| ORCID: ${author.ORCID}` : ""}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          <Label htmlFor="file">Choose File</Label>
          <Input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </div>

        <div>
          <Label htmlFor="tags">Tags (comma separated)</Label>
          <Input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        <Button type="submit" disabled={uploading}>
          {uploading ? "Uploading..." : "Upload Article"}
        </Button>
      </form>
    </div>
  );
};

export default UploadArticlePage;