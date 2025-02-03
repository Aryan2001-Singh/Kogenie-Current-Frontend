"use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
import UploadForm from "@/components/UploadForm";

export default function UploadPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Create Your Post</h1>
      <UploadForm />
    </div>
  );
}