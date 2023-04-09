import React, { createRef } from "react";

import css from "./ItemDesc.module.css"
import Line1 from "./Line1.svg"
import Line2 from "./Line2.svg"

class ItemDesc extends React.Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    handleClickExit = () => {
        this.props.detailedShow(false)
    }
    
    handleInput = () => {
        const {bool, arrayIndex, id, name, desc} = this.props

        this.props.detailedChange(arrayIndex, id, this.inputRef.current.value)
    }

    render() {
        const {bool, arrayIndex, id, name, desc} = this.props

        return (
            <div className={css.ItemDesc}>
                <div className={css.head}>
                    <span className={css.title}>{name}</span>
                    <button 
                        className={css.buttonX} 
                        onClick={this.handleClickExit}
                    >
                        <img src={Line1} className={css.imgX}></img>
                        <img src={Line2} className={css.imgX}></img>
                    </button>
                </div>
                <textarea 
                    ref={this.inputRef}
                    type="text" 
                    className={css.desc} 
                    defaultValue={desc} 
                    onChange={this.handleInput}
                    cols="45"
                    rows="14"
                />
            </div>
        )
    }
}

export default ItemDesc;