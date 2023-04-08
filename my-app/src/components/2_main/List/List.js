import React from "react";
import css from './List.module.css';

import ListItem from "../ListItem/ListItem";
import AddCard from "../AddCard/AddCard";


class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            index: 10
        };
        this.add_ListItem = this.add_ListItem.bind(this)
    }

    add_ListItem(item) {
        const {data, index} = this.state;
        let data_add = this.props;
        console.log("p0",data_add);
        console.log("p0-0",data_add.prop.issues[0]);
        let item_good = {
            id: index+1,
            name: item,
            desc: 'no desc at all'
        }
        data_add.prop.issues.push(item_good);
        console.log("p1",data_add);
        this.setState({data:data_add, index:index+1});
    }

    render(){

        const { prop, idx } = this.props;


        return(
            <div className={css.List}>
                <div className={css.title}>{prop.title}</div>
                {prop.issues.map(item => (
                    <ListItem props={item} key={item.id}>Nealo</ListItem>
                ))}
                <AddCard 
                    prop={prop} 
                    idx={idx} 
                    add_ListItem={this.add_ListItem} 
                />
            </div>
        )
}
}

export default List;