import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Grid.css'
import Card from './Card.js'
import PopUp from './PopUp.js'
function Grid() {
	const [data, setData] = useState(null)
	const [popUp, setPopUp] = useState(false)
	const [index, setIndex] = useState(null)
	useEffect(() => {
		const getData = async () => {
			const result = await axios('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts')
			setData(result.data)
		}
		getData()
		console.log("I've got the data")
	},[])

	
	if(data)
		return(
		 
			<div>
				{popUp ? <PopUp data = {data[index-1]} closePopUp = {closePopUp}/> : ""}
				<div className = "grid">
					{data.map(x => <Card key = {x.id} data = {x} showPopUp ={showPopUp} />)}
				</div>
			</div>
		)
	else {
		return(<h1> Wait for the page to load ... </h1>)
	}


	function showPopUp(index) {
		setIndex(index)
		setPopUp(true)
	}

	function closePopUp() {
		setPopUp(false)
	}
}


export default Grid;