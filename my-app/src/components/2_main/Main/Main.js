import React from "react";
import { Route, Switch } from "react-router-dom";
import { createRef, useEffect } from "react";

import css from './Main.module.css'

import List from "../List/List";

class Main extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            width: 0
        }
    }

    componentDidMount() {
        const height = this.divElement.clientHeight; // padding top&bot
        const width = this.divElement.clientWidth; // padding top&bot
        this.setState({ 
            height: height,
            width: width
        });
    }

    render () {
        const { items, itemsChange, detailedChange, detailedShow } = this.props;

        return(
            <div 
                className={css.main}
                ref={ (divElement) => { this.divElement = divElement } }
            >
                <>
                    {items.map((item,index) => (
                        <List 
                            key={item.title} 
                            arrayIssues={item} 
                            arrayIndex={index} 
                            arrayIssuesPrev={items[index-1]}
                            itemsChange={itemsChange}
                            max_height={this.state.height}
                            max_width={this.state.width}

                            detailedShow={detailedShow}
                        />
                    ))}
                </>
            </div>
        )
    }

}

export default Main;