import React, {useState,useEffect} from 'react';
import './Card.css'

function Card(props) {
	
	const [hovered, setHovered] = useState(false)
	

	let timestamp = parseInt(props.data.date)
	let date = (new Date(timestamp * 1000)).toLocaleString()
	let formatedDate = format(date)
	


	return (
				
		<div className="card" onMouseEnter = {learnMore} onMouseLeave = {learnLess} onClick ={() => {console.log(props.data.id); props.showPopUp(props.data.id)}}>
			
			<div className = "smallThumbnail" style={{backgroundImage: `url(${props.data.thumbnail.small})`,
													  boxShadow: hovered ? "inset 0 0 0 1000px rgba(0,0,0,.5)" : "none"}} 
													  id={`img${props.data.id}`}> 

				{hovered?<span className="learnMore">Learn more</span>:""}
			</div>
			
			<div className = "ball blue"> </div>
			<div className = "ball yellow"> </div>
			<h2 className="cardTitle"> {props.data.title} </h2>
			<p className = "cardText"> {props.data.content} </p>
			<span className = "cardAuthor"> {props.data.author.name} - {props.data.author.role} </span>
			<span className = "cardDate"> {formatedDate} </span>

		</div>

	)

	

	function learnMore(e) {
		setHovered(true)
	}

	function learnLess(e) {
		setHovered(false)
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