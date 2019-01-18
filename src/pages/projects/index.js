import React, { Component } from 'react';
import PageTitle from '../../components/pageTitle'
import ProjectTile from './projectTile'
import {projectLinks} from './styles.js'
import { page } from '../../styles/Main'


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
        },
        {
          title: "My Portfolio Site",
          href: "/my_site",
        }
      ]
    }
  }
  render() {
    const {allProjects,image} = this.state
    let projects = allProjects.map((el,i) => {
      return <ProjectTile key={i} info={el} />
    })
    return (
      <main style={page.container}>
        <PageTitle title="Projects" />
        <section style={projectLinks}>
          {projects}
        </section>
      </main>
    );
  }
}

export default Projects;
