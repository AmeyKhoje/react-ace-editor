import React, {useState} from 'react';
import AceEditor from 'react-ace'
import Select from 'react-select'
import brace from 'brace'
import "ace-builds/src-noconflict/mode-python"
import "ace-builds/src-noconflict/mode-java"
import "ace-builds/src-noconflict/mode-c_cpp"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/ext-spellcheck"
import "ace-builds/src-min-noconflict/ext-language_tools"
import "ace-builds/src-min-noconflict/ext-spellcheck"
import "ace-builds/src-min-noconflict/ext-error_marker"
// import "ace-builds/src-min/t"
import "brace/theme/clouds_midnight"
import "brace/theme/dracula"
import "brace/theme/monokai"
import "brace/theme/textmate"
import "brace/theme/ambiance"

import "brace/snippets/html"
import "brace/snippets/javascript"
import "brace/snippets/java"
import "brace/snippets/python"
import "brace/snippets/c_cpp"

const Editor = (props) => {
    const [ theme, setTheme ] = useState('')
    const [ mode, setMode ] = useState('')
    const options = [
        {value: 'dracula', label: 'Dracula'},
        {value: 'monokai', label: 'Monokai'},
        {value: 'textmate', label: 'TextMate'},
        {value: 'ambiance', label: 'Ambiance'}
    ]
    const languages = [
        {value: 'java', label:'Java'},
        {value: 'python', label: 'Python'},
        {value: 'c_cpp', label: 'C++'},
        {value: 'javascript', label: 'JavaScript'}
    ]
    const changeEditorHandler = (newChange) => {
        console.log("change occured", newChange);
        
    }

    const runCode = () => {
        console.log('code');
        
    }

    const themeChangeHandler = (theme) => {
        setTheme(theme)
        
    }
    const modeChangeHandler = (modes) => {
        setMode(modes)
    }
    console.log(theme.value);
    console.log(mode);
    
    
    return (
        <div className="custom-editor">
            <h2>Code Editor</h2>
            <div className="mode-flex">
                <div className="theme-toggle">
                    <h3>Choose Theme</h3>
                    <Select
                        options={options}
                        onChange={themeChangeHandler}
                        className="select-box"
                    />
                </div>
                <div className="theme-toggle">
                    <h3>Choose Language</h3>
                    <Select
                        options={languages}
                        onChange={modeChangeHandler}
                        className="select-box"
                    />
                </div>
            </div>
            <div className="main-editor">
                <div>
                    {mode.value && theme.value ? <AceEditor
                        focus
                        mode={mode.value}
                        theme={theme.value}
                        onChange={changeEditorHandler}
                        editorProps={{ $blockScrolling: true }}
                        fontSize="18px"
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                            spellcheck: true
                        }}
                        tabSize="4"
                        className="ace-cust"
                    /> : <p>Please choose Language and Theme. That's necessary</p>}
                </div>
                {mode.value && theme.value ? <div className="editor-opt">
                    <div className="give-input">
                        <caption>Input</caption>
                        <textarea className="input-textarea" />
                    </div>
                    <div className="output-cont">
                        <caption>Output</caption>
                        <textarea className="output" disabled />
                    </div>
                </div> : ''}
            </div>
            <button onClick={runCode}>Run</button>
        </div>
    );
}

export default Editor;
