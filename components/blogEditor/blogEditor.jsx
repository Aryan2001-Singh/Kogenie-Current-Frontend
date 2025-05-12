"use client";
import { useState, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import CodeBlock from "@tiptap/extension-code-block";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import CharacterCount from "@tiptap/extension-character-count";
import Blockquote from "@tiptap/extension-blockquote";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import "highlight.js/styles/github-dark.css"; 

hljs.registerLanguage("xml", xml);

export default function BlogEditor({ value, onChange }) {
  const [showHTML, setShowHTML] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: false, table: false }),
      Heading.configure({ levels: [1, 2, 3] }),
      Table.configure({ resizable: true }),
      TableRow,
      TableCell,
      TableHeader,
      Image,
      Link,
      CodeBlock,
      Blockquote,
      HorizontalRule,
      TaskList,
      TaskItem.configure({ nested: true }),
      CharacterCount.configure({ limit: 10000 }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });
  useEffect(() => {
    if (showHTML) {
      setTimeout(() => {
        document.querySelectorAll("pre code").forEach((block) => {
          hljs.highlightElement(block);
        });
      }, 0);
    }
  }, [showHTML]);
  
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value]);

  const handleImageUpload = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = async () => {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        editor.chain().focus().setImage({ src: reader.result }).run();
      };
      reader.readAsDataURL(file);
    };

    input.click();
  };

  if (!editor) return null;

  const characterCount = editor.storage.characterCount;

  return (
    <div className="max-w-3xl p-6 bg-white shadow rounded">
      {/* Toolbar */}
      <div className="flex gap-2 flex-wrap mb-4">
        <button onClick={() => editor.chain().focus().toggleBold().run()} className="px-2 py-1 border rounded text-sm">Bold</button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className="px-2 py-1 border rounded text-sm">Italic</button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()} className="px-2 py-1 border rounded text-sm">• List</button>
        <button onClick={() => editor.chain().focus().toggleTaskList().run()} className="px-2 py-1 border rounded text-sm">☑ Checklist</button>
        <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className="px-2 py-1 border rounded text-sm">❝ Quote</button>
        <button onClick={() => editor.chain().focus().setParagraph().run()} className="px-2 py-1 border rounded text-sm">Paragraph</button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className="px-2 py-1 border rounded text-sm">H1</button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className="px-2 py-1 border rounded text-sm">H2</button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className="px-2 py-1 border rounded text-sm">H3</button>
        <button onClick={() => editor.chain().focus().insertHorizontalRule().run()} className="px-2 py-1 border rounded text-sm">— HR</button>
        <button onClick={() => editor.chain().focus().insertTable({ rows: 2, cols: 2, withHeaderRow: true }).run()} className="px-2 py-1 border rounded text-sm">Table</button>
        <button onClick={handleImageUpload} className="px-2 py-1 border rounded text-sm">📷 Image</button>
        <button onClick={() => setShowHTML(!showHTML)} className="px-2 py-1 border rounded text-sm">
          {showHTML ? "Editor View" : "HTML View"}
        </button>
      </div>

      {/* Content area */}
      {showHTML ? (
      <div className="relative">
      <pre className="bg-[#0f172a] text-[#f8fafc] p-4 rounded font-mono text-sm overflow-x-auto whitespace-pre-wrap border border-gray-700">
        <code className="language-xml">{editor.getHTML()}</code>
      </pre>
      <div className="absolute top-0 right-0 px-2 py-1 text-xs bg-indigo-600 text-white rounded-bl">
        HTML Preview
      </div>
    </div>
    
      ) : (
        <div className="prose prose-sm sm:prose-base md:prose-lg lg:prose-xl max-w-none">
  <EditorContent editor={editor} />
</div>

      )}

      {/* Word and character count */}
      <div className="mt-3 text-sm text-gray-600">
        Words: {characterCount.words()} | Characters: {characterCount.characters()}
      </div>
    </div>
  );
}
