import React from "react";

import css from './AwesomeMain.module.css'

import List from "./List/List";

class AwesomeMain extends React.Component{
    constructor(props) {
        super(props)
    }

    render () {
        const { prop } = this.props;

        return(
            <div className={css.main}>
                {prop.map((item,index) => (
                    <List key={item.title} prop={item} idx={index}></List>
                ))}
            </div>
        )
    }

}

export default AwesomeMain;