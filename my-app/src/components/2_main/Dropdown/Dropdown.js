import React from "react";

import css from "./Dropdown.module.css"
import DropdownItem from "../Dropdown-Item/DropdownItem";
import arrowdown from "./Dropdown_Arrow.svg"

class Dropdown extends React.Component{
    constructor(props) {
        super(props)
        // this.inputRef = React.createRef();

        this.state = { selected: null };
        this.handleClickAdd = this.handleClickAdd.bind(this)
    }


    handleClickAdd(e) {
        // arrayIssuesPrev.issues
        // console.log("NAME", arrayIssuesPrev.issues[].name)
        this.props.itemsChange(
                this.props.arrayIndex,
                e.target.value,
        //         name,
        //         desc
        )
        this.props.closeDrop(true)
        // items
        // itemsChange(true,name)
        
        // handleClickClose();
    }
    
    render() {
        const {arrayIssuesPrev, arrayIndex, itemsChange, closeDrop} = this.props;

        const title = {
            id: "title",
            name: <img src={arrowdown} className={css.arrowdown}/>,
            desc: ""
        }

        // const options = [
        //     {arrayIssuesPrev.issues.map(item => (
        // ]

        return(
            <>
                {/* <DropdownItem 
                    item={title}
                    key={null}
                    title={true}
                    itemsChange={itemsChange}
                    closeDrop={closeDrop}
                /> */}
                    {/* <img src="arrowdown"/> */}
                {/* </DropdownItem> */}
                {/* <div className={css.container}> */}
                    {/* {arrayIssuesPrev.issues.map(item => (
                        <DropdownItem 
                            ref={this.inputRef}
                            item={item} 
                            key={item.id} 
                            title={false}
                            arrayIndex={arrayIndex}
                            itemsChange={itemsChange}
                            closeDrop={closeDrop}
                            // onClick={itemsChange(item.name)}
                        />
                    ))} */}
                {/* </div> */}
                <select 
                    className={css.DropTitle} 
                    onChange={this.handleClickAdd} 
                    defaultValue={this.state.selected || ''}
                    // value={this.state.selected || ''}
                >
                    <option value="" key="empty" className={css.DropEmpty}></option>
                    {arrayIssuesPrev.issues.map(item => (
                        <option 
                            value = {item.id} 
                            className={css.DropItem}
                            // ref={this.inputRef}
                            // item={item} 
                            key={item.id} 
                            // title={false}
                            // arrayIndex={arrayIndex}
                            // itemsChange={itemsChange}
                            // closeDrop={closeDrop}
                            // onClick={handleClickAdd}
                        >
                            {item.name}
                        </option>
                    ))}
                </select>
            </>
        )
    }
}

export default Dropdown;