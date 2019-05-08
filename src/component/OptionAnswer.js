import React from 'react';

const OptionAnswer = (props) => {

  const universal = props.universal
  const particular = props.particular;
  const answer = props.answer;

  console.log(answer[universal]);
  console.log(universal);
  console.log(particular);
  console.log(answer);

  if (answer[universal] === particular) {
      return <div>Yes</div>
  } else {
      return <div>No</div>
  }

}

export default OptionAnswer;
