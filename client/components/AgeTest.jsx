import React from 'react'

class AgeTest extends React.Component {

  render () {
    return (
      <>
        <div className="age-test-center-div">
          <h1 className="card-title"> Are You Over 18? </h1>
          <div className="button-container">
            <button onClick={() => this.props.isEighteen(true)} className="age-test-button">Yes</button> 
            <button onClick={() => this.props.isEighteen(false)} className="age-test-button">No</button> 
          </div>
        </div>
      </>
    )
  }
}


export default AgeTest