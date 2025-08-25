import React, { useEffect, useState } from "react";
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
import { useUser } from "@clerk/clerk-react";

export default function ManageArticles() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const ADMIN_ID = user.id;
  // 1. Check Admin Privileges
  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await fetch(`/api/admin/check/${ADMIN_ID}`);
        const data = await res.json();
        setIsAdmin(data.isAdmin);
      } catch (error) {
        console.error("Error checking admin:", error);
      }
    };
    checkAdmin();
  }, []);

  // 2. Fetch Articles
  const fetchArticles = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/article/fetch");
      const data = await res.json();
      setArticles(data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAdmin) fetchArticles();
  }, [isAdmin]);

  // 3. Handle Approve / Reject
  const handleUpdateStatus = async (articleId, status) => {
    try {
      const res = await fetch(`/api/article/update/${articleId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ articleStatus: status }),
      });

      const data = await res.json();
      if (res.ok) {
        alert(`Article ${status}!`);
        fetchArticles(); // Refresh data
      } else {
        alert(data.message || "Error updating article.");
      }
    } catch (error) {
      console.error("Error updating article:", error);
    }
  };

  if (!isAdmin) {
    return (
      <div className="text-center mt-20 text-lg font-semibold text-red-500">
        Access Denied - You are not an Admin.
      </div>
    );
  }

  return (
    <div className="min-h-screen p-20">
      <Card className="border border-muted-foreground backdrop-blur-md bg-background text-foreground pt-8">
        <CardHeader className="text-center">
          <CardTitle className="text-xl md:text-2xl text-foreground">
            Manage Articles
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-center py-8 text-muted-foreground">Loading...</p>
          ) : (
            <Table className="w-full">
              <TableHeader>
                <TableRow className="bg-primary/80 backdrop-blur hover:bg-primary/90">
                  <TableHead className="text-center text-primary-foreground">
                    Title
                  </TableHead>
                  <TableHead className="text-center text-primary-foreground">
                    Authors
                  </TableHead>
                  <TableHead className="text-center text-primary-foreground">
                    Tags
                  </TableHead>
                  <TableHead className="text-center text-primary-foreground">
                    Status
                  </TableHead>
                  <TableHead className="text-center text-primary-foreground">
                    Upload Date
                  </TableHead>
                  <TableHead className="text-center text-primary-foreground">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {articles.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      className="text-center py-8 text-muted-foreground"
                    >
                      No articles uploaded yet.
                    </TableCell>
                  </TableRow>
                ) : (
                  articles.map((article) => (
                    <TableRow
                      key={article._id}
                      className="hover:bg-white/10 dark:hover:bg-gray-800/20 transition-colors backdrop-blur"
                    >
                      <TableCell className="text-center font-medium">
                        {article.title}
                      </TableCell>
                      <TableCell className="text-center">
                        {article.authors?.length > 0
                          ? article.authors.map((a) => a.name).join(", ")
                          : "N/A"}
                      </TableCell>
                      <TableCell className="text-center">
                        {article.tags?.length > 0
                          ? article.tags.join(", ")
                          : "N/A"}
                      </TableCell>
                      <TableCell className="text-center capitalize">
                        {article.status}
                      </TableCell>
                      <TableCell className="text-center">
                        {new Date(article.createdAt).toLocaleDateString()}{" "}
                        {new Date(article.createdAt).toLocaleTimeString()}
                      </TableCell>
                      <TableCell className="text-center space-x-2">
                        <a
                          href={article.cloudStorageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          View
                        </a>
                        {article.status === "pending" && (
                          <>
                            <Button
                              variant="success"
                              size="sm"
                              onClick={() =>
                                handleUpdateStatus(article._id, "approved")
                              }
                              className="cursor-pointer"
                            >
                              Approve
                            </Button>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() =>
                                handleUpdateStatus(article._id, "rejected")
                              }
                              className="cursor-pointer"
                            >
                              Reject
                            </Button>
                          </>
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
