import React, { Component } from 'react';


class Projects extends Component {
  constructor(props){
    super(props)

    this.state = {
      web: ["http://battleship-tictactoe.herokuapp.com/",
            "",
            "",
            "",
            ],
      git: ["https://github.com/l1ngoman/battleshipbrah",
            "",
            "",
            "",
           ]
    }
  }
  render() {
    let links = 
    return (
      <main>
        <h1>Projects:</h1>
        <hr/>
        {links}
      </main>
    );
  }
}

export default Projects;
