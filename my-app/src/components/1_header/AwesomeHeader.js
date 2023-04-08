import React from "react";

import css from './AwesomeHeader.module.css'

class AwesomeHeader extends React.Component{
    render () {
        return(
            <div className={css.header}>
                <div className={css.title}>Awesome Kanban Board</div>
            </div>
        )
    }
}

export default AwesomeHeader;