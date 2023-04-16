import React from "react";

import css from './DropdownItem.module.css';

class DropdownItem extends React.Component{
    constructor(props){
        super(props)
}

    render () {
        const {id, name, desc, title, itemsChange} = this.props.item;
        const arrayIndex = this.props.arrayIndex;

        const classN=this.props.title?css.DropTitle:css.DropItem;

        const handleClickAdd = () => {
            this.props.itemsChange(
                    arrayIndex,
                    id,
            )
            
            handleClickClose();
        }
        const handleClickClose = () => {
            this.props.closeDrop(true)
        }

        return(
            <button 
                ref={this.inputRef}
                className={classN} 
                key={id} 
                onClick={this.props.title?(handleClickClose):(handleClickAdd)}
            >
                {name}
            </button>
        )
    }
}

export default DropdownItem;