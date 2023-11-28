import React from "react";

import css from "./AwesomeHeader.module.css";
import avatar from "./media/user-avatar.svg";
import ellipse from "./media/Ellipse1.svg";
import avatarArrow from "./media/avatarArrow.svg";
import rectangle from "./media/Rectangle27.svg";

class AwesomeHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      dropEn: false,
    };
  }

  handleClick = () => {
    let { dropEn } = this.state;
    this.setState({
      dropEn: !dropEn,
    });
  };

  render() {
    const { dropEn } = this.state;
    const transform = dropEn ? 180 : 0;
    return (
      <div className={css.header}>
        <div className={css.title}>Awesome Kanban Board</div>
        <div className={css.btnUserContainer}>
          <button className={css.btnUser} onClick={this.handleClick}>
            <div className={css.avatarContainer}>
              <img className={css.avatar} src={ellipse} alt="ellipse"></img>
              <img className={css.avatar} src={avatar} alt="ava"></img>
            </div>
            <img
              style={{ transform: `rotate(${transform}deg` }}
              src={avatarArrow}
              alt="square"
            ></img>
          </button>
          {dropEn ? (
            <div className={css.dropdown}>
              <img
                className={css.selector_img}
                src={rectangle}
                alt="rectangle"
              ></img>
              <div className={css.selector}>
                <button className={css.selector_btn}>Profile</button>
                <button className={css.selector_btn}>Log Out</button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default AwesomeHeader;
