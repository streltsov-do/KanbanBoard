import React from "react";

import css from './ListItem.module.css';

class ListItem extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    handleClick= () => {
        const {id, name, desc} = this.props.items
        
        this.props.detailedShow(true, this.props.arrayIndex, id, name, desc)
    }

    render () {
        const {arrayIndex, id, name, desc} = this.props.items
        return(
            <button 
                className={css.ListItem} 
                key={id} 
                onClick={this.handleClick}
            >
                {name}
            </button>
        )
    }
}

export default ListItem;