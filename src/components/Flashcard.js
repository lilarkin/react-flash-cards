import React, { Component } from 'react';
import EditFlashcard from './EditFlashcard';

class Flashcard extends Component {
  constructor(props) {
    super(props) 
    this.state = { editing: false, answering: false }
  }

  toggleEdit = () => {
    let editing = !this.state.editing
    this.setState({ editing })
  }

  toggleAnswer = () => {
    let answering = !this.state.answering 
    this.setState({ answering })
  }

  render() {
    let flashcard = this.props.flashcard
    return (
      <div>
        <h1>{flashcard.title}</h1>
        { this.state.editing ? <EditFlashcard
                                  toggleEdit={this.toggleEdit}
                                  updateFlashcard={this.props.updateFlashcard} 
                                  flashcard={flashcard} 
                               /> 
                             : null 
        }
        
        <p>{flashcard.question}</p>
        
        <div className='margin-bottom-10'>
          { this.state.answering ? flashcard.answer : null }
        </div>

        <br/>
        <button className='btn' onClick={this.toggleEdit}>
          {this.state.editing ? 'Cancel' : 'Edit' }  
        </button> 
        <button className='btn margin-left-10' onClick={this.toggleAnswer}>
          {this.state.answering ? 'Hide Answer' : 'Show Answer' }
        </button> 
        <button className='btn red margin-left-10' 
          onClick={ () => this.props.deleteFlashcard(flashcard.id) }>
          Delete
        </button>

      </div>
    )
  }
}

export default Flashcard;