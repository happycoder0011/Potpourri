import React from "react";
import './Grid.css';
import Grid_Item from "./Grid_Item";
import * as images from './../images'


function Grid() {
  return (
    <div className="Grid__main">
     <Grid_Item image={images.twitter}/>
     <Grid_Item image ={images.drumkit}/>
     <Grid_Item image={images.designsystem}/>
     <Grid_Item />
     <Grid_Item />
     <Grid_Item />

    </div>
  );
}

export default Grid;
