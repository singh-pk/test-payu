import { connect } from 'react-redux';
import ReactGa from 'react-ga';
import { Helmet } from 'react-helmet';

import CourseDetails from '../../components/CourseDetails/CourseDetails';

import { setCourseDetails } from '../../redux/courseActions';

const FullStackDevelopment = ({ dispatch, history }) => {
  let details = `This course will teach you everything you need to become an awesome
  developer. We will learn everything from basics to advanced in very
  minute details, so you actually know the logic behind every single
  line, you code and stay away from gibberish code. The course is specifically designed for begineers who want to start their development journey and people who have some basic knowledge about development but want to level up and build large scalable applications. We will follow project based learning approach and do hand-ons on the topics covered on a regular basis, and also build large scalable applications like a Social Media App`;

  let prerequisites = [`There is no prerequisite to take this course`];

  let timelines = [
    {
      head: 'Environment Set-up',
      lists: [
        'Installing Visual Studio Code',
        'Installing NodeJS',
        'Installing GIT',
        'Installing YARN',
        'Installing necessary extensions',
        'Adding themes in VS Code',
      ],
      color: 'purple',
    },
    {
      head: 'Introduction to Web Development',
      lists: [
        'Introduction to the Web',
        'How the web works',
        'How browser implements code',
      ],
      color: 'greenish',
    },
    {
      head: 'HTML',
      lists: [
        'Introduction to HTML',
        'HTML without boilerplate code, why it works & why not to use it',
        'HTML boilerplate',
        'DOCTYPE and version control',
        'HEAD and BODY tag and their difference',
        'Title, meta & link tags',
        'What are tags, elements and attributes',
        'Heading, paragraph, list tags',
        'Self closing tags',
        'Image, anchor tags',
        'Semantic elements and why they are important',
        'Comment in HTML',
        'Accessibility & its importance',
        'Block level and inline elements',
        'Hr, sup, sub, br tags & HTML entities (symbols)',
        'Emmets',
        'Tables - table, tr, td, th, thead, tbody, tfoot, rowspan, colspan',
        `Forms - input, type, placeholders, labels, buttons, name, url encoding, get, post, checkboxes, radio buttons, select, range, text area, validations, required, autofocus, min, max, minLength, maxLength, pattern`,
      ],
      color: 'redish',
    },
    {
      head: 'DevTools',
      lists: [
        'Introduction to DevTools & its importance in your regular development routine',
      ],
      color: 'bluish',
    },
    {
      head: 'CSS',
      lists: [
        'Introduction to CSS',
        'Different ways to write CSS in a web document & their tradeoffs',
        'CSS Properties',
        'Color & background-color',
        'Different color options in CSS',
        'Styling text',
        'CSS selectors - element, universal, id, class, descendent, combinator, direct child, attribute, pseudo class, pseudo elements',
        'Cascading style rules & Specificity',
        'Inheritance in CSS',
        'CSS Box Model',
        'Opacity & Alpha',
        'CSS Transitions & Animations',
        'Responsive Design & its importance',
        'Flex & Grid',
        'Media Queries',
        'Types of CSS units',
      ],
      color: 'yellowish',
    },
    {
      head: 'JavaScript',
      lists: [
        'Introduction to JavaScript',
        'Different ways to write JavaScript in a web document & their tradeoffs',
        'Data Types',
        'Values & Variables',
        'Operators',
        'NaN',
        'String & String Literals',
        'Type Conversion and Coersion',
        'Control flow (if ... else, ternary operator, switch)',
        'Console, alert, prompt',
        'Comparision Operators',
        'Truthy and Falsy Values',
        'Logical AND, OR, NOT',
        'Strict Mode',
        'ES6+',
        'Functions & Arrow Functions',
        'Array & Objects',
        'Looping in JS',
        'Default & Rest params, Spread Operator, Destructuring',
        'Scope',
        'this keyword in JS',
        'Debugger',
        'Module',
      ],
      color: 'purple',
    },
    {
      head: 'DOM',
      lists: [
        'Introduction to DOM',
        'Exploring DOM APIs',
        'Changing value by using attributes',
        'Traversing the DOM',
        'Introduction to DOM events',
        'Exploring DOM events',
        'jQuery',
      ],
      color: 'greenish',
    },
    {
      head: 'Ajax & APIs',
      lists: [
        'Introduction to Ajax',
        'Introduction to API',
        'What is JSON',
        'XHR',
      ],
      color: 'redish',
    },
    {
      head: 'NodeJS',
      lists: [
        'Introduction to NodeJS',
        'REPL',
        'Exploring NodeJS core modules',
      ],
      color: 'bluish',
    },
    {
      head: 'Package Manager',
      lists: [
        'Introduction to Package Manager',
        'Introduction to npm & yarn',
        'Managing packages in your project',
      ],
      color: 'yellowish',
    },
    {
      head: 'ExpressJS + MongoDB + Postman',
      lists: [
        'Introduction to ExpressJS',
        'Writing your first server',
        'Controllers, Routes',
        'Introduction to MongoDB & Mongoose',
        'Adding Database to our Project',
        'Adding Models',
        'Introduction to Postman',
        'Testing our APIs using Postman',
        'What are Middlewares',
        'Deep dive into RESTful Routing (HTTP verbs & CRUD operations)',
        'Authorization & Authentication',
        'Server-side Validations',
        'Handling Errors & Helper Methods',
        'Cookies & Sessions',
      ],
      color: 'purple',
    },
    {
      head: 'Single Page Application',
      lists: [
        'Problems faced in developing applications',
        'How jQuery solved them',
        'Need of a different approach',
        'Introduction of SPA',
        'How SPA works',
      ],
      color: 'greenish',
    },
    {
      head: 'React',
      lists: [
        'Introduction to React',
        'DOM vs Virtual DOM vs Shadow DOM',
        'Imperative vs Declarative',
        'Components Architecture',
        'One-way data flow',
      ],
      color: 'redish',
    },
    {
      head: 'Getting started with React',
      lists: [
        'Create React App',
        'JSX',
        'Class & Functional components',
        'Lifecycle Methods',
        'API call handling (fetch & axios)',
        'Reusable Components',
        'State & Props',
        'Asynchronous setState',
        'Routing',
        'Refs',
      ],
      color: 'bluish',
    },
    {
      head: 'CSS Preprossesors',
      lists: [
        'Introduction to Sass',
        'Sass in our application',
        'Functions, conditions, variables in Sass',
        'Maintaining your applications stylesheet efficiently',
      ],
      color: 'yellowish',
    },
    {
      head: 'Redux',
      lists: [
        'Introduction to Redux',
        'Redux Concepts',
        'Using Redux in our application',
        'Redux Middlewares',
        'Selectors',
        'Redux Thunk',
        'Redux Saga',
        'Redux Persist',
      ],
      color: 'purple',
    },
    {
      head: 'Static content & Browser Storage Options',
      lists: [
        'Handling Images - Different techniques & their tradeoffs',
        'Cookies',
        'Web Storage',
        'IndexedDB',
        'Cache',
      ],
      color: 'greenish',
    },
    {
      head: 'Static content & Browser Storage Options',
      lists: [
        'Handling Images - Different techniques & their tradeoffs',
        'Cookies',
        'Web Storage',
        'IndexedDB',
        'Cache',
      ],
      color: 'redish',
    },
    {
      head: 'React Hooks',
      lists: [
        'Introduction to React Hooks',
        'React Hooks in our application',
        'Exploring different hooks api',
        'Context API',
      ],
      color: 'bluish',
    },
    {
      head: 'Other tools and concepts',
      lists: ['CSS-in-JS', 'Higher Order Components', 'Container Pattern'],
      color: 'yellowish',
    },
    {
      head: 'React Performance',
      lists: [
        'Code Splitting',
        'React Lazy + Suspense',
        'Error Boundaries',
        'useCallback & useMemo',
      ],
      color: 'purple',
    },
  ];

  let instructor = [
    {
      name: 'Pratik Kumar Singh',
      expertise: 'Founder, CodeBae',
      svgName: 'pk',
      token: '163cb66c-bd24-4fde-bd35-d3b9e70ac342',
      quote: `There is no competition once we start working consistently towards our goal.`,
    },
  ];

  let faqs = [
    {
      question: 'Our goal',
      answer:
        'Our goal is to make good developer who can take on the world of development by a storm after taking this course. Who can understand how to write good code, compare tradeoffs between different scenarios & come to a conclusion. Who can go and read an official documentations as if it is a story book.',
    },
    {
      question: 'Projects that we will work on',
      answer:
        'We will do daily hands-on projects on the topics covered. Moreover, we will go out the in open sea and discover various tools and Apis present and make projects from them. For example, on a lovely evening, we can start exploring WebRTC and make a Google Meet clone, or look on different maps apis available and implement Maps on one of our projects. Project based learning is the based approach anyone can adapt. We will make a Social Media Network as one of our main project using all industry standard tools and technologies.',
    },
    {
      question:
        'I am a beginner or I have some experience already, can I apply',
      answer:
        ' This course is designed both for begineers and people who have some exposure to development and want to take their skill to the next level',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Full Stack Development | CodeBae</title>
        <meta
          name='description'
          content='The full stack development bootcamp is designed for both beginners and people who have a bit of an experience in development and want to take their skill to the next level.'
        />
      </Helmet>
      <CourseDetails
        courseName='Full Stack Development'
        courseDetails={details}
        prerequisites={prerequisites}
        timelines={timelines}
        instructorsInfo={instructor}
        faqs={faqs}
        handleClick={async () => {
          await ReactGa.event({
            category: 'Button',
            action: `Full Stack Button clicked`,
          });
          await dispatch(
            setCourseDetails({
              price: 2999,
              svgName: 'full-stack',
              token: '667515ff-d810-422a-9120-3486bb6df413',
              course: 'Full Stack Development',
            })
          );
          history.push('/checkout');
        }}
      />
    </>
  );
};

export default connect()(FullStackDevelopment);
