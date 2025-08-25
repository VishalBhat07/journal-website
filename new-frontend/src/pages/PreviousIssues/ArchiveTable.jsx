import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ConfirmationDialog from "@/components/ConfirmationDialog/ConfirmationDialog";

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

function ArchiveTable({ issues, isAdmin }) {
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
          {isAdmin && (
            <TableHead className="text-primary-foreground font-bold text-center text-sm md:text-base">
              Actions
            </TableHead>
          )}
        </TableRow>
      </TableHeader>

      <TableBody>
        {issues.map((issue) => (
          <TableRow
            key={issue._id}
            className="hover:bg-white/10 dark:hover:bg-gray-800/20 transition-colors backdrop-blur"
          >
            <TableCell className="text-center text-sm md:text-base text-foreground">
              {issue.title}
            </TableCell>
            <TableCell className="text-center text-sm md:text-base text-foreground">
              {new Date(issue.publishedDate).toLocaleDateString()}
            </TableCell>
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
            <TableCell className="text-center text-sm md:text-base text-foreground">
              {new Date(issue.updatedAt).toLocaleDateString()}
            </TableCell>
            {isAdmin && (
              <TableCell className="flex justify-center gap-4 items-center text-sm md:text-base">
                <EditArchiveDialog archive={issue} />
                <ConfirmationDialog
                  onConfirm={async () => {
                    await deleteArchive(issue._id);
                    window.location.reload();
                  }}
                  confirmText="Are you sure you want to delete this archive? This action cannot be undone."
                />
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ArchiveTable;
