import React, { useState, useEffect } from 'react'
import { DraftailEditor } from "draftail";
import { EditorState, convertFromRaw, ContentState } from "draft-js";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import createSideToolbarPlugin from "draft-js-side-toolbar-plugin";
import "draft-js/dist/Draft.css";
import "draftail/dist/draftail.css";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import "draft-js-side-toolbar-plugin/lib/plugin.css";
import { ButtonGroup } from 'react-bootstrap';
const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;

const sideToolbarPlugin = createSideToolbarPlugin();
const { SideToolbar } = sideToolbarPlugin;

const plugins = [inlineToolbarPlugin, sideToolbarPlugin];
export default function Editor() {

    const emptyContentState = convertFromRaw({
        entityMap: {},
        blocks: [
            {
                text: "",
                key: "foo",
                type: "unstyled",
                entityRanges: [],
            },
        ],
    });

    const [editorState, setEditorState] = useState(
        EditorState.createWithContent(emptyContentState)
    );

    useEffect(() => {
        setEditorState(
            EditorState.createWithContent(ContentState.createFromText(''))
        );
    }, []);

    return (
        <div>
            <DraftailEditor
                textAlignment='center'
                placeholder="Poem title"
                editorState={editorState}
                onChange={(editorState) => {
                    setEditorState(editorState);
                }}
                plugins={plugins}
            />
            <ButtonGroup onClick={()=>{console.log(editorState.getCurrentContent().getPlainText())}}>Click me</ButtonGroup>
            <InlineToolbar />
            <SideToolbar />
        </div >
    )

}
