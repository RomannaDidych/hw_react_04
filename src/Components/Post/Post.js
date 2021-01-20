import React from 'react';
import './post_style.css';


const Post = (props) => {
    return(
	<div className='Post'>
		<div className='head'>			
			<img className='head__avatar' src={props.author.photo}/>			
			<ul className= 'head__inf'>
				<li className= 'head__name'>{props.author.name}</li>
				<li className= 'head__nickName'>{props.author.nickname}</li>
				<li className= 'head__date'> • {props.date}</li>
			</ul>
		</div>
		<div className='content'>
			<p className= 'content__text'>{props.content}</p>
			<img className='content__photo' src={props.image} />
		</div>
	</div>
	)
}

export default Post;