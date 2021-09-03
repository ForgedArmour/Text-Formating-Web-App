import React, {useState} from 'react'
import './TextForm.css';


export default function TextForm(props) {

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
    }
    const handleFormat = ()=>{
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
        console.log("Button Clicked");
        var upperCase = text.toUpperCase();
        // document.querySelector("textarea").value = upperCase;
        setText(upperCase);
    }

    const handleChange = (event)=>{
        setText(event.target.value);
        console.log(text);
        if (text.length === 0) {
            
        }
    
    }
    const handleClear = ()=>{
        setText("");
    }
    const [text,setText] = useState("");
    

    return (
        <>
            <div className="main-content flex-container" >
                <h2 className={`tit my-3 txt-${props.mode}`}>Enter the text to Analyze</h2>
                <textarea placeholder="Enter your text here" cols="100" rows="10" onChange={handleChange} value={text} className={`txt inp-${props.mode}`}></textarea>
                <div className="button my-3">
                    <button className={`btn-${props.mode} mx1-3`} onClick={handleClick}>UpperCase</button>
                    <button className={`btn-${props.mode} mx1-3`} onClick={handleClear}>Clear</button>
                    <button className={`btn-${props.mode} mx1-3`} onClick={handleFormat}>Format</button>
                    <button className={`btn-${props.mode} mx1-3`} onClick={handleCopy}>Copy</button>
                </div>
                
                <table className="table my-3">
                    <tr>
                        <th>Words</th>
                        <td>{text.split(" ").length}</td>
                    </tr>
                    <tr>
                        <th>Characters</th>
                        <td>{text.length}</td>
                    </tr>
                    <tr>
                        <th>Sentences</th>
                        <td>{text.split(".").length}</td>
                    </tr>
                    <tr>
                        <th>Paragraphs</th>
                        <td>{text.split("\n\n").length}</td>
                    </tr>
                </table>
                {/* <p className="txtData">{text.split(" ").length} Words and {text.length} chars</p> */}
            </div>
        </>
    )
}
