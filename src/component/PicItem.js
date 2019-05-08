import React, {Component} from 'react';
import './main.css'

class PicItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: props.name,
      image: props.image
    }
  }

  flipCard(event) {
    event.currentTarget.classList.toggle('is-flipped');
  }

  render() {
    const image = `/images/${this.state.image}`
    return (
    <div className='flip-card'>
      <div className='flip-card-inner' onClick={this.flipCard}>
        <div id='pic-card' className= "flip-card-front" >
          <img src={image} className='pic' alt={this.state.name}/>
          <p>{this.state.name}</p>
        </div>
        <div className= "flip-card-back">
          <img src='/images/Logo.jpeg' className='card-back' alt='Card Back'/>
        </div>
      </div>
    </div>
  )
}
}

export default PicItem;
