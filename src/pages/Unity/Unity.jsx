import { connect } from 'react-redux';
import ReactGa from 'react-ga';
import { Helmet } from 'react-helmet';

import CourseDetails from '../../components/CourseDetails/CourseDetails';

import { setCourseDetails } from '../../redux/courseActions';

const Unity = ({ dispatch, history }) => {
  let details =
    'Always wondered how games are made? Then this course is for you. This course is designed for people who wants to get started with their game development, AR and VR developemnt journey.';

  let prerequisites = [`Basic knowledge of any programming language`];

  let timelines = [
    {
      head: 'Getting Started',
      lists: [
        'Introduction to Unity',
        'Installing Unity and Visual Studio',
        'Introduction to C#',
        'C# programming basics',
        'Making a terminal hacker game',
      ],
      color: 'purple',
    },
    {
      head: 'Making our first scene',
      lists: [
        `Introduction to Unity's Interface`,
        'Importing assets',
        'Creating a car',
        `Wonder of prefabs`,
        `Colouring our car`,
        `Create your first scene`,
        `Creating our first C# script`,
      ],
      color: 'greenish',
    },
    {
      head: 'Making our Ambulance Rescue game (Windows / Android)',
      lists: [
        'Importing assets',
        'Ambulance Rescue game design',
        'Add your vehicle to the scene',
        'Add your obstacle and reposition it',
        'Running the game with the camera behind',
        'Introducing Rigidbodies',
        'More of Rigidbodies',
        'Introducing Colliders',
        'Introducing Triggers',
        'Rigidbodies and Colliders',
        'Making our first vehicle move',
        'Getting input from the user',
        'Adding obstacles',
        'Adding rigib bodies to objects',
        'Some corrections',
        'Moving our camera',
        'Adding a speed variable',
        'Making our camera follow the vehicle',
        `Unity's physics engine`,
        `Unity's physics cache`,
        `Making our ambulance collect the waypoints`,
        `Time to add some sounds and music`,
        `Cleaning the code and giving finishing touches`,
        `Exporting our game for windows`,
        `Section concludes`,
      ],
      color: 'redish',
    },
    {
      head: `Unity's UI number guessing game (Android)`,
      lists: [
        `Introduction to Unity's UI system`,
        'UI Canvas',
        'UI anchors',
        'Making buttons',
        'Button click the loads scene',
        'Using Tostring()',
        'Using Random.Range()',
        'Making the code for guessing the number',
        'Polishing',
        'Building our game for android',
      ],
      color: 'bluish',
    },
    {
      head: 'Making zombie shooter game (Windows)',
      lists: [
        'Zoombie shooter game design',
        'Adding the first-person controller',
        'Making a prototyping sandbox',
        `Adding Unity's NavMesh Agent AI`,
        'Enemy AI Chase range',
        'Using onDrawGizmosSelected()',
        'Enemy AI attack if provoked',
        'Adding gun to our player',
        'Introduction to raycasting',
        'Enemy health and damage',
        'Implementing a muzzle flash',
        'Creating a shooting hit effect',
        'Introduction to animation controller',
        'Creating a simple animation',
        'Animation transition conditions',
        'Trigger animation in code',
        'Use animation events',
        'Rotate to face the target',
        'Early gameplay loop',
        'Adding a zoombie',
        'Adding terrain and trees',
        'Adding textures',
        'Creating our landscape',
        'Adding props',
        'Adding UI',
        'Making a final gameplay',
        'Polishing',
        'Building for Windows',
      ],
      color: 'yellowish',
    },
    {
      head: 'Introduction to AR and VR',
      lists: [
        'What is AR and VR?',
        'Industry 4.0 and AR/VR as the future',
        'Introduction to practical AR',
        'Introduction to vuforia',
        'Setting up vuforia',
        'Making a image target application with vuforia',
        'What is VR and how we can use different SDKs to create VR content?',
        'Some projects on AR/VR',
        'Conclusion',
      ],
      color: 'purple',
    },
  ];

  let instructor = [
    {
      name: 'Sanchit Sharma',
      expertise: 'Unity Dev (Game/AR/VR)',
      svgName: 'sanchit',
      token: '50ba16ea-6cc5-49bb-87a0-0965f2094438',
      quote: `Developed and published Bladers on Play Store which crossed 100K+ downloads in just 3 months, official Unity Ambassador and a part-time Unity dev coach, my love for games always encourages me to build something new and pass on my knowledge to others. Also won the flagship hackathon organized by IIT Bhubaneswar, twice in a row.`,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Unity Dev (Game Dev/AR/VR) | CodeBae</title>
        <meta
          name='description'
          content='This course gets you started with Game Development and will also introduce to concepts of AR and VR. Unity is one of the most used game engines today....'
        />
      </Helmet>
      <CourseDetails
        courseName='Unity Development (Game / AR / VR)'
        courseDetails={details}
        prerequisites={prerequisites}
        timelines={timelines}
        instructorsInfo={instructor}
        handleClick={async () => {
          await ReactGa.event({
            category: 'Button',
            action: `Unity Button clicked`,
          });
          await dispatch(
            setCourseDetails({
              price: 3799,
              svgName: 'game',
              token: 'bbeceb59-0089-4410-88a5-45731360757b',
              course: 'Unity (Game Dev/AR/VR)',
            })
          );
          history.push('/checkout');
        }}
      />
    </>
  );
};

export default connect()(Unity);
