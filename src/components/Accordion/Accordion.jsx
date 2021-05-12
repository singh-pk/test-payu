import { useState } from 'react';

import './Accordion.scss';

const Accordion = ({ question, answer }) => {
  let [toggleAnswer, setToggleAnswer] = useState(false);

  return (
    <div className='accordion'>
      <header onClick={() => setToggleAnswer(prevState => !prevState)}>
        {question}
        <div className={`${toggleAnswer ? 'minus-icon' : ''} plus-icon`} />
      </header>

      <section className={toggleAnswer ? 'show-ans' : ''}>{answer}</section>
    </div>
  );
};

export default Accordion;
