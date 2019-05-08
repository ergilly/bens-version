import React, {Component} from 'react';
import OptionParticulars from './OptionParticulars.js';
import OptionAnswer from './OptionAnswer.js'

class OptionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      particular: 'Baratheon',
      selected: 'House',
    }

    this.handleSelection = this.handleSelection.bind(this);
    this.handleParticular = this.handleParticular.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelection(event) {
    this.setState({selected: event.target.value})
    document.querySelector('#optionSelect').selectedIndex = 0;

    const defaultOption = this.setDefaultOption(event.target.value);
    this.setState({particular: defaultOption});
  }

  handleParticular(event) {
    this.setState({particular: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    const universal = this.state.selected.toLowerCase();
    const particular = this.state.particular;
    const answer = this.props.answer;

    this.setState({result: <OptionAnswer universal={universal} particular={particular} answer={answer}/>})
  }

  setDefaultOption(value) {
    switch (value) {
      case 'House':
        return 'Baratheon';
        break;
      case 'Hair':
        return 'Black';
        break;
      case 'Gender':
        return 'Female';
        break;
      case 'Dead':
        return 'true';
        break;
      default:
        return 'Baratheon';
    }
  }


  render() {
    return (
      <div id='option-form' className="ui form">
        <form onSubmit={this.handleSubmit} className='three fields'>
          <select onChange={this.handleSelection} className='ui selection dropdown'>
            <option value="House">House</option>
            <option value="Hair">Hair Colour</option>
            <option value="Gender">Gender</option>
            <option value="Dead">Are They Dead?</option>
          </select>
           <OptionParticulars selected={this.state.selected} change={this.handleParticular} className='ui selection dropdown'/>
          <input type="submit" value="Check" className='ui positive button fluid'/>
        </form>
        <div className='answer-text'>
        {this.state.result}
        </div>
      </div>
    )
  }
}

export default OptionForm;
