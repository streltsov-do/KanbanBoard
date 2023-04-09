import React from "react";

import css from './AwesomeHeader.module.css';
import avatar from './user-avatar.svg';
import ellipse from './Ellipse 1.svg';
import avatarArrow from './avatarArrow.svg';
import rectangle from './Rectangle 27.svg';

class AwesomeHeader extends React.Component{
    constructor(){
        super();
        this.state={
            dropEn: false
        }
    }

    handleClick = () => {
        let {dropEn} = this.state
        this.setState({
            dropEn: !dropEn
        })
    }

    render () {
        return(
            <div className={css.header}>
                <div className={css.title}>Awesome Kanban Board</div>
                <div className={css.btnUserContainer}>
                    <button className={css.btnUser} onClick={this.handleClick}>
                        <div className={css.avatarContainer}>
                            <img className={css.avatar} src={ellipse}></img>
                            <img className={css.avatar} src={avatar}></img>
                        </div>
                        <img src={avatarArrow}></img>
                    </button>
                    {
                        (this.state.dropEn)?
                            <div className={css.dropdown}>
                                <img className={css.selector_img} src={rectangle}></img>
                                <div className={css.selector}>
                                    <select>
                                        <option key="1">Profile</option>
                                        <option key="2">Log Out</option>
                                    </select>
                                </div>
                            </div>
                        :
                            null
                    }
                    
                </div>
            </div>
        )
    }
}

export default AwesomeHeader;