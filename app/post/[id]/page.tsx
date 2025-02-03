"use client";

import { useSearchParams } from "next/navigation";
import ImageEditor from "@/components/ui/ImageEditor";
export default function PostPage() {
  const searchParams = useSearchParams();
  const text = searchParams.get("text") ?? "";
  const image = searchParams.get("image") ?? "";

  if (!text || !image) {
    return <p className="text-center text-red-500">Invalid post. Please try again.</p>;
  }

  return <ImageEditor initialText={decodeURIComponent(text)} image={decodeURIComponent(image)} />;
}