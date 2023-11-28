import React from "react";

import css from "./Dropdown.module.css";
import DropdownItem from "../Dropdown-Item/DropdownItem";
import arrowdown from "./Dropdown_Arrow.svg";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    // this.inputRef = React.createRef();

    // this.state = { selected: null };
    this.handleClickAdd = this.handleClickAdd.bind(this);
  }

  handleClickAdd(e) {
    this.props.itemsChange(this.props.arrayIndex, e.target.value);
    this.props.closeDrop(true);
  }

  render() {
    const { arrayIssuesPrev, arrayIndex, itemsChange, closeDrop } = this.props;

    const title = {
      id: "title",
      name: <img src={arrowdown} className={css.arrowdown} alt="title" />,
      desc: "",
    };

    return (
      <>
        <DropdownItem
          item={title}
          key={null}
          title={true}
          itemsChange={itemsChange}
          closeDrop={closeDrop}
        />
        <div className={css.container}>
          {arrayIssuesPrev.issues.map((item) => (
            <DropdownItem
              ref={this.inputRef}
              item={item}
              key={item.id}
              title={false}
              arrayIndex={arrayIndex}
              itemsChange={itemsChange}
              closeDrop={closeDrop}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Dropdown;
