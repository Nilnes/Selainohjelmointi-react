//Kaikki komponentit pidetään erillään 

const Header = (props) => ( //Välitetään propsien avulla 
  <div>
    <h1>{props.name}</h1>
  </div>
)


//"functional component" -> Saa dataa propsien kautta, palauttaa <p> elementin
//Palautus on se, mikä tulee nuolen jälkeen, koska lyhyt lause ei tarvita return
const Part = (props) => (
    <p>{props.part} {props.exercises}</p>
)


// Tämä on "content component"
// Komponenteille välitetään dataa propsien avulla
// Tässä käytetään aiempaa funktionaalista komponenttia "Part"
const Content = (props) => { 
  console.log(props)
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} /> 
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  const total = props.exercises1 + props.exercises2 + props.exercises3
  return (
    <div>
      <p>Number of excercises {total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      <Content 
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
        />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}
      />
    </div>
  )
}


export default App