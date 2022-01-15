import React from 'react'

function Grid_Item({height='200px',width='200px'}) {
    return (
        <div className="Grid__child">
            <img src='http://via.placeholder.com/150' height={height} width={width}/>
        </div>
    )
}

export default Grid_Item
