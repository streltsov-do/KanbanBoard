import React from "react";
import { Route, Switch } from "react-router-dom";

import css from './Main.module.css'

import List from "./List/List";
import ItemDesc from "./ItemDesc/ItemDesc";

class Main extends React.Component{
    constructor(props) {
        super(props)
    }


    render () {
        const { items, itemsChange, detailedChange, detailedShow } = this.props;

        return(
            <div className={css.main}>
                <>
                    {items.map((item,index) => (
                        <List 
                            key={item.title} 
                            arrayIssues={item} 
                            arrayIndex={index} 
                            arrayIssuesPrev={items[index-1]}
                            itemsChange={itemsChange}

                            detailedShow={detailedShow}
                        />
                    ))}
                </>
            </div>
        )
    }

}

export default Main;