import React, { createRef } from "react";

import css from "./ItemDesc.module.css"
import closeImg from "./closeImg.svg"
import Line1 from "./Line1.svg"
import Line2 from "./Line2.svg"

class ItemDesc extends React.Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    handleClickExit = () => {
        this.props.detailedShow(false)
        // this.p
    }
    
    handleInput = () => {
        const {bool, arrayIndex, id, name, desc} = this.props

        // console.log("4 arrayIndex",arrayIndex)
        // console.log("4 id",id)
        // console.log("4 desc",this.inputRef.current.value)
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
                <input 
                    ref={this.inputRef}
                    type="text" 
                    className={css.desc} 
                    defaultValue={desc} 
                    onChange={this.handleInput}
                />
            </div>
        )
    }
}

export default ItemDesc;