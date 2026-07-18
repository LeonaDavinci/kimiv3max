"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";

export default function RichTextEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value || "",
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: { class: "ProseMirror" },
    },
  });

  useEffect(() => {
    if (editor && value === "" && editor.getHTML() !== "<p></p>") {
      // reset when cleared externally
    }
  }, [value, editor]);

  if (!editor) return null;

  return (
    <div>
      <div className="editor-toolbar">
        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} aria-label="Bold">
          B
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} aria-label="Italic">
          <em>I</em>
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          H2
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
          H3
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()}>
          • List
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          1. List
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          ❝ Quote
        </button>
        <button type="button" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          ― Rule
        </button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
