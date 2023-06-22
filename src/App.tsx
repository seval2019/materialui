import React from 'react';
import logo from './logo.svg';
import './App.css';
import {LessonTypography} from './components/LessonTypography';
import { LessonButton } from './components/LessonButton';
import { LessonRadioGroup } from './components/LessonRadioGroup';


function App() {
  return (
    <div className="App">
      {/* <br></br>
      <LessonTypography/> */}
      <br></br>
      {/* <LessonButton/> */}
      <br></br>

      <LessonRadioGroup/>

    </div>
  );
}

export default App;
