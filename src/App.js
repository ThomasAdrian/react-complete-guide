import React, { Component } from 'react';
//import Radium, {StyleRoot} from 'radium';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { key: 0, name: 'Adrian' , age:50 },
      { key: 1, name: 'Aaron' , age:14 },
      { key: 2, name: 'Heather' , age:41 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('clicked');
    //this.state.persons[0].name = 'Jonny';
    this.setState({
      persons: [
        { name: newName , age:50 },
        { name: 'Zaron' , age:14 },
        { name: 'Zeather' , age:41 }
      ]
    });
  }

  nameChangedHandler = (event, id) => {
  
    const personIndex = this.state.persons.findIndex(p => p.key === id);
    
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons

    });


  }


  togglePersonsHandler = (event, id) => {

    this.setState({
      showPersons: !this.state.showPersons
    });

  }

  deletePersonHandler = (index) => {

    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];

    persons.splice(index, 1);

    this.setState({
      persons: persons
    });

  }


  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
      // ,
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person key={person.key} name= {person.name} age={person.age}
             click={() => this.deletePersonHandler(index)}
             changed={(event) => this.nameChangedHandler(event, person.key)} />
          }

          )}


{/*           <Person
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'AAdrian!!')}
            changed={this.nameChangedHandler}><ul><li>I like fish</li><li>I like my food to touch</li></ul></Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} /> 
 */}
        </div>
        
      );
      style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      //}
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }


    return (
      //<StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p className={classes.join(' ')}>This is really working</p>
{/*         <button
          style={style}
          onClick={() => this.switchNameHandler('ZZdrian!!')}>Switch Name</button>
 */}
        <button
          style={style}
          onClick={() => this.togglePersonsHandler()}>Switch Visibility</button>
        {persons}


      </div>
      //</StyleRoot>
      
    );
    //return React.createElement('div',{ className: 'App'},React.createElement('h1', null, 'Does this work now'));
  }
}

//export default Radium(App);
export default App;
