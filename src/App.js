import { useState, useEffect } from 'react';
import './App.css';
import Question from './components/Question';


function App() {

  const [questions, setQuestions] = useState([]);
  // console.log('questions', questions); // eslint-disable-line
//https://opentdb.com/api_config.php
  useEffect(() => {
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "PHPSESSID=15bcfda0208502e3f707a3d8695f6d7b");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://opentdb.com/api.php?amount=10", requestOptions)
    .then(response => response.text())
    .then(result => setQuestions(JSON.parse(result).results))
  }, []);

  return (
    <div className="App-header">
      <h1>Take the Quiz</h1>
      {questions.map((question, i) =>
        <Question key={i}
                  {...question} />
      )}
    </div>
  );
}

export default App;
