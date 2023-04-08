import React from "react";

import css from './AwesomeFooter.module.css'

class AwesomeFooter extends React.Component{
    constructor(props) {
        super(props)
    }

    render () {
        const { prop } = this.props;
        const t_N = prop[0].issues.length;
        const t_M = prop[3].issues.length;
        const t_Name = "Denis";
        const t_Year = "2023";
        return(
            <div className={css.footer}>
                <div className={css.footer_text}>Active tasks: {t_N}</div>
                <div className={css.footer_text}>Finished tasks: {t_M}</div>
                <div className={css.footer_text}>Kanban board by {t_Name}, {t_Year}</div>
            </div>
        )
    }
}

export default AwesomeFooter;