import React from "react";

import css from "./Dropdown.module.css"
import DropdownItem from "../Dropdown-Item/DropdownItem";
import arrowdown from "./Dropdown_Arrow.svg"

class Dropdown extends React.Component{
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    render() {
        const {arrayIssuesPrev, arrayIndex, itemsChange, closeDrop} = this.props;

        const title = {
            id: "title",
            name: <img src={arrowdown} className={css.arrowdown}/>,
            desc: ""
        }

        return(
            <>
                <DropdownItem 
                    item={title}
                    key={null}
                    title={true}
                    itemsChange={itemsChange}
                    closeDrop={closeDrop}
                />
                    {/* <img src="arrowdown"/> */}
                {/* </DropdownItem> */}
                <div className={css.container}>
                    {arrayIssuesPrev.issues.map(item => (
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
                    ))}
                </div>
            </>
        )
    }
}

export default Dropdown;