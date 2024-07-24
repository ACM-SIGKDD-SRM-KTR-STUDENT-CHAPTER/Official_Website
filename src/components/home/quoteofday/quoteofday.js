import React from 'react';
import Card from 'react-bootstrap/Card';
import "./quoteofday.css";

// Updated quotes array with specific authors
const quotes = [
  { text: "Hello there people", author: "SRMSIGKDD STUDENT CHAPTER" },
  { text: "Artificial intelligence is the new electricity.", author: "Andrew Ng" },
  { text: "Data is the new oil.", author: "Clive Humby" },
  { text: "Without big data, you are blind and deaf in the middle of a freeway.", author: "Geoffrey Hinton" },
  { text: "Big data is at the foundation of all the megatrends that are happening.", author: "Dan Ariely" },
  { text: "You can have data without information, but you cannot have information without data.", author: "Daniel Keys Moran" },
  { text: "The goal is to turn data into information, and information into insight.", author: "Carly Fiorina" },
  { text: "Information is the oil of the 21st century, and analytics is the combustion engine.", author: "Peter Sondergaard" },
  { text: "The world is one big data problem.", author: "Tim Berners-Lee" },
  { text: "Data really powers everything that we do.", author: "Jeff Weiner" },
  { text: "The science of today is the technology of tomorrow.", author: "Edward Teller" },
  { text: "AI is likely to be either the best or worst thing to happen to humanity.", author: "Stephen Hawking" },
  { text: "What we want is a machine that can learn from experience.", author: "Alan Turing" },
  { text: "Machine learning is the last invention that humanity will ever need to make.", author: "Anonymous" },
  { text: "Data is a precious thing and will last longer than the systems themselves.", author: "Tim Berners-Lee" },
  { text: "Data is the new science. Big Data holds the answers.", author: "Dawn Song" },
  { text: "The purpose of computation is insight, not numbers.", author: "George E.P. Box" },
  { text: "Big data is at the foundation of all the megatrends that are happening today, from social to mobile to cloud to gaming.", author: "Anonymous" },
  { text: "The more you know about the past, the better prepared you are for the future.", author: "Theodore Roosevelt" },
  { text: "Without data, you're just another person with an opinion.", author: "W. Edwards Deming" },
  { text: "AI is the science of making machines do things that would require intelligence if done by men.", author: "Alan Turing" },
  { text: "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.", author: "E. W. Dijkstra" }
];

function getQuoteOfTheDay() {
  const startDate = new Date('2024-07-01');
  const today = new Date();
  if (isNaN(startDate.getTime()) || isNaN(today.getTime())) {
    return { text: "Error: Invalid date.", author: "Unknown" };
  }
  const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
  const quoteIndex = diffDays % quotes.length;
  return quotes[quoteIndex];
}

function QuoteOfTheDay() {
  const { text, author } = getQuoteOfTheDay();

  return (
    <section className="section">
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-3 col-sm-3">
          <Card className="bg-black text-white glow mobcard qucard">
            <Card.Header style={{fontWeight: "bold",fontSize:"1.5rem",color:"#57abd7"}}>Quote of the Day</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>{text}</p>
                <footer className="blockquote-footer">
                  <cite title="Source Title" style={{fontWeight: 550}}>{author}</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default QuoteOfTheDay;
