import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { EditorOptions, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { common, createLowlight } from "lowlight";
import Underline from "@tiptap/extension-underline";

const lowlight = createLowlight(common);

export default function useEditorInstance(props: Partial<EditorOptions>) {
  const editor = useEditor({
    ...props,
    extensions: [
      StarterKit.configure({ codeBlock: false }),
      CodeBlockLowlight.configure({ lowlight }),
      Underline,
    ],
  });

  return editor;
}
