import React from "react";

import css from './AwesomeFooter.module.css'

class AwesomeFooter extends React.Component{
    render () {
        const { items } = this.props;
        const t_N = items[0].issues.length;
        const t_M = items[3].issues.length;
        const t_Name = "Denis";
        const t_Year = "2023";
        const task1_css = `${css.footer_text} ${css.task1}`
        return(
            <div className={css.footer}>
                <div className={css.taskContainer}>
                    <div className={task1_css}>Active tasks: {t_N}</div>
                    <div className={css.footer_text}>Finished tasks: {t_M}</div>
                </div>
                <div className={css.footer_text}>Kanban board by {t_Name}, {t_Year}</div>
            </div>
        )
    }
}

export default AwesomeFooter;