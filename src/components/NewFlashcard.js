import React, { Component } from 'react';

class NewFlashcard extends Component {
  addFlashcard = (e) => {
    //STOP FORM FROM SUBMITTING
    e.preventDefault();

    //GRAB THE INPUTS WE NEED DATA FROM
    let question = this.refs.question;
    let answer = this.refs.answer

    //CALL PARENT FUNCTION WITH VALUES FROM INPUT
    this.props.newFlashcard(question.value, answer.value) 

    //RESET THE INPUTS
    question.value = null;
    answer.value = null; 
  }

  render() {
    return(
      <div>
        <form onSubmit={this.addFlashcard}>
          <input type='text' ref='question' placeholder='Question' />
          <input type='text' ref='answer' placeholder='Answer' />
          <input type='submit' />
        </form>
      </div>  
    )
  }
}

export default NewFlashcard;