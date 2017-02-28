import React, { Component } from 'react' ;

class EditFlashcard extends Component {

  addFlashcard = (e) => {
    e.preventDefault();
    let question = this.refs.question.value
    let answer = this.refs.answer.value
    this.props.updateFlashcard(question, answer, this.props.flashcard.id)
    this.props.toggleEdit()

  }

  render() {
    let flashcard = this.props.flashcard;
    return(
      <div>
        <form onSubmit={this.addFlashcard} >
          <input type='text' ref='question' defaultValue={flashcard.question} />
          <input type='text' ref='answer' defaultValue={flashcard.answer} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default EditFlashcard; 