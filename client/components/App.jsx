import React from 'react'
import AgeTest from './AgeTest'
import ChooseAlc from './ChooseAlc'
import Results from './Results'


class App extends React.Component {

  state = {
    ageTestVisible: true,
    chooseAlcVisible: false,
    resultsVisible: false,
  }

  isEighteen = (isEighteen) => {
    if (isEighteen) {
      this.setState({
        ageTestVisible: false,
        chooseAlcVisible: true,
        resultsVisible: false,
      }) 
    } else alert("you stupid")
  }

  chooseAlcohol = (alc) => {
    this.setState({
      ageTestVisible: false,
      chooseAlcVisible: false,
      resultsVisible: true,
      alcoholChosen: alc,
    })
  }

  render = () => {
    return (
      <>
        {this.state.ageTestVisible && <AgeTest 
        isEighteen={this.isEighteen}/>}

        {this.state.chooseAlcVisible && <ChooseAlc
        chooseAlcohol={this.chooseAlcohol}/>}
        
        {this.state.resultsVisible && <Results
        alcohol={this.state.alcoholChosen}/>}
      </>
    )
  }
}

export default App
