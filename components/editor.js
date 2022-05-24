import React, { useState, useEffect } from 'react'
import { DraftailEditor } from "draftail";
import { EditorState, convertFromRaw, ContentState,convertToRaw } from "draft-js";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import createSideToolbarPlugin from "draft-js-side-toolbar-plugin";
import "draft-js/dist/Draft.css";
import "draftail/dist/draftail.css";
import { useDispatch } from 'react-redux';
import {addPoem} from '../Redux/action';
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import "draft-js-side-toolbar-plugin/lib/plugin.css";
const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const sideToolbarPlugin = createSideToolbarPlugin();
const { SideToolbar } = sideToolbarPlugin;
const plugins = [inlineToolbarPlugin, sideToolbarPlugin];
import { stateToHTML } from "draft-js-export-html";
export default function Editor({updateValue}) {
    console.log(updateValue)
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
    const dispatch = useDispatch();
    const [editorState, setEditorState] = useState(
        EditorState.createWithContent(emptyContentState)
    );
    const [plainTxtHTML,setPlainTxtHTML] = useState('');
    const [plainTxt,setPlainTxt] = useState(!updateValue?"":updateValue);

    useEffect(() => {
        setEditorState(
            EditorState.createWithContent(ContentState.createFromText(!updateValue?"":updateValue))
        );
        
    }, []);
    useEffect(() => {
        const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
        const value = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n');
        const htmlOutput = stateToHTML(editorState.getCurrentContent())
        setPlainTxt(value);
        setPlainTxtHTML(htmlOutput);
    }, [editorState])

    return (
        <div style={{marginBottom:'100px'}}>
            <DraftailEditor
                textAlignment='center'
                placeholder={'Poem'}
                editorState={editorState}
                onChange={(editorState) => {
                    dispatch(addPoem({poet:plainTxt,poetHTML:plainTxtHTML}));
                    setEditorState(editorState);
                }}
                plugins={plugins}
            />
            <InlineToolbar />
            <SideToolbar />
        </div >
    )

}
