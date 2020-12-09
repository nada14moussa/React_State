import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    Person:{fullName:'Nada MOUSSA' ,bio:'Always learn new things',imgSrc:'/photo.jpg',profession:'Web developer'},
    show:false,
    count:0
  };
  getProfile=()=>{
    this.setState({show:!this.state.show})
  }  
  render() {
  return (
    <div className="App">
      <button onClick={this.getProfile}> {this.state.show?'Hide Profile':'Show Profile'} </button>
      {this.state.show ?
     (<div> <h1> {this.state.Person.fullName}</h1>
       <h2>{this.state.Person.bio}</h2>
       <h2>{this.state.Person.profession}</h2>
       <img src={this.state.Person.imgSrc}/>
      </div>): (<h3>Click the button to show Profile</h3>)}
     <div > Time : {this.state.count} s</div>
    </div>
  );} 
 componentDidMount(){
   setInterval(()=>{  
   this.setState(prevState =>({count:prevState.count+1})) } ,1000)
 }
}

export default App;
