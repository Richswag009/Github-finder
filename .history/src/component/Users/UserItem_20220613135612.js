import React, { Component } from 'react'

export default class UserItem extends Component {
     
  

    render() {
        const{login,avatar,html_url}=this.props.user;
        return (
            <div className='card text-center'>
                <img src={avatar}
                alt=""
                style={{width:'60px'}} 
                className='round-img'/>
                <h3>{login}</h3>
                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1">more</a>
                </div>  
            </div>
        )
    }
}
