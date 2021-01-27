import React from 'react';
import './App.css';

function BadPage() {
  return (
    <div className="BadPage">
      <div className="header">
       <p className="heading">Bad Example</p>
      </div>

      <div className="main">
        <p className="heading2">Can you tell what is a heading</p>
        <p>and what is a paragraph</p>

        <img src="/thumbs-down.jpg"/>

        <p className="heading2">Using divs vs semantic HTML makes a difference</p>
        <p>Try to think of this page as if you were only hearing it</p>

        <form>
          <fieldset>
              <legend>Have you been able to understand what this page has been trying to show you?</legend>

              <input type="radio"/>
              <div className="label">Yes, I have understood pretty well</div><br/>

              <input type="radio"/>
              <div className="label">No, I have no clue what is going on</div>
          </fieldset>
          <div className="button" tabindex="0">Submit</div>
        </form>

      </div>
    </div>
  );
}

export default BadPage;
