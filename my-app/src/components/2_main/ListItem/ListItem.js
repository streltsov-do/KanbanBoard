import React from "react";
import { Link, Route, Routes} from "react-router-dom";

import ItemDesc from "../ItemDesc/ItemDesc";

import css from './ListItem.module.css';

class ListItem extends React.Component{
    constructor(props){
        super(props)
    }

    handleClick= () => {
        const {id, name, desc} = this.props.items
        const {arrayIndex} = this.props
        
        this.props.toggleDescriptionView(true, arrayIndex, id, name, desc)
    }

    render () {
        const {arrayIndex, id, name, desc} = this.props.items
        return(
            <>
                {/* <li 
                    className={css.ListItem} 
                    key={id} 
                > */}
                    <Link 
                        className={css.ListItem} 
                        key={id} to={`/tasks/${id}`} 
                        onClick={this.handleClick}
                    >
                        {name}
                    </Link>
                {/* </li> */}
            </>
        )
    }
}

export default ListItem;