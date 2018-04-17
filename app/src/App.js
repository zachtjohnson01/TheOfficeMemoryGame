import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import ScoreBoard from "./components/ScoreBoard";
import Title from "./components/Title";
import Card from "./components/Card";
import office from "./office.json"
import Footer from "./components/Footer";

class App extends Component {
  state = {
      message: `Select a Character`,
      newScore: 0,
      topScore: 0,
      shuffle: true,
      cards: office,
      nonselectedcharacters: office
  }

  shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  // toggles shuffle animation for cards
  toggleAnimations = () => {
      this.setState({
          shuffle: !this.state.shuffle
      })
  }

  detectionAlert = name => {
    // checks whether or not this character is still available to be clicked
    const guessCharacter = this.state.nonselectedcharacters.find(character => character.name === name);

    if(guessCharacter === undefined) {
        // failure
        this.setState({ 
            message: `Already Selected...Start Over`,
            newScore: 0,
            topScore: (this.state.newScore > this.state.topScore) ? this.state.newScore : this.state.topScore,
            cards: office,
            nonselectedcharacters: office
        });
    }
    else {
        // success
        const onTheLam = this.state.nonselectedcharacters.filter(character => character.name !== name);
        
        this.setState({ 
            message: `Success - Select Another`,
            newScore: this.state.newScore + 1,
            cards: office,
            nonselectedcharacters: onTheLam
        });
    }
    // randomize layout of character cards between clicks
    this.shuffleArray(office);
    this.toggleAnimations();
  };

  render() {
    return (
      <Wrapper>
        <ScoreBoard message={this.state.message}
                    newScore={this.state.newScore}
                    topScore={this.state.topScore} />
        <Title />
        {
            this.state.cards.map(character => {
                return <Card 
                key={character.id}
                name={character.name}
                image={character.image}
                detectionAlert={this.detectionAlert} 
                // newScore={this.state.newScore}
                shuffle={this.state.shuffle}
                />
            })
        }
        <Footer/>
      </Wrapper>
    )
  }
};

export default App;