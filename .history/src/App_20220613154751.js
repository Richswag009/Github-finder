
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
    console.log(REACT_APP_GITHUB_CLIENT_SECRET);
    this.setState({loading:true});

   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   this.setState({users:res.data, loading:false});
  }
  render(){
    return (
      <div className="App">
      <Navbar/>
      <div className="container">
      <Users loading={this.state.loading}users={this.state.users} />
      </div>
      </div>
    );
  }
}

export default App;
