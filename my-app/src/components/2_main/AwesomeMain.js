import React from "react";

import css from './AwesomeMain.module.css'

import List from "./List/List";

class AwesomeMain extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            index: 10
        };
    }

    render () {
        const { items, itemsChange } = this.props;

        return(
            <div className={css.main}>
                {items.map((item,index) => (
                    <List 
                        key={item.title} 
                        arrayIssues={item} 
                        arrayIndex={index} 
                        arrayIssuesPrev={items[index-1]}
                        itemsChange={itemsChange}
                    />
                ))}
            </div>
        )
    }

}

export default AwesomeMain;