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
import Help from './components/Help';
import Alert from './components/Alert';

function App(){
    const [mode,setMode] = useState('light');
    const [alert,setAlert] = useState(null);
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
    const showAlert = (msg)=>{
        setAlert({
            message:msg
        });
        setTimeout(()=>{
            setAlert(null);
        },1000);
        
    }
    return(
        <>
            <Router> 
                <Navbar title="TextMate" mode = {mode} modeSwitch={toggle} />  
                <Alert msg={alert} />
                <Switch>
                    <Route path="/help">
                        <Help mode={mode} />
                    </Route>
                    <Route path="/services">
                        <Services mode={mode} />
                    </Route>
                    <Route path="/about">
                        <About mode={mode} />
                    </Route>
                    <Route path="/">
                        <TextForm mode = {mode} showAlert = {showAlert} />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;