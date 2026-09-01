"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyleKit } from "@tiptap/extension-text-style";
import Image from "@tiptap/extension-image";
import { Placeholder } from "@tiptap/extensions";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code2,
  Link as LinkIcon,
  Image as ImageIcon,
  Quote,
  Minus,
  List,
  ListOrdered,
  ChevronDown,
  Type,
} from "lucide-react";
import { useRef } from "react";
import "./tiptap-editor.css";

type Props = {
  value?: string;
  fieldChange?: (html: string) => void;
};

const colors = [
  "#111827",
  "#6B7280",
  "#DC2626",
  "#2563EB",
  "#059669",
  "#D97706",
  "#7C3AED",
];

function ToolbarButton({
  label,
  active,
  disabled,
  onClick,
  children,
}: {
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={`tt-btn ${active ? "is-active" : ""}`}
      aria-label={label}
      title={label}
      disabled={disabled}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
const TiptapEditor = ({ value = "", fieldChange }: Props) => {
  const imageInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      TextStyleKit.configure({
        backgroundColor: false,
        fontFamily: false,
        fontSize: false,
        lineHeight: false,
      }),
      Image.configure({
        inline: false,
        allowBase64: true,
      }),
      Placeholder.configure({
        showOnlyWhenEditable: true,
      }),
    ],
    content: value,
    immediatelyRender: false,
    onUpdate: ({ editor }) => fieldChange?.(editor.getHTML()),
  });

  if (!editor) return null;

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Enter URL", previousUrl ?? "https://");

    if (url === null) return;

    if (url.trim() === "") {
      editor.chain().focus().unsetLink().run();
      return;
    }

    editor.chain().focus().setLink({ href: url.trim() }).run();
  };

  const addImage = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      editor
        .chain()
        .focus()
        .setImage({ src: String(reader.result), alt: file.name })
        .run();
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="tt-editor max-h-96">
      <div className="tt-toolbar" role="toolbar" aria-label="Text formatting">
        <div className="tt-style-wrap">
          <button
            type="button"
            className="tt-style-button"
            title="Text style"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              const current = editor.isActive("heading", { level: 1 })
                ? "Heading 1"
                : editor.isActive("heading", { level: 2 })
                  ? "Heading 2"
                  : editor.isActive("heading", { level: 3 })
                    ? "Heading 3"
                    : "Paragraph";

              const next = window.prompt(
                "Text style: Paragraph, Heading 1, Heading 2, or Heading 3",
                current,
              );

              if (!next) return;

              const value = next.toLowerCase();
              if (value === "paragraph")
                editor.chain().focus().setParagraph().run();
              if (value === "heading 1")
                editor.chain().focus().toggleHeading({ level: 1 }).run();
              if (value === "heading 2")
                editor.chain().focus().toggleHeading({ level: 2 }).run();
              if (value === "heading 3")
                editor.chain().focus().toggleHeading({ level: 3 }).run();
            }}
          >
            <Type size={17} strokeWidth={2} />
            <ChevronDown size={14} />
          </button>
        </div>

        <ToolbarButton
          label="Italic"
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic size={17} />
        </ToolbarButton>

        <ToolbarButton
          label="Bold"
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold size={17} />
        </ToolbarButton>

        <ToolbarButton
          label="Inline code"
          active={editor.isActive("code")}
          onClick={() => editor.chain().focus().toggleCode().run()}
        >
          <Code2 size={17} />
        </ToolbarButton>

        <ToolbarButton
          label="Underline"
          active={editor.isActive("underline")}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <Underline size={17} />
        </ToolbarButton>

        <ToolbarButton
          label="Strikethrough"
          active={editor.isActive("strike")}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough size={17} />
        </ToolbarButton>

        <div className="tt-separator" />

        <div className="tt-color-wrap">
          <label className="tt-color-button" title="Text color">
            <span className="tt-color-a">A</span>
            <span
              className="tt-color-line"
              style={{
                backgroundColor:
                  (editor.getAttributes("textStyle").color as
                    | string
                    | undefined) ?? "#111827",
              }}
            />
            <ChevronDown size={14} />
            <input
              type="color"
              value={
                (editor.getAttributes("textStyle").color as
                  | string
                  | undefined) ?? "#111827"
              }
              onChange={(e) =>
                editor.chain().focus().setColor(e.target.value).run()
              }
            />
          </label>
          <div className="tt-color-menu">
            {colors.map((color) => (
              <button
                key={color}
                type="button"
                aria-label={`Set color ${color}`}
                style={{ backgroundColor: color }}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => editor.chain().focus().setColor(color).run()}
              />
            ))}
            <button
              type="button"
              className="tt-clear-color"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => editor.chain().focus().unsetColor().run()}
            >
              ×
            </button>
          </div>
        </div>

        <div className="tt-separator" />

        <ToolbarButton
          label="Bullet list"
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List size={18} />
        </ToolbarButton>

        <ToolbarButton
          label="Ordered list"
          active={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered size={18} />
        </ToolbarButton>

        <div className="tt-separator" />

        <ToolbarButton
          label="Link"
          active={editor.isActive("link")}
          onClick={setLink}
        >
          <LinkIcon size={17} />
        </ToolbarButton>

        <ToolbarButton
          label="Insert image"
          onClick={() => imageInputRef.current?.click()}
        >
          <ImageIcon size={17} />
        </ToolbarButton>

        <input
          ref={imageInputRef}
          hidden
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) addImage(file);
            e.currentTarget.value = "";
          }}
        />

        <ToolbarButton
          label="Blockquote"
          active={editor.isActive("blockquote")}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <Quote size={18} />
        </ToolbarButton>

        <ToolbarButton
          label="Code block"
          active={editor.isActive("codeBlock")}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        >
          <Code2 size={17} />
        </ToolbarButton>

        <ToolbarButton
          label="Horizontal rule"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <Minus size={19} />
        </ToolbarButton>
      </div>

      <div className="tt-content">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TiptapEditor;
