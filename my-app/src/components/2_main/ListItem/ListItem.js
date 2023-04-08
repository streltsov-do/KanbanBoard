import React from "react";

import css from './ListItem.module.css';

class ListItem extends React.Component{
    constructor(props){
        super(props)
    }

    render () {
        const {id, name, desc} = this.props.props
        return(
            <div className={css.ListItem} key={id}>{name}</div>
        )
    }
}

export default ListItem;