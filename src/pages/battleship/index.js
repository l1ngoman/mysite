import React, { Component } from 'react';
import PageTitle from '../../components/pageTitle'
import LogoBar from '../../components/logoBar'
import SlideShow from '../../components/slideShow'
import content from '../../content'
import { page } from '../../styles/Main'

class Battleship extends Component {
  render() {
    return (
      <main style={page.container}>
        <PageTitle title="Battleship/TicTacToe" />
        <br/>


        <section id="about">
          <div style={{float: "right"}}>
            <LogoBar 
              type="button" 
              site='bs_t3' 
              logoValues={[0,1]}
              game="true"
              />
          </div>
          <h3 style={page.sectionTitle}>About This Project</h3><br/>
          <p>
            {content.paragraphs.bs_t3}<br/><br/>
          </p>
        </section>

        <section id="battleship">
          <SlideShow side="left" picValues={[0,1,2]}/>
            <h3 style={page.sectionTitle}>
              Battleship
            </h3>
          <br/>
          <p style={page.paragraphWithImg}>
            {content.paragraphs.battleship[0]}
            <br/><br/>
            {content.paragraphs.battleship[1]}
            <br/><br/>
            {content.paragraphs.battleship[2]}
            <br/><br/>
            {content.paragraphs.battleship[3]}
            <br/><br/>
            <LogoBar logoValues={[0,1,4,5]}/>
          </p>
        </section>

        <section id="TicTacToe">
          <SlideShow side="right" picValues={[3,4,5]}/><br/>
          <h3 style={page.sectionTitle}>TicTacToe</h3><br/>
          <p style={page.paragraphWithImg}>
            {content.paragraphs.tictactoe[0]}
            <br/><br/>
            {content.paragraphs.tictactoe[1]}
            <br/><br/>
            {content.paragraphs.tictactoe[2]}
            <br/><br/>
            <LogoBar logoValues={[0,1,4,5]}/>
          </p>
        </section>
      </main>
    );
  }
}

export default Battleship;

