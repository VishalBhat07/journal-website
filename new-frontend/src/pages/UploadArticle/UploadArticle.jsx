import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Spinner = () => (
  <div className="w-8 h-8 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
);

const UploadArticlePage = () => {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const { user, isSignedIn, isLoaded } = useUser();

  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [uploading, setUploading] = useState(false);

  // Form state
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [tags, setTags] = useState("");

  // Redirect to login if not signed in
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      window.location.href = "/login";
    }
  }, [isLoaded, isSignedIn]);

  // Check if user is admin
  useEffect(() => {
    if (user) {
      const checkAdmin = async () => {
        try {
          const res = await fetch(backend_url + `/api/admin/check/${user.id}`);
          const data = await res.json();
          console.log(data.isAdmin);
          setIsAdmin(data.isAdmin);
        } catch {
          setIsAdmin(false);
        } finally {
          setLoading(false);
        }
      };
      checkAdmin();
    }
  }, [user]);

  // Fetch articles based on role
  useEffect(() => {
    if (!loading && user) {
      const fetchArticles = async () => {
        try {
          const url = isAdmin
            ? `/api/article/fetch`
            : `/api/article/fetch/${user.id}`;
          const res = await fetch(backend_url + url);
          const data = await res.json();
          setArticles(data);
        } catch {
          setArticles([]);
        }
      };
      fetchArticles();
    }
  }, [loading, isAdmin, user]);

  // Upload article handler
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!title || !file) return;

    setUploading(true);

    try {
      console.log(user, user.id);
      const res = await fetch(backend_url + "/api/article/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          userId: user.id,
          tags: tags.split(",").map((tag) => tag.trim().toLowerCase()),
        }),
      });
      console.log("hello", res);
      if (res.ok) {
        const newArticle = await res.json();
        setArticles((prev) => [...prev, newArticle.article]);
        setTitle("");
        setFile(null);
        setTags("");
      } else {
        alert("Upload failed");
      }
    } catch {
      alert("Upload error");
    }

    setUploading(false);
  };

  // Admin approve/reject
  const handleApprove = async (articleId) => {
    try {
      await fetch(backend_url + `/api/article/update/${articleId}`, {
        method: "POST",
      });
      setArticles((prev) =>
        prev.map((a) =>
          a._id === articleId ? { ...a, status: "approved" } : a
        )
      );
    } catch {
      alert("Failed to approve");
    }
  };

  const handleReject = async (articleId) => {
    try {
      await fetch(backend_url + `/api/articles/delete/${articleId}`, {
        method: "DELETE",
      });
      setArticles((prev) => prev.filter((a) => a._id !== articleId));
    } catch {
      alert("Failed to reject");
    }
  };

  if (loading || !isLoaded || !user) {
    return (
      <div className="flex justify-center items-center h-full">
        <Spinner />
      </div>
    );
  }

  if (isAdmin) {
    return (
      <div className="p-6">
        <h1 className="mb-4 text-2xl font-semibold">
          All Articles (Admin View)
        </h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>User ID</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Uploaded Date</TableHead>
              <TableHead>File Size</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {articles.map((article) => (
              <TableRow key={article._id}>
                <TableCell>{article.title}</TableCell>
                <TableCell>{article.userId}</TableCell>
                <TableCell>{article.status}</TableCell>
                <TableCell>
                  {new Date(article.createdAt).toLocaleString()}
                </TableCell>
                <TableCell>{article.fileSize ?? "N/A"}</TableCell>
                <TableCell className="space-x-2">
                  {article.status !== "approved" && (
                    <>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleApprove(article._id)}
                      >
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleReject(article._id)}
                      >
                        Reject
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
