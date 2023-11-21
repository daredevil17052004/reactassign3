import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";
import imageData from "../component/DataComponent";

export default class AppClass extends Component{
  constructor(props){
    super();
    this.props
  }  

  render(){
    const im = this.props.an();
    return(
      <div>
        <div>
          <h2>Kalvium Gallery</h2>
        </div>
        <div className="image">
          {im.map((item) =>{
            return <img key={item.id} src={item.img} />
          })}
        </div>
      </div>
    )
  }
  // code here
}
