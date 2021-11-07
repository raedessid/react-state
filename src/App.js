import logo from './logo.svg';
import './App.css';
import raed from "./raed.jpg" ;  
import React, {Component} from 'react' ; 




class App extends Component {
  
  constructor(){
    super() 
    this.toggleHandler=this.toggleHandler.bind(this) ; 
  }
  


   state= {
    fullname : 'Raed Essid' , 
    bio : 'hard worker' ,  
    profession :'student' , 
    imageSrc : raed, 
    imageAlt :'it\'s my image ' , 
    show : false , 
    counte: 0,
   intervalId: 0
  }; 
   toggleHandler =() => {
    const currentState = this.state.show ; 
    this.setState({
      show : !currentState  
    })
  }
  componentDidMount() {
console.log("component did mount") 
let startCount = setInterval(()=> {this.setState({counte : this.state.counte+1});
if (this.state.counte === 1000 ) {clearInterval(startCount)}},1000)
  }
  componentDidUpdate () {
    console.log("component updated")
  }
  componentWillUnmount() {
    console.log("component died") ;
  }
  
shouldComponentUpdate() {
  return true
} ;


  render() {
    let content=null ; 
    if (this.state.show){
      content = <div>
      <p className="container"><span> Noun & prenoun  : </span>    {this.state.fullname}</p>
      <p className="container"><span> Bio : </span>   {this.state.bio}</p>
      <p className="container"><span>profession : </span>   {this.state.profession} </p>
      <p><span>profile photo  :   </span></p>
      <img className="container" src = {this.state.imageSrc} alt = {this.state.imageAlt}/>
      <input  placeholder = {this.state.counte} />

    
</div>
    }
    return (
      <div>
        <button  className="btn" onClick={this.toggleHandler} >click me </button>
        {content}
      </div>
    );
  }
}

export default App;