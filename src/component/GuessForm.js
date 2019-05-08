import React, { Component } from 'react'
import AnswerView from './AnswerView'

class GuessForm extends Component {

  constructor(props) {
    super(props)
    this.state={
      name: 'Jon Snow'
    };
    // TODO: Binds
    this.selectName = this.selectName.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  createNamesArray() {
    const namesArray = []
    this.props.characters.forEach((character) => {
      namesArray.push(character.name);
    })
    return namesArray;
  }

  selectName(event) {
    this.setState({ name: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name;
    const answer = this.props.answer.name;
    this.setState({result: <AnswerView answer={answer} name={name}/>})
  }

  render() {
    const namesArray = this.createNamesArray()


    return(
      <div id='option-form' className="ui form">
      <form onSubmit={this.handleSubmit} className='two fields'>
        <select name='characters' onChange={this.selectName} className='field'>
          {namesArray.map((name, index) => <option key={index}>{name}</option>)};
        </select>
        <input type='submit' value='Submit Event' className='ui positive button field'/>
      </form>
      <div className='answer-text'>
      {this.state.result}
      </div>
      </div>
    )
  }

}

export default GuessForm;
