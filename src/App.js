import { useState, useEffect } from 'react';
import './App.css';
import Question from './components/Question';
import { Grid } from '@mui/material';


function App() {

  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  console.log(questions.length, questionNumber)
  console.log('here')

  const fetchQuestions = async () => {
    const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple');
    const data = await response.json();
    setQuestions(data.results);
  }
  useEffect(() => {
    fetchQuestions();
  },[])

  useEffect(() => {
    if(answer === true) {
      setScore(score + 1);
      setAnswer(null)
      setQuestionNumber(questionNumber + 1);
    } else if (answer === false) {
      setAnswer(null)
      setQuestionNumber(questionNumber + 1);
    }
  },[answer])

  return (
    <div className="App-header">
      <Grid container spacing={4} direction='row' justifyContent='space-evenly'>


          <Grid item xs={6} md={8}>
            <h1>Take the Quiz</h1>
          </Grid>

          <Grid item xs={6} md={4}>
            <h1>Score: {score}</h1>
          </Grid>

        <Grid xs={11}>
          {questions[questionNumber] && <Question key={questions[questionNumber]} setAnswer={setAnswer} {...questions[questionNumber]} />}
        </Grid> 
      </Grid>
    </div>
  );
}

export default App;
