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

export default function ArticleTable({ articles }) {
  return (
    <Card className="border border-muted-foreground backdrop-blur-md bg-background text-foreground pt-8">
      <CardHeader className="text-center">
        <CardTitle className="text-xl md:text-2xl text-foreground">
          My Articles
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="w-full">
          <TableHeader>
            <TableRow className="bg-primary/80 backdrop-blur hover:bg-primary/90">
              <TableHead className="text-primary-foreground font-bold text-center text-sm md:text-base">Title</TableHead>
              <TableHead className="text-primary-foreground font-bold text-center text-sm md:text-base">Authors</TableHead>
              <TableHead className="text-primary-foreground font-bold text-center text-sm md:text-base">Tags</TableHead>
              <TableHead className="text-primary-foreground font-bold text-center text-sm md:text-base">Status</TableHead>
              <TableHead className="text-primary-foreground font-bold text-center text-sm md:text-base">Upload Date</TableHead>
              <TableHead className="text-primary-foreground font-bold text-center text-sm md:text-base">File Size</TableHead>
              <TableHead className="text-primary-foreground font-bold text-center text-sm md:text-base">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {articles.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                  No articles uploaded yet.
                </TableCell>
              </TableRow>
            ) : (
              articles.map((article) => (
                <TableRow key={article._id} className="hover:bg-white/10 dark:hover:bg-gray-800/20 transition-colors backdrop-blur">
                  <TableCell className="text-center text-sm md:text-base text-foreground font-medium">
                    {article.title}
                  </TableCell>
                  <TableCell className="text-center text-sm md:text-base text-foreground">
                    {article.authors?.length > 0 ? article.authors.map((a) => a.name).join(", ") : "N/A"}
                  </TableCell>
                  <TableCell className="text-center text-sm md:text-base text-foreground">
                    {article.tags?.length > 0 ? article.tags.join(", ") : "N/A"}
                  </TableCell>
                  <TableCell className="text-center text-sm md:text-base capitalize text-foreground">
                    {article.status}
                  </TableCell>
                  <TableCell className="text-center text-sm md:text-base text-foreground">
                    {new Date(article.createdAt).toLocaleDateString()}{" "} 
                    {new Date(article.createdAt).toLocaleTimeString()}
                  </TableCell>
                  <TableCell className="text-center text-sm md:text-base text-foreground">
                    {article.fileSize ?? "N/A"}
                  </TableCell>
                  <TableCell className="text-center text-sm md:text-base">
                    <a
                      href={article.cloudStorageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View
                    </a>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
