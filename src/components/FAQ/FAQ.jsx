import Accordion from '../Accordion/Accordion';

import './FAQ.scss';

const FAQ = ({ faqs, home }) => {
  return (
    <section className='faqs'>
      <span>{home ? 'Why Us?' : 'FAQs'}</span>

      <div className='accordion-container'>
        {faqs.map(({ question, answer }, i) => (
          <Accordion question={question} answer={answer} key={i} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
