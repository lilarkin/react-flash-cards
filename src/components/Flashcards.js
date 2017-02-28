import React, { Component } from 'react';
import Flashcard from './Flashcard';
import NewFlashcard from './NewFlashcard';

class Flashcards extends Component {
  constructor(props) {
    super(props)
    let flashcard1 = {
                     id: 1,
                     title: `Card 1`,
                     question: 'What is this?',
                     answer: 'Fuck if I know.'
    }
    let flashcard2 = {
                  id: 2,
                  title: `Card 2`,
                  question: 'What is this?',
                  answer: 'Fuck if I know.'
    }
  
    this.state = { id: 2, flashcards: [flashcard1, flashcard2] }
    
  }

  newFlashcard = (question, answer) => {
    let flashcards = this.state.flashcards 
    let id = this.state.id + 1
    let flashcard = { 
          id: id, 
          title: `Card ${id}`,
          question: question,
          answer: answer
    }
    this.setState({ flashcards: [...flashcards, flashcard], id: id })
  }

  updateFlashcard = (question, answer, id) => {
    let flashcards = this.state.flashcards.map( card => {
      if (card.id === id) {
        card.question = question 
        card.answer = answer 
        return card 
      } else { 
        return card
      }
    })
    this.setState({ flashcards })
  }

  deleteFlashcard = (id) => {
    if (confirm('Are you sure you want to delete?')){
     
      let flashcards = this.state.flashcards.filter( card => {
        if (card.id === id)
          return null
        else
          return card
      })
      this.setState({ flashcards })
    }
  }

  render() {
    let flashcards = this.state.flashcards.map( card => {
      return(<Flashcard 
              updateFlashcard={this.updateFlashcard}
              deleteFlashcard={this.deleteFlashcard} 
              key={card.id} flashcard={card}/>)
    })
    return (
      <div>
        <NewFlashcard newFlashcard={this.newFlashcard} />
        {flashcards}
      </div>
    )
  }
}

export default Flashcards;