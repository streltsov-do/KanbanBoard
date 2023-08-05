import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "./Main/Main";
import ItemDesc from "./ItemDesc/ItemDesc";
import ItemDescWrap from "./ItemDesc/ItemDescWrap";
import NotFound from "./NotFound/NotFound";

import css from './AwesomeMain.module.css'

class AwesomeMain extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            detailed: false,
            detailedArrayIndex: "",
            detailedId: "",
            detailedTitle: "",
            detailedDesc: "",
        };
        this.toggleDescriptionView = this.toggleDescriptionView.bind(this)
    }

    componentDidMount() {
        // console.log("AwesomeMain DidMount")
        let detailed = localStorage.getItem('detailed') 
        // console.log("ddet",detailed);
        if (detailed!==null){
            // console.log("sar",detailed);
            detailed=JSON.parse(detailed);
            this.setState({
                detailedArrayIndex  : detailed.detailedArrayIndex,
                detailedId          : detailed.detailedId        ,
                detailedName        : detailed.detailedName      ,
                detailedDesc        : detailed.detailedDesc      ,
            })
        }
    }

    toggleDescriptionView(bool, arrayIndex, id, name, desc) {
        this.setState({
            detailed:bool
        })
        if (bool) {
            this.setState({
                detailedArrayIndex: arrayIndex,
                detailedId: id,
                detailedName: name,
                detailedDesc: desc,
            })
        }
        
        const detailed={
            detailedArrayIndex: arrayIndex,
            detailedId: id,
            detailedName: name,
            detailedDesc: desc,
        }
        localStorage.setItem("detailed",JSON.stringify(detailed))
    }
    
    render () {
        const {detailed,detailedArrayIndex,detailedId,detailedName,detailedDesc} = this.state;

        return(
            <div
                className={css.awesomeMain}
            >
                <Routes>

                    <Route path="*" element={<NotFound/>} />

                    <Route exact path='/' 
                        element={
                            <Main 
                                items           = {this.props.items} 
                                itemsChange     = {this.props.itemsChange}
                                changeDescription  = {this.props.changeDescription}
                                toggleDescriptionView    = {this.toggleDescriptionView}
                            />
                        }
                    ></Route>
                    {/* <Route path={`/tasks/${detailedId}`} */}
                    <Route path='/tasks/:id'
                        element={
                            // <ItemDesc 
                            //     items={this.props.items}
                            //     changeDescription={this.props.changeDescription}
                            //     arrayIndex={detailedArrayIndex}
                            //     id={detailedId}
                            //     name={detailedName}
                            //     desc={detailedDesc}
                            // />
                            <ItemDescWrap 
                                items={this.props.items}
                                arrayIndex={detailedArrayIndex}
                                id={detailedId}
                                changeDescription={this.props.changeDescription}
                                name={detailedName}
                                desc={detailedDesc}
                            />
                        }
                    ></Route>

                    <Route path="/tasks/*" element={<NotFound/>} />
                    
                </Routes>
            </div>
        )
    }

}

export default AwesomeMain;