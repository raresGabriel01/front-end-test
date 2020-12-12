import React from 'react'
import './PopUp.css'
function PopUp(props) {
	
	return(
		<div className="cover">
			<div className="popUp">
				<div className="topBar">
					<span onClick = {props.closePopUp} className="exit"> X </span>
				</div>
				<img src = {props.data.thumbnail.large} alt="" className="bigThumbnail"/>
				<h2 className="title"> {props.data.title} </h2>
				<p className="text"> {props.data.content} </p>
				{
					props.data.author.avatar ? <img src ={props.data.author.avatar} alt ='avatar_autor' className ="avatar"/> : ""
				}
				<span className="author"> {props.data.author.name} </span>
			</div>
		</div>
	)
}

export default PopUp;