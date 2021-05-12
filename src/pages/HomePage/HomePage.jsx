import { connect } from 'react-redux';
import ReactGa from 'react-ga';
import { Helmet } from 'react-helmet';

import BackgroundSvg from '../../components/BackgroundSvg/BackgroundSvg';
import Cards from '../../components/Cards/Cards';
import GlassedCards from '../../components/GlassedCards/GlassedCards';
import FAQ from '../../components/FAQ/FAQ';

import './HomePage.scss';
import { setCourseDetails } from '../../redux/courseActions';

const HomePage = ({ history, dispatch }) => {
  const glassedCards1 = [
    {
      head: 'Learn while your create',
      body:
        'You learn while creating which is one of the best ways to learn programming. This helps you to clear your concepts and help you grow constantly',
      color: 'purple',
    },
    {
      head: 'Growth due to like-mindedness',
      body:
        'You visit some like minded peers that motivates you to push your boundaries and work harder toward your goals',
      color: 'green',
    },
  ];

  const glassedCards2 = [
    {
      head: 'Live mentor support',
      body: `You get live mentor support to help you when you get stuck so that you don't quit just yet. This helps to keep you going and improve your skill-set in a massive way`,
      color: 'yellow',
    },
    {
      head: 'All this while saving a lots of time',
      body:
        'Time is costly, and learning thing by yourself takes time. Bootcamps provide you a proper roadmap and guidance that helps you to save a lot of time',
      color: 'orange',
    },
  ];

  const courses = [
    {
      name: 'Full Stack Development',
      oldPrice: 5999,
      newPrice: 2999,
      discount: 50,
      handleEnrollClick: async () => {
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
      },
      handleDetailsClick: () => history.push('/fullStackDevelopment'),
      svgName: 'full-stack',
      token: '667515ff-d810-422a-9120-3486bb6df413',
    },
    {
      name: 'Machine Learning',
      oldPrice: 3499,
      newPrice: 1299,
      discount: 63,
      handleEnrollClick: async () => {
        await ReactGa.event({
          category: 'Button',
          action: `ML Button clicked`,
        });
        await dispatch(
          setCourseDetails({
            price: 1299,
            svgName: 'ml',
            token: '4b3ea6ce-ee42-4e77-951d-a84999ec0bd7',
            course: 'Machine Learning',
          })
        );
        history.push('/checkout');
      },
      handleDetailsClick: () => history.push('/ml'),
      svgName: 'ml',
      token: '4b3ea6ce-ee42-4e77-951d-a84999ec0bd7',
    },
    {
      name: 'Unity (Game Dev/AR/VR)',
      oldPrice: 7999,
      newPrice: 3799,
      discount: 53,
      handleEnrollClick: async () => {
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
      },
      handleDetailsClick: () => history.push('/unity'),
      svgName: 'game',
      token: 'bbeceb59-0089-4410-88a5-45731360757b',
    },
  ];

  let whyUs = [
    {
      question: 'Project Based Learning',
      answer: `You learn to code when you actually code. We follow a project based learning system, doing daily hands-on and making some really cool projects.`,
    },
    {
      question: 'Do we get certificate of completion',
      answer: `We do offer certificate on successful completion of the course, but certificates should not be the reason of you being here. You should be here to get awesome with your skills. You can get a chance to work at CodeBae, if you perform well in the bootcamp.`,
    },
    {
      question: 'Get access to amazing peers',
      answer: `Get lifetime access to our community. Solve your doubts, watch movies, play games, network with amazing set of people, meet like minded people who help you push yourself and much more.`,
    },
  ];

  return (
    <>
      <Helmet>
        <meta
          name='description'
          content='CodeBae is focused on bring the best development course possible. Most the courses out their are either incomplete or not properly explained, leaving developers to learn development the hard way. We focus on project based learning and covering as much content as possible, so that you can actually apply your knowledge in real life, start earning or solve some problems out there.'
        />
      </Helmet>
      <div className='homepage'>
        <section className='homepage-section-first'>
          {window.innerWidth >= 752 ? (
            <>
              <BackgroundSvg
                name='bg-hero-mainpage'
                token='d0ddd6fe-622b-49d0-b482-ab1bb7c4770a'
              />
              <BackgroundSvg
                name='character-left'
                token='2e953e97-fa20-4d88-820b-a1e06979de72'
                characterLeft
              />
              <BackgroundSvg
                name='character-right'
                token='6c9c9af1-afbd-44ef-a6d6-3a782eec4f03'
                characterRight
              />
            </>
          ) : (
            <BackgroundSvg
              name='mobilebg-hero'
              token='08a8dc7c-189a-4977-8ada-24e8fece6eca'
            />
          )}

          <div>
            <div>Learn code the right way!</div>
            <div>
              Code it, like you understand it.
              <br />
              <span>The Bootcamp starts from 1st week of June, 2021</span>
            </div>
          </div>
        </section>

        <section className='homepage-section-second'>
          <span>Courses</span>

          <div className='card-container'>
            {courses.map(
              (
                {
                  name,
                  oldPrice,
                  newPrice,
                  discount,
                  handleEnrollClick,
                  handleDetailsClick,
                  svgName,
                  token,
                },
                i
              ) => (
                <Cards
                  key={i}
                  name={name}
                  oldPrice={oldPrice}
                  newPrice={newPrice}
                  discount={discount}
                  handleDetailsClick={handleDetailsClick}
                  handleEnrollClick={handleEnrollClick}
                  svgName={svgName}
                  token={token}
                />
              )
            )}
          </div>
        </section>

        <section className='homepage-section-third'>
          <BackgroundSvg
            name='bg-benifitsyouget'
            token='47e86a8a-3f5e-481c-994d-33f33cc56b42'
          />

          <span>Benefits of Joining a Bootcamp</span>

          <div className='glassed-card-container'>
            <div>
              {glassedCards1.map(({ head, body, color }, i) => {
                return (
                  <GlassedCards head={head} body={body} color={color} key={i} />
                );
              })}
            </div>

            <div>
              {glassedCards2.map(({ head, body, color }, i) => {
                return (
                  <GlassedCards head={head} body={body} color={color} key={i} />
                );
              })}
            </div>
          </div>
        </section>

        <FAQ faqs={whyUs} home />
      </div>
    </>
  );
};

export default connect()(HomePage);
