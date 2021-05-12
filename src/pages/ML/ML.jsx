import { connect } from 'react-redux';
import ReactGa from 'react-ga';
import { Helmet } from 'react-helmet';

import CourseDetails from '../../components/CourseDetails/CourseDetails';

import { setCourseDetails } from '../../redux/courseActions';

const ML = ({ dispatch, history }) => {
  let details =
    'This course is aimed for both begineers and who are doing Machine Learning for sometime but want to take their skill to the next level. Starting from the very basics of Python to hosting your own Machine Learning service on the web, after taking this course, you can start your own online service or go try your hands something innovative by grabbing that job/internship in the company you always wanted.';

  let prerequisites = [`There is no prerequisite to take this course`];

  let timelines = [
    {
      head: 'Need of Python as a programming language',
      lists: [
        'Wide Library and Framework Support',
        'Supportive Open Source Community',
        'Fast and ease of learning',
        'Efficient and Robust for basic to complex problem solving',
        'Procedural, Object Oriented and Generic Programming Support',
      ],
      color: 'purple',
    },
    {
      head: 'Why Python?',
      lists: [
        'Fastest-growing programming language in the world',
        'Versatility, Efficiency, Reliability, and Speed',
        'Used in almost all domains of Development - Web, App, Cloud Big Data, Security and Data Science',
        `Best match for Machine Learning - also known as ‘King of Data Science.’`,
      ],
      color: 'greenish',
    },
    {
      head: 'Python Interpreter and Environment',
      lists: [
        'Introduction to Commands and Command Line Tools',
        'Python Interpreter and its applications',
        'Setting up our environment',
        'Interfacing with Python',
      ],
      color: 'redish',
    },
    {
      head: 'Python as a both Object Oriented and Procedural language',
      lists: [
        'Difference between Object Oriented and Procedural languages',
        'Python as a procedural language',
        'Python as an object oriented language',
        'Classes and Objects',
      ],
      color: 'bluish',
    },
    {
      head: 'Anaconda - Python Distributor',
      lists: [
        'Installation of Anaconda',
        'Anaconda Environments',
        'Anaconda commands',
        'Anaconda Navigator & Shell',
      ],
      color: 'yellowish',
    },
    {
      head: 'Memory Management in Python',
      lists: [
        'Concept of Physical Memory and Addresses',
        'Pointer Variables',
        'Garbage Collection in Python',
        'Difference between C-Python & I-Python Notebook',
      ],
      color: 'purple',
    },
    {
      head: 'Control flow and Loops',
      lists: [
        'Control flow Conditionals',
        'Loops - for and while',
        'Nested Loops',
        'Iterator and Generators',
      ],
      color: 'greenish',
    },
    {
      head: 'Python Functions - Built in and User defined',
      lists: [
        'Built in vs User Defined Functions',
        'Parameters',
        'Call by Reference',
        'Functional Arguments',
      ],
      color: 'redish',
    },
    {
      head: 'Data Structures in Python',
      lists: [
        'Strings',
        'Lists and Sequences',
        'Tuples',
        'Sets',
        'Dictionaries',
      ],
      color: 'bluish',
    },
    {
      head: 'OOPS and Exceptional Handling',
      lists: [
        'Methods',
        'Inheritance',
        'Polymorphism',
        'Data Abstraction',
        'Encapsulation',
      ],
      color: 'yellowish',
    },
    {
      head: 'Python Scripts and CLI',
      lists: ['Scripting & Automation using Python'],
      color: 'purple',
    },
    {
      head: 'Numpy Introduction',
      lists: [
        'Getting familiar with DataFrames',
        'Understanding Series, Zip & Enumerate',
        'Array Shapes and Axes',
        'Masking and Filtering',
      ],
      color: 'greenish',
    },
    {
      head: 'Core concepts of Numpy',
      lists: [
        'Structured Arrays',
        'Vectorization',
        'Broadcasting',
        'Transposing, Sorting, and Concatenating. Installing NumPy With pip',
        'Object creation',
        'How to use Sorting , Ranking and Dropping',
        'Utilizing Groupby and Group Manipulation',
      ],
      color: 'redish',
    },
    {
      head: 'Pandas Introduction',
      lists: ['Series', 'DataFrame', 'Panel'],
      color: 'bluish',
    },
    {
      head: 'Core concept of Pandas',
      lists: [
        'Understanding Merge, Multi indexing, Unstacking',
        'Reading files with different format using pandas',
        'Selection',
        'Getting data',
        'Operations',
      ],
      color: 'yellowish',
    },
    {
      head: 'Matplotlib Visualizations',
      lists: [
        'Installation',
        'IPython integration',
        'Interactive mode',
        'Introduction to Plots',
        'Intermediate / Advanced Plots',
        'Colors',
        'Text',
      ],
      color: 'purple',
    },
    {
      head: 'Seaborn and Plotly',
      lists: [
        'Installation',
        'Normal Distribution',
        'Binomial Distribution',
        'Poisson Distribution',
        'Uniform Distribution',
        'Advanced Visualization',
      ],
      color: 'greenish',
    },
    {
      head: 'Statistics for ML',
      lists: [
        'Statistics in Data Preparation',
        'Statistics in Model Evaluation',
        'Statistics in Model Selection',
        'Statistics in Model Presentation',
        'Descriptive Statistics',
        'Inferential Statistics',
        'Mean, Mode, Variance, Standard Deviation',
        'Correlation',
        'Hypothesis test',
        'Estimation Statistics',
        'Non parametric Statistics',
      ],
      color: 'redish',
    },
    {
      head: 'Deep Dive into Data - Preprocessing',
      lists: [
        'Checking out the missing values',
        'See the Categorical Values',
        'Splitting the data-set into Training and Test Set',
        'Feature Scaling',
      ],
      color: 'bluish',
    },
    {
      head: 'Exploratory Data Analysis',
      lists: [
        'Univariate Analysis',
        'Multivariate Analysis',
        'Measure of Central Tendency (mean , median , mode)',
        'Outlier Detection and its solution',
      ],
      color: 'yellowish',
    },
    {
      head: 'Feature Engineering and Data Preparation',
      lists: [
        'Imputation',
        'Handling Outliers',
        'Binning',
        'Log Transform',
        'One-Hot Encoding',
        'Grouping Operations',
        'Feature Split',
        'Scaling',
        'Extracting Date',
      ],
      color: 'purple',
    },
    {
      head: 'Feature Selection',
      lists: [
        'What is Feature Selection',
        'Why should we select features',
        'Procedure for Feature Selection',
        'Filter methods',
        'Embedded methods',
        'Wrapper methods',
      ],
      color: 'greenish',
    },
    {
      head:
        'Machine Learning Algorithms - Supervised, Unsupervised and Semi-Supervised',
      lists: [
        'Supervised Algorithms - Introduction to Supervised ML',
        'Classification & Regression Problems',
        'Linear Regression',
        'Logistic Regression',
        'Ordinary Least Squares',
        'Classification',
        'K-NN (k nearest neighbors)',
        'Decision Trees - Classification & Regression',
        'Support Vector Machines',
        'Unsupervised Algorithms - Clustering & Association Problems',
        'Hierarchical clustering',
        'K-means clustering',
        'Principal Component Analysis',
      ],
      color: 'redish',
    },
    {
      head: 'Sci-Kit Learn',
      lists: [
        'Introduction to Sci-Kit learn',
        'Cluster based Modelling',
        'Cross Validation',
        'K-fold Cross Validation',
        'Dimensionality Reduction',
        'Ensemble methods - Combine the predictions of multiple supervised models',
        'Feature extraction in Sci-Kit Learn',
        'Feature selection in Sci-Kit Learn',
        'Parameter Tuning',
        'Manifold Learning',
        'Supervised Models - Linear models, Discriminant Analysis, Naive Bayes, Lazy Methods, Support Vector Machines and Decision Trees',
      ],
      color: 'bluish',
    },
    {
      head: 'XG-Boost',
      lists: [
        'Introduction to XG-Boost',
        'Gradient Boost',
        'XG-Boost Parameters',
        'Tuning and Accuracy',
      ],
      color: 'yellowish',
    },
    {
      head: 'ML Application Deployment - Streamlit Framework & Heroku - PaaS',
      lists: [
        'Model Deployment - Web App',
        'Streamlit Framework',
        'Client Side Deployment with Heroku - Platform as a Service',
        'Custom Endpoints',
      ],
      color: 'purple',
    },
    {
      head: 'Machine Learning over Cloud - MLaaS',
      lists: [
        'Introduction to Cloud Computing',
        'Machine Learning as a Service',
        'Comparing different cloud service providers and their ML services',
        'Auto Tuning and Retraining of models',
      ],
      color: 'greenish',
    },
    {
      head: 'Introduction to Neural Networks - Core Concepts',
      lists: [
        'Why Neural networks?',
        'Neuron Architecture',
        'Weighted Approach',
        'Neural Networks Architecture',
        'Intermediate Neural Network Model Problem',
      ],
      color: 'redish',
    },
  ];

  let instructor = [
    {
      name: 'Pranav Shekhar',
      expertise: 'ML, DevOps & Cloud',
      svgName: 'pranav',
      token: '25d55c64-f797-42e2-a06c-ccb2dac1c729',
      quote: `Developing since 2018 with a natural inclination towards learning new solutions and technologies everyday.`,
    },
    {
      name: 'Chandan Singh',
      expertise: 'Data Science',
      svgName: 'chandan',
      token: '51d2287b-af93-4ac5-b338-67d293fbf295',
      quote: `Anyone can write code that a computer can understand. Good programmers write code that humans can understand.`,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Machine Learning | CodeBae</title>
        <meta
          name='description'
          content='This course is designed for anyone who want to start their career in Machine Learning or Data Science.'
        />
      </Helmet>
      <CourseDetails
        courseName='Machine Learning'
        courseDetails={details}
        prerequisites={prerequisites}
        timelines={timelines}
        instructorsInfo={instructor}
        handleClick={async () => {
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
        }}
      />
    </>
  );
};

export default connect()(ML);
