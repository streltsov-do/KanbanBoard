import React from "react";

import css from './AwesomeMain.module.css'

import List from "./List/List";
import ItemDesc from "./ItemDesc/ItemDesc";

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
        this.detailedShow = this.detailedShow.bind(this)
    }

    detailedShow(bool, arrayIndex, id, name, desc) {
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
    }


    render () {
        const { items, itemsChange, detailedChange } = this.props;
        const {detailed,detailedArrayIndex,detailedId,detailedName,detailedDesc} = this.state;

        return(
            <div className={css.main}>
                {this.state.detailed?
                    <ItemDesc 
                        detailedShow={this.detailedShow}
                        detailedChange={detailedChange}
                        arrayIndex={detailedArrayIndex}
                        id={detailedId}
                        name={detailedName}
                        desc={detailedDesc}
                        // title={}
                        
                    />
                :
                    <>
                        {items.map((item,index) => (
                            <List 
                                key={item.title} 
                                arrayIssues={item} 
                                arrayIndex={index} 
                                arrayIssuesPrev={items[index-1]}
                                itemsChange={itemsChange}

                                detailedShow={this.detailedShow}
                            />
                        ))}
                    </>
                }
            </div>
        )
    }

}

export default AwesomeMain;