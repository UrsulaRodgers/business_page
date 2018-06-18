import React, {Component} from 'react';
import checkTrade from '../assets/checkatrade.jpg';


class CheckTrade extends Component {
	render (){
		return (
			<div className="checkatrade-ratings">
				<h3 className="checkatrade-ratings__heading">Customer Ratings</h3>
				<a href="http://www.checkatrade.com/" target="_blank" rel="noopener noreferrer">
					<img className="checkatrade-ratings__img" src={checkTrade} alt="CheckaTrade logo"/>
				</a>
			</div>
		);
	}
}

export default CheckTrade;