import React from 'react'

class ChooseAlc extends React.Component {

  render () {
    return (
      <>
        <div className="age-test-center-div">
          <h1 className="card-title"> Choose your poison </h1>
          <div className="button-container">
            <button onClick={() => this.props.chooseAlcohol("Tequila")} className="age-test-button">Tequila</button> 
            <button onClick={() => this.props.chooseAlcohol("Vodka")}   className="age-test-button">Vodka</button> 
            <button onClick={() => this.props.chooseAlcohol("Gin")}     className="age-test-button">Gin</button> 
            <button onClick={() => this.props.chooseAlcohol("Whiskey")} className="age-test-button">Whiskey</button> 
            <button onClick={() => this.props.chooseAlcohol("Rum")}     className="age-test-button">Rum</button> 
          </div>
        </div>
      </>
    )
  }
}


export default ChooseAlc