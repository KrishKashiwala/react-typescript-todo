import React   from 'react'
import { propsData} from './interface'
const FetchApi =  (props : propsData ) => {
	return(
		<div>
			{props.data.map(data => (
				<ul>
				<li style = {{listStyle : "none"}} key = {data.email}>
					"postId" : {data.postId}
				</li>
				<li style = {{listStyle : "none"}} key = {data.email}>
					"id" : {data.id}
				</li>
				<li style = {{listStyle : "none"}} key = {data.email}>
					"Body" : {data.body}
				</li>
				<li style = {{listStyle : "none"}} key = {data.email}>
				"Name" : 	{data.name}
				</li>
				<li style = {{listStyle : "none"}} key = {data.email}>
					 "email":{data.email}
				</li>
				</ul>
			))}
		</div>
	)
}
export default FetchApi