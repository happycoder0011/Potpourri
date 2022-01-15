import React from "react";
import './Grid.css';
import Grid_Item from "./Grid_Item";


function Grid() {
  return (
    <div className="Grid__main">
     <Grid_Item height="100px" width="300px"/>
     <Grid_Item />
     <Grid_Item />
     <Grid_Item />
     <Grid_Item />
     <Grid_Item />

    </div>
  );
}

export default Grid;
