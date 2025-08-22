import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import UploadArticleForm from "./UploadArticleForm";
import ArticleTable from "./ArticleTable";
import Spinner from "./Spinner";

export default function UploadArticle() {
  const { user, isSignedIn, isLoaded } = useUser();

  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      window.location.href = "/login";
    }
  }, [isLoaded, isSignedIn]);

  useEffect(() => {
    if (isLoaded && user) {
      (async () => {
        try {
          const res = await fetch(`/api/article/fetch/${user.id}`);
          const data = await res.json();
          setArticles(data);
        } catch {
          setArticles([]);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [isLoaded, user]);

  const handleUploadSuccess = (newArticle) => {
    setArticles((prev) => [...prev, newArticle]);
    setDialogOpen(false);
  };

  if (loading || !isLoaded || !user) {
    return (
      <div className="flex justify-center items-center h-full min-h-[60vh]">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6 pt-20 pb-20 min-h-screen bg-background text-foreground max-w-7xl mx-auto">
      <div className="flex justify-end">
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="default">Add Article</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Upload New Article</DialogTitle>
              <DialogDescription>
                Fill in the details below and upload your article.
              </DialogDescription>
            </DialogHeader>

            <UploadArticleForm
              userId={user.id}
              onUploadSuccess={handleUploadSuccess}
              onClose={() => setDialogOpen(false)}
            />

            <DialogClose asChild>
              <button
                aria-label="Close"
                className="absolute right-4 top-4 rounded-md p-1 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                &#x2715;
              </button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </div>

      <ArticleTable articles={articles} />
    </div>
  );
}
