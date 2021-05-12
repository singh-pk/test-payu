import { useEffect } from 'react';

import BackgroundSvg from '../BackgroundSvg/BackgroundSvg';
import CustomButton from '../CustomButton/CustomButton';
import FAQ from '../FAQ/FAQ';

import './CourseDetails.scss';

const CourseDetails = ({
  courseName,
  courseDetails,
  prerequisites,
  timelines,
  instructorsInfo,
  faqs,
  handleClick,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='course'>
      <section className='course-section-first'>
        {window.innerWidth >= 752 ? (
          <BackgroundSvg
            name='bg-herocoursedetailpage'
            token='e13b6ee8-af42-4ef9-b1fa-04378a466ed5'
          />
        ) : (
          <BackgroundSvg
            name='mobilebgherocoursedetail'
            token='1d7cc7aa-4e7f-43fa-9e6e-e271557964c9'
          />
        )}
        <div>
          <div>{courseName} Bootcamp</div>
          <CustomButton onClick={handleClick}>Enroll Now!</CustomButton>
        </div>
      </section>

      <section className='course-section-second'>
        <div>What you will learn</div>
        <div>{courseDetails}</div>

        <div>Prerequisites</div>
        <ul>
          {prerequisites.map((prerequisite, i) => (
            <li key={i}>{prerequisite}</li>
          ))}
        </ul>
      </section>

      <section className='course-section-third'>
        <span>Course curriculum</span>

        {timelines.map(({ head, lists, color }, i) => (
          <div className={`${color} timeline-wrapper`} key={i}>
            <div className={`timeline`} key={i}>
              <div className='timeline-heading'>{head}</div>
              {lists.map((list, j) => (
                <span key={j}>{list}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className='course-section-fourth'>
        <span>Instructor(s)</span>

        <div className='instructors'>
          {instructorsInfo.map(
            ({ name, expertise, quote, svgName, token }, i) => (
              <div key={i} className='intructor-card-container'>
                <div className='intructor-pic'>
                  <BackgroundSvg name={svgName} token={token} cardSvg />
                </div>

                <div className='instructor-details'>
                  <div>{name}</div>
                  <div>- {expertise}</div>
                  <div>{quote}</div>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {faqs && <FAQ faqs={faqs} />}

      <section className='course-section-fifth'>
        <span>Enroll in this course now!</span>
        <CustomButton onClick={handleClick}>Enroll Now!</CustomButton>
      </section>
    </div>
  );
};

export default CourseDetails;
