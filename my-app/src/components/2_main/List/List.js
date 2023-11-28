import React, { createRef } from "react";

import css from "./List.module.css";

import ListItem from "../ListItem/ListItem";
import AddCard from "../AddCard/AddCard";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
  }

  // componentDidMount() {
  //     const height = this.divElement.clientHeight;
  //     this.setState({ height });
  //     console.log("height",height)
  //     console.log("props.height",this.props.max_height)
  // }

  render() {
    const {
      arrayIssues,
      arrayIndex,
      arrayIssuesPrev,
      itemsChange,
      toggleDescriptionView,
      changeDescription,
      max_height,
      max_width,
    } = this.props;

    let height_List = 130 + arrayIssues.issues.length * (15 + 35);

    let overflowY_1 =
      height_List > max_height || (max_width < 550 && height_List > 249)
        ? "scroll"
        : "auto";

    return (
      <div
        className={css.List}
        style={{
          height: height_List + "px",
          overflowY: overflowY_1,
        }}
        ref={(divElement) => {
          this.divElement = divElement;
        }}
      >
        <div className={css.title}>{arrayIssues.title}</div>
        <ul>
          {arrayIssues.issues.map((item) => (
            <ListItem
              arrayIndex={arrayIndex}
              items={item}
              key={item.id}
              toggleDescriptionView={toggleDescriptionView}
              changeDescription={changeDescription}
            />
          ))}
        </ul>
        <AddCard
          arrayIssues={arrayIssues}
          arrayIndex={arrayIndex}
          arrayIssuesPrev={arrayIssuesPrev}
          itemsChange={itemsChange}
        />
      </div>
    );
  }
}

export default List;
