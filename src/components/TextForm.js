import React, {useState} from 'react'
import './TextForm.css';


export default function TextForm(props) {

    const handleCopy = ()=>{
        props.showAlert("Text Copied Successfully")
        let txt = document.querySelector(".txt");
        navigator.clipboard.writeText(txt.value);
    }
    const handleFormat = ()=>{
        props.showAlert("Successfully Formated the text");
        let currentChar;
        let prevChar;
        let result="";
        let flag=0;
        var str = text;
        console.log(str);
        currentChar = str[0];
        prevChar = str[0];

        for(let i = 0;i<str.length;i++){
            if (flag === 0) {
                if (str[i] !== " " && str[i] !== "\n") {
                    flag=1;
                }
            }
            if (flag === 1) {
                currentChar = str[i];
                if (currentChar !== " " && currentChar !== "\n") {
                    result += currentChar;
                }
                else{
                    if (prevChar === " " || str[(i-2)]==="\n") {
                        continue;
                    }
                    else{

                        result += currentChar;
                    }
                }
                prevChar = currentChar;
            }
        
        }

        setText(result);
    }
    const handleClick = ()=>{
        let upperCase = text.toUpperCase();
        setText(upperCase);
    }

    const handleChange = (event)=>{
        setText(event.target.value);    
    }
    const handleLowerCase = ()=>{
        let lower = text.toLowerCase();
        setText(lower);
    }
    const handleClear = ()=>{
        setText("");
    }
    const [text,setText] = useState("");
    

    return (
        <>
            <div className="main-content flex-container" >
                <h2 className={`tit my1-3 txt-${props.mode}`}>Enter the text to Analyze</h2>
                <textarea placeholder="Enter your text here" cols="100" rows="10" onChange={handleChange} value={text} className={`txt inp-${props.mode}`}></textarea>
                <div className="button my-3">
                    <div className="btn-grp1">
                        <button className={`btn-${props.mode} mx1-3 normal-button`} onClick={handleClick} disabled={text.length===0}>UpperCase</button>
                        <button className={`btn-${props.mode} mx1-3 normal-button`} onClick={handleLowerCase} disabled={text.length===0}>LowerCase</button>
                    </div>
                    <div className="btn-grp2">
                        <button className={`btn-${props.mode} mx1-3 normal-button`} onClick={handleClear} disabled={text.length===0}>Clear</button>
                        <button className={`btn-${props.mode} mx1-3 normal-button`} onClick={handleCopy} disabled={text.length===0}>Copy</button>
                    </div>
                    <div className="revert-btn">
                        <button className={`btn-${props.mode} mx1-3 normal-button`} onClick={handleFormat} disabled={text.length===0}>Format</button>
                    </div>
                </div>
                
                <table className="table my-3">
                    <tr>
                        <th>Words</th>
                        <td>{text.split(" ").filter((wrd)=>(wrd !== "")).length}</td>
                    </tr>
                    <tr>
                        <th>Characters(Including spaces)</th>
                        <td>{text.length}</td>
                    </tr>
                    <tr>
                        <th>Characters(Without spaces)</th>
                        <td>{text.replace(/\s/g, "").length}</td>
                    </tr>
                    <tr>
                        <th>Sentences</th>
                        <td>{text.split(".").filter((wrd)=>(wrd !== "")).length}</td>
                    </tr>
                    <tr>
                        <th>Paragraphs</th>
                        <td>{text==="" ? 0 :text.trim().split("\n\n").length}</td>
                    </tr>
                </table>
                {/* <p className="txtData">{text.split(" ").length} Words and {text.length} chars</p> */}
            </div>
        </>
    )
}
