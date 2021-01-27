import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

function GoodPage() {
  return (
    <div className="GoodPage">
      <header className="header" role="banner">
       <h1>Good Example</h1>
      </header>

      <main>
        <h2>Can you tell what is a heading</h2>
        <p>and what is a paragraph</p>

        <img src="/thumbs-up.jpg" alt="Image of a thumbs up"/>

        <h2>Using divs vs semantic HTML makes a difference</h2>
        <p>Try to think of this page as if you were only hearing it</p>

        <form>
          <fieldset>
              <legend>Have you been able to understand what this page has been trying to show you?</legend>

              <input type="radio" id="option1" name="option"/>
              <label for="option1">Yes, I have understood pretty well</label><br/>

              <input type="radio" id="option2" name="option"/>
              <label for="option2">No, I have no clue what is going on</label>
          </fieldset>
          <Button>Submit</Button>
        </form>

      </main>
    </div>
  );
}

export default GoodPage;
