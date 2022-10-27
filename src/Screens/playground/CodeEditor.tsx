import React, { useState } from "react";

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

const EditorContainer = styled.div`
  height: 100%;
  flex-grow: 1;

  & > div{
    height:100%; 
  }

`;

const CodeEditor = () => {
  const [lang , setLang] = useState(java);
  const [mode, setMode] = useState(duotoneDark);
   return <EditorContainer>
     <CodeMirror
       theme={mode}
       height={"100%"}
      extensions={[lang]}      
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
