import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function App() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey="8idbucxvoavnyspujhmitseuzyouxgr61o97a0642h9sqqbj"
        onInit={(evt, editor) => (editorRef.current = editor)}
        selector="textarea#open-source-plugins"
        plugins="print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons"
        imagetools_cors_hosts="picsum.photos"
        menubar="file edit view insert format tools table help"
        toolbar="undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl"
        toolbar_sticky={true}
        autosave_ask_before_unload={true}
        autosave_interval="30s"
        autosave_prefix="{path}{query}-{id}-"
        autosave_restore_when_empty={false}
        autosave_retention="2m"
        image_advtab={true}
        template_cdate_format="[Date Created (CDATE)=%m/%d/%Y =%H=M=S]"
        template_mdate_format="[Date Modified (MDATE)=%m/%d/%Y =%H=M=S]"
        height={600}
        image_caption={true}
        quickbars_selection_toolbar="bold italic | quicklink h2 h3 blockquote quickimage quicktable"
        noneditable_noneditable_class="mceNonEditable"
        toolbar_mode="sliding"
        contextmenu="link image imagetools table"
        content_style={
          "body { font-family=elveticaArialsans-serif; font-size=4px }"
        }
      />
    </>
  );
}