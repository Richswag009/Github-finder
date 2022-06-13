
import React,{Component} from 'react';
import './App.css';
import Navbar from './component/Layout/Navbar';
import Users from './component/users/Users';
import axios from 'axios';
class App extends Component{
  state={
    users:[],
    loading:false
};
   

  async componentDidMount(){
    this.setState({loading:true});
    
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
    
    this.setState({users: res.data });
    // console.log(REACT_APP_GITHUB_SECRET);
  }
  render(){
    return (
      <div className="App">
      <Navbar/>
      <div className="container">
      <Users  users={this.state.users} />
      </div>
      </div>
    );
  }
}

export default App;