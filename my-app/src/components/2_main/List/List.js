import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import css from './List.module.css';

import ListItem from "../ListItem/ListItem";
import AddCard from "../AddCard/AddCard";


class List extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         data: [],
    //         index: 10
    //     };
    // }

    render(){

        const { arrayIssues, arrayIndex , arrayIssuesPrev, itemsChange, detailedShow, detailedChange } = this.props;

        return(
            <div className={css.List}>
                <div className={css.title}>{arrayIssues.title}</div>
                {arrayIssues.issues.map(item => (
                    <ListItem
                        arrayIndex={arrayIndex} 
                        items={item} 
                        key={item.id}
                        detailedShow={detailedShow}
                        detailedChange={detailedChange}
                    />
                ))}
                <AddCard 
                    arrayIssues={arrayIssues} 
                    arrayIndex={arrayIndex} 
                    arrayIssuesPrev={arrayIssuesPrev}
                    itemsChange={itemsChange}
                />
            </div>
        )
}
}

export default List;