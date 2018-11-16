'use strict';
import React, { Component } from 'react';
import _ from 'lodash';

const Stars = (props) => {
	const numberOfStars = 1 + Math.floor(Math.random() * 9);
	let starArr = [];
	for (let i = 0; i < numberOfStars; i++) {
		starArr.push(<i key={i} className="fa fa-star"></i>);
	}
  return (
  	<div className="stars">
      {starArr}
    </div>
    )
}

const Button = (props) => {
	return (
			<div className="buttons">
					<button>=</button>
			</div>
	)
}

const Numbers = ({ selectedNumbers, selectNumber }) => {
	const numberClassName = (number) => {
		if (selectedNumbers.indexOf(number) >= 0) {
			return 'selected';
		}
	}

	return (
			<div className="numbers">
					{Numbers.list.map((number, i) => 
						<span
							key={i}
							className={numberClassName(number)} 
							onClick={() => selectNumber(number)}
						>
							{number}
						</span>
					)}
			</div>
	)
}
Numbers.list = _.range(1, 10);

const Answer = ({ selectedNumbers }) => {
	return (
			<div className="answer">
					{selectedNumbers.map((number, i) => 
						<span key={i}>{number}</span>
						)}
			</div>
	)
}


class Game extends Component {
  state = {
    selectedNumbers: [],
	}

	selectNumber = (clickedNumber) => {
		this.setState(prevState => {
			selectedNumbers:
			prevState.selectedNumbers.concat(clickedNumber)
		})
		}
		
  render() {
    return (
      <div className="container">
        <h3>Play 9 Game</h3>
					<div className="row">
						<Stars />
						<Button />
									<Numbers
										selectedNumbers = {this.state.selectedNumbers}
										selectNumber = {this.selectNumber}
									/>
									<Answer 
										selectedNumbers = {this.state.selectedNumbers} 
									/>
								</div>

            </div>
        )
    }
}

export default Game;