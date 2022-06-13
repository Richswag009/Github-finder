import React, { Component } from 'react'

export default class Search extends Component {
state={
    text:''
};

    render() {
        return (
            <div>
                <form action="" className="form">
                    <input type="text" name='text' placeholder='Search users' />
                    <input type="submit" value={this.state.text} className="btn btn-dark btn-block" />
                </form>
            </div>
        )
    }
}
