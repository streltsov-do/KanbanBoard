import React from "react";

import css from './DropdownItem.module.css';

class DropdownItem extends React.Component{
    constructor(props){
        super(props)
    }

    render () {
        const {id, name, desc, title, itemsChange} = this.props.item;
        const arrayIndex = this.props.arrayIndex;

        // const {title} = this.props.title;
        // const classN1=title?css.DropTitle:css.DropItem;
        const classN=this.props.title?css.DropTitle:css.DropItem;

        const handleClickAdd = () => {
            // console.log("NAME",name)
            this.props.itemsChange(
                    arrayIndex,
                    name,
                    id,
                    desc
            )
            // itemsChange(true,name)
            
            handleClickClose();
        }
        const handleClickClose = () => {
            this.props.closeDrop(true)
            // itemsChange(name)
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