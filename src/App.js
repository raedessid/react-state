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
    count: 0,
   intervalId: 0
  }; 
   toggleHandler =() => {
    const currentState = this.state.show ; 
    this.setState({
      show : !currentState  
    })
  }
  componentDidMount() {
    const newIntervalId = setInterval(() => {
      this.setState(prevState => {
        return {
          ...prevState,
          count: prevState.count + 1,
        };
      });
    }, 1000);
  
    this.setState(prevState => {
      return {
        ...prevState,
        intervalId: newIntervalId,
      };
    });
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
      <p>{this.state.intervalId}</p>

    
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