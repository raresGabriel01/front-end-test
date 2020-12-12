import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Grid.css'
import Card from './Card.js'
function Grid() {
	const [data, setData] = useState([])

	useEffect(() => {
		const getData = async () => {
			const result = await axios('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts')
			setData(result.data)
		}
		getData()
	},[])

	

	return(
		<div className = "grid">
			{data.map(x => <Card key = {x.id} data = {x}/>)}
		</div>

	)
}


export default Grid;