import React, { useEffect, useState } from "react";

import CodeMirror, { basicSetup } from '@uiw/react-codemirror';

import { java } from '@codemirror/lang-java';
import { javascript } from '@codemirror/lang-javascript';
import { cpp } from '@codemirror/lang-cpp';
import { python } from "@codemirror/lang-python";
import { php } from "@codemirror/lang-php";

import { bespin } from '@uiw/codemirror-theme-bespin';
import { darcula } from '@uiw/codemirror-theme-darcula';
import { duotoneLight, duotoneDark } from '@uiw/codemirror-theme-duotone';
import { githubLight, githubDark } from '@uiw/codemirror-theme-github';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import styled from "styled-components";
import { config } from "process";
import { modeOptions } from "./Editor";
import { indentUnit } from "@codemirror/language";
import { EditorState } from "@codemirror/state";
const EditorContainer = styled.div`
  height: 100%;
  flex-grow: 1;

  & > div{
    height:100%; 
  }

`;

interface CodeEditorProps{
  langauge: string;
  theamMode: string;
  currentCode: string;
  codeChangeHandler: (selected: string) => void;
}




const CodeEditor: React.FC<CodeEditorProps>  = ({langauge, theamMode,currentCode, codeChangeHandler }) => {
  const [currentLang , setCurrentLang] = useState(java);
  const [currnetMode, setCurrnetMode] = useState(duotoneDark);

  

  useEffect(() => { 
    if (langauge === 'c++') {
      setCurrentLang(cpp);
    }
     if (langauge === 'java') {
      setCurrentLang(java);
    }
     if (langauge === 'javascript') {
      setCurrentLang(javascript());
    }
     if (langauge === 'python') {
      setCurrentLang(python);
    }
    if (langauge === 'php') {
      setCurrentLang(php());
    }

  }, [langauge])
  useEffect(() => {
    
    if (theamMode === 'bespin') {
      setCurrnetMode(bespin)
    }
    if (theamMode === 'darcula') {
      setCurrnetMode(darcula)
    }
    if (theamMode === 'duotoneLight') {
      setCurrnetMode(duotoneLight)
    }
    if (theamMode === 'duotoneDark') {
      setCurrnetMode(duotoneDark)
    }
    if (theamMode === 'githubLight') {
      setCurrnetMode(githubLight)
    }
    if (theamMode === 'githubDark') {
      setCurrnetMode(githubDark)
    }
    if (theamMode === 'okaidia') {
      setCurrnetMode(okaidia)
    }

  }, [theamMode])


   return <EditorContainer>
     <CodeMirror
       value={currentCode}
       onChange={(e) => {
         console.log(e);
         codeChangeHandler(e)
       }}
       theme={currnetMode}
       height={"100%"}
       extensions={[currentLang,
         indentUnit.of("        "),
          EditorState.tabSize.of(8),
         EditorState.changeFilter.of(() => true),
       ]}      
      basicSetup={{
          lineNumbers: true,
          highlightActiveLineGutter: false,
          foldGutter: true,
          dropCursor: true,
          allowMultipleSelections: true,
          indentOnInput: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          rectangularSelection: true,
          crosshairCursor: true,
          highlightActiveLine: true,
          highlightSelectionMatches: true,
          closeBracketsKeymap: true,
          searchKeymap: true,
          foldKeymap: true,
          completionKeymap: true,
          lintKeymap: true,
       }}
       
     />


  </EditorContainer>
}

export default CodeEditor;
