import React from 'react';
import './Card.css'
function Card(props) {
	console.log(props)
	let ms = parseInt(props.data.date)
	
	let date = (new Date(ms)).toLocaleString()
	
	let formatedDate = format(date)
	
	/*
	
		----------------> I don't actually understand the date format that is given by the API

		Initially, i thought it was a TIMESTAMP

		But it returns 19 January, 1970 instead of 25November 2020
		I'm really confused right now

	*/
	return (
				
		<div className="card" onMouseEnter = {learnMore}>
			
			<div className = "smallThumbnail" style={{backgroundImage: `url(${props.data.thumbnail.small})`}} id={`img${props.data.id}`}> </div>
			
			<div className = "ball blue"> </div>
			<div className = "ball yellow"> </div>
			<h2 className="cardTitle"> {props.data.title} </h2>
			<p className = "cardText"> {props.data.content} </p>
			<span className = "cardAuthor"> {props.data.author.name} - {props.data.author.role} </span>
			<span className = "cardDate"> {formatedDate} </span>
		</div>

	)

	function learnMore(e) {

		console.log(e.target)
	}

	function format(date) {

		let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

		let x = date.split(',')[0];
		x = x.split('/')
		x[0] = months[x[0]-1]
		return `${x[0]} ${x[1]}, ${x[2]}`

	} 
	

}


export default Card;