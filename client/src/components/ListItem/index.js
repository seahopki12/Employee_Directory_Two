import React from "react";

function ListItem(props) {
    const name = props.listItemName;

    return (
        <div>
            <li>{name}</li>
        </div>
    )
}

export default ListItem;