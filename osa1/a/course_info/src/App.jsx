const Header =(props) => {
  return (
    <div class = "header">
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  const content = props.content

  return (
    <div class = "content">
      <Part part={content[0].part} exercise={content[0].exercise}/>
      <Part part={content[1].part} exercise={content[1].exercise}/>
      <Part part={content[2].part} exercise={content[2].exercise}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <div class = "parts">
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}

const Total = (props) => {
 const content = props.content
 const total = content[0].exercise + content[1].exercise + content[2].exercise
 return (
  <div class = "total">
    <p>Number of exercise {total}</p>
  </div>
 )
}

const App = () => {
  const course = 'Half Stack application development'
  const content = [
    {part: 'Fundamentals of React', exercise:10},
    {part: 'Using props to pass data', exercise: 7},
    {part: 'State of a component', exercise:14}
  ]

  return (
    <div>
      <Header course={course}/>
      <Content content={content}/>
      <Total content={content} />
    </div>
  )
}

export default App