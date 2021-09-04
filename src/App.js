import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Services from './components/Services'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

function App(){
    const [mode,setMode] = useState('light');
    const toggle = ()=>{
        if (mode === 'light') {
            setMode('dark');
            document.body.style.background = "#181818"

        }
        else{
            setMode('light');
            document.body.style.background = "white"
        }
    }
    return(
        <>
            <Router> 
                <Navbar title="TextUtils" mode = {mode} modeSwitch={toggle} />  
                <Switch>
                    <Route path="/TextUtils-React/services">
                        <Services mode={mode} />
                    </Route>
                    <Route path="/TextUtils-React/about">
                        <About mode={mode} />
                    </Route>
                    <Route path="/TextUtils-React/">
                        <TextForm mode = {mode}/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;