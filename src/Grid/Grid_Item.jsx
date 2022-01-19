import React from 'react'
function Grid_Item({image}) {
    return (
        <div className="Grid__child">
            <img src={image} />
        </div>
    )
}

export default Grid_Item
