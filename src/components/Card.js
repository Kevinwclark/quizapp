import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material/';


export default function OutlinedCard({ category, correct_answer, difficulty, question, type, incorrect_answers, setAnswer }) {
  const answers = incorrect_answers.concat(correct_answer);
  const shuffledAnswers = answers.sort(() => Math.random() - 0.5);
  const replaceQuotationMarks = question.replaceAll('&quot;', '"')
  const replaceApostrophe = replaceQuotationMarks.replaceAll('&#039;', "'");
  const checkAnswer = (e) => {
    if(e.target.textContent === correct_answer) {
      setAnswer(true);
      console.log('correct');
    } else {
      setAnswer(false);
      console.log('incorrect');
    }
  }

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 25 }} color="primary" gutterBottom>
        Category: {category}
        </Typography>
        <Typography sx={{ fontSize: 25 }} component="div">
          Difficulty: {difficulty}
        </Typography>
        <Typography sx={{ fontSize: 30 }}>
          Question: {replaceApostrophe}
        </Typography>
      </CardContent>
      <Grid 
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
       >
        {shuffledAnswers.map((answer, i) =>
          <Grid item xs={3} >
            <CardActions key={i}>
              <Button 
                variant="contained"
                onClick={checkAnswer}
                key={i}
                size="large">{answer}
              </Button>
            </CardActions>
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
  
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}