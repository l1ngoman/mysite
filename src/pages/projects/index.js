import React, { Component } from 'react';
import PageTitle from '../../components/pageTitle'
import position from '../../styles/Positioning'
import ProjectTile from './projectTile'
import {projectLinks} from './styles.js'

class Projects extends Component {
  constructor(props){
    super(props)

    this.state = {
      allProjects: [
        {
          title: "Own-Up Grown-Up",
          href: "/own_up",
        },
        {
          title: "Battleship/ TicTacToe",
          href: "/battleship",
        },
        {
          title: "Nasa NEO API",
          href: "/nasa_neo",
        },
        {
          title: "Credential Checker",
          href: "/cred_check",
        }
      ]
    }
  }
  render() {
    const {allProjects,image} = this.state
    let projects = allProjects.map((el,i) => {
      return <ProjectTile key={i} info={el} />
    })
    console.log(projects)
    return (
      <main style={position.y}>
        <PageTitle title="Projects" />
        <section style={projectLinks}>
          {projects}
        </section>
        
      </main>
    );
  }
}

export default Projects;
