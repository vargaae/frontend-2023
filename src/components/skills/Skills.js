import { Component } from 'react';

class Skills extends Component {
  constructor(){
    super();

    this.state = {
      skills: [{name: 'React', id:'213124ea'},
       {name: 'Angular', id:'113124br'},
       {name: 'NodeJS', id:'313124hg'}],
  }
  }

  render() {
  return (
    <>
      <h2>Skills:</h2>
      {this.state.skills.map((skill) => {
        return <div key={skill.id}><h3>{skill.name}</h3></div>
      })}
 </>   
  );
}
}

export default Skills;
