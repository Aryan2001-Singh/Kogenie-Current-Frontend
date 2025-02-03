import { v4 as uuidv4 } from "uuid";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as Blob | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const id = uuidv4();
    const uploadsDir = path.join(process.cwd(), "public/uploads");
    const filePath = path.join(uploadsDir, `${id}.png`);
    const buffer = Buffer.from(await file.arrayBuffer());

    // 🔹 Ensure the "uploads" directory exists
    await mkdir(uploadsDir, { recursive: true });

    // 🔹 Save the uploaded file
    await writeFile(filePath, buffer);

    return NextResponse.json({ id, url: `/uploads/${id}.png` });
  } catch (error) {
    console.error("File upload error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}