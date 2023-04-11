import React, { createRef } from "react";
import { Link, Route, Routes } from "react-router-dom";

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
        const {bool, arrayIndex, id, name, desc} = this.props

        this.props.detailedChange(arrayIndex, id, this.inputRef.current.value)
    }

    render() {
        const {bool, arrayIndex, id, name, desc} = this.props
        return (
            (id!=="")?
                <div className={css.ItemDesc}>
                    <div className={css.head}>
                        <span className={css.title}>{name}</span>
                        <Link to="/" className={css.buttonX}>
                            <img src={Line1} className={css.imgX}></img>
                            <img src={Line2} className={css.imgX}></img>
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

// class ItemDescNice extends React.Component {
//     render() {
//         const {bool, arrayIndex, id, name, desc,detailedChange} = this.props
//         return (
//             <Routes>
//                 <Route 
//                     path={`/tasks/${id}`}
//                     element={
//                         <ItemDesc 
//                             detailedChange={detailedChange}
//                             arrayIndex={arrayIndex}
//                             id={id}
//                             name={name}
//                             desc={desc}
//                         />
//                     }
//                 >
//                 </Route>
//                 {/* <Route
//                     path='/tasks/:id' 
//                         element={
//                             <NotFound/>
//                         }
//                 >
//                 </Route> */}
//             </Routes>
//         )
//     }
// }

export default ItemDesc;