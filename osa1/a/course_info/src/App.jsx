const Header =(props) => {
  return (
    <div class="header">
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  const content = props.content
  const formattedContent = content.map(value =>
    value.name + ' ' + value.exercise
  )
const [first,second,third] = formattedContent
  return (
    <div class="parts">
      <p>{first}</p>
      <p>{second}</p>
      <p>{third}</p>
    </div>
  )
}

const Total = (props) => {
  const sum = props.content.reduce((acc, count) => acc + count.exercise, 0);
 return (
  <div class="total">
    <p>Number of exercises {sum}.</p>
  </div>
 )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using Props to pass data',
        exercise: 7
      },
      {
        name: 'State of component',
        exercise: 14
      }
    ]
  }

  return (
    <div class="container">
      <Header course={course}/>
      <Content content={course.parts}/>
      <Total content={course.parts} />
    </div>
  )
}

export default App