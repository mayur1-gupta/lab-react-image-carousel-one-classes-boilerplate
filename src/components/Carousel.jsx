import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(){
        super()
        this.state ={
            imgCount: 0
        }
    }
    rightbutton =()=>{
        if(this.state.imgCount<2){
        this.setState({
            imgCount : this.state.imgCount +1
        })}
        else{
            this.setState({
                imgCount:0
            })
        }
    }
    leftbutton =() =>{
        if(this.state.imgCount>0)
        this.setState({
            imgCount :this.state.imgCount -1
        })
        else{
            this.setState({
                imgCount : 2
            })
        }
    }
    
render(){
    console.log(images)
    return(<>

    <div className="kkk">
    <div className="rightButton" onClick={this.rightbutton} style={{right: 0 }} ><ArrowBackIosIcon/></div>

    </div>
    <div className="body">
    <img src= {images[this.state.imgCount].img} alt="" className="img"/>
    <h1 className="title">{images[this.state.imgCount].title}</h1>
    <h2 className="subtitle">{images[this.state.imgCount].subtitle}</h2>
    
    <div className="leftButton" onClick={this.leftbutton}><ArrowForwardIosIcon/></div>
    </div>
    </>)
} 
}

export default Carousel;
