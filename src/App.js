import { useState, useEffect } from 'react';
import './App.css';
import Question from './components/Question';
import { Grid, Alert, AlertTitle, Button,  } from '@mui/material';


function App() {

  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  console.log(questions[questionNumber] && questions[questionNumber].correct_answer)

  const fetchQuestions = async () => {
    const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple');
    const data = await response.json();
    setQuestions(data.results);
  }
  useEffect(() => {
    fetchQuestions();
  },[])


  const nextQuestion = () => {
    if(answer === true) {
      setScore(score + 1);
      setAnswer(null)
      
    } else if (answer === false) {
      setAnswer(null)
    }
    setQuestionNumber(questionNumber + 1)
  }

  const resetGame = () => {
    setScore(0);
    setQuestionNumber(0);
    fetchQuestions();
    setAnswer(null)
  }

  return (
    <div className="App-header">
      <Grid container spacing={4} direction='row' justifyContent='space-evenly'>

          <Grid item xs={4} style={{paddingLeft: 50}}>
            <h1>Take the Quiz</h1>
          </Grid>

          <Grid item xs={4} >
            <h1>Score: {score}</h1>
          </Grid>
          <Grid item xs={4} >
            <h1>Question: {questionNumber + 1}/10</h1>
          </Grid>
          <Grid item xs={4} >
          {answer === true && (
            <Alert severity="success">
            <AlertTitle>Correct</AlertTitle>
            The correct answer is— <strong>{questions[questionNumber].correct_answer}</strong>
          </Alert>
          )}
          {answer === false && (
            <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            The correct answer is— <strong>{questions[questionNumber].correct_answer}</strong>
          </Alert>
          )}

          </Grid>
        <Grid xs={11}>
          {questions[questionNumber] && <Question key={questions[questionNumber]} setAnswer={setAnswer} {...questions[questionNumber]} />}
        </Grid> 
        <Grid item xs={3} >
              <Button 
                variant="contained"
                onClick={nextQuestion}
                size="large">Next
              </Button>
          </Grid>
          <Grid item xs={3} >
              <Button 
                variant="contained"
                onClick={resetGame}
                size="large">New Game
              </Button>
          </Grid>
      </Grid>
    </div>
  );
}

export default App;
