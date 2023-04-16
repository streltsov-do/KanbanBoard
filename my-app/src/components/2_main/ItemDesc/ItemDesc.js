import React from "react";
// import { createRef } from "react";
import { Link} from "react-router-dom";

import NotFound from "../NotFound/NotFound";

import css from "./ItemDesc.module.css"
import Line1 from "./Line1.svg"
import Line2 from "./Line2.svg"

class ItemDesc extends React.Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    handleInput = () => {
        const {arrayIndex, id} = this.props

        this.props.detailedChange(arrayIndex, id, this.inputRef.current.value)
    }

    render() {
        const {id} = this.props

        let v_id = parseInt(id);
        let v_data = localStorage.getItem("dataArray");
        v_data = JSON.parse(v_data);
        // console.log("ItemDesc:44 v_id",v_id)
        // console.log("ItemDesc:44 v_data",v_data)
        let name = "";
        let desc = "";
        let find = false;

        for (var i=0;i<v_data.length;i++){
            for (var j=0;j<v_data[i].issues.length;j++){
                if (v_data[i].issues[j].id==v_id){
                    
                    name = v_data[i].issues[j].name
                    desc = v_data[i].issues[j].desc

                    find = true
                }
            }
        }
        
        // console.log("ItemDesc:44 find:",find);

        return (
            (find!==false)?
                <div className={css.ItemDesc}>
                    <div className={css.head}>
                        <span className={css.title}>{name}</span>
                        <Link to="/" className={css.buttonX}>
                            <img src={Line1} className={css.imgX} alt="\"></img>
                            <img src={Line2} className={css.imgX} alt="/"></img>
                        </Link>
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
            :
                <NotFound/>
        )
    }
}

export default ItemDesc;