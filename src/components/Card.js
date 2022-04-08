import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function OutlinedCard({ category, correct_answer, difficulty, question, type, incorrect_answers }) {
  const answers = incorrect_answers.concat(correct_answer);
  const shuffledAnswers = answers.sort(() => Math.random() - 0.5);
  const replaceQuotationMarks = question.replaceAll('&quot;', '"')
  const replaceApostrophe = replaceQuotationMarks.replaceAll('&#039;', "'");
  const checkAnswer = (answer) => {
    console.log('e: ',answer);
    if(answer === correct_answer) {
      alert('Correct!');
    }
  }

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 25 }} color="primary" gutterBottom>
        {category}
        </Typography>
        <Typography sx={{ fontSize: 25 }} component="div">
          Difficulty: {difficulty}
        </Typography>
        <Typography sx={{ fontSize: 15 }}>
          Question: {replaceApostrophe}
        </Typography>
      </CardContent>
     {shuffledAnswers.map((answer, i) =>
      <CardActions>
        <Button 
          variant="contained"
          onClick={() => {
            checkAnswer(answer);
          }}
          size="small">{answer}
        </Button>
      </CardActions>
        )}
    </React.Fragment>
  );
  
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}