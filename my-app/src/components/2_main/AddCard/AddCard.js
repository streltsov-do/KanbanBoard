import React from "react";

import cssItem from '../ListItem/ListItem.module.css';
import css from './AddCard.module.css';
import plus from "./AddCard.svg"

import Dropdown from "../Dropdown/Dropdown";

class AddCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false,
            text_entered: false,
            empty: false
        }
        this.inputRef = React.createRef();
        this.setCLicked = this.setCLicked.bind(this)
    }

    setCLicked(bool) {
        let empty=false;
        if (this.props.arrayIndex!==0){
            if (this.props.arrayIssuesPrev.issues.length==0){
                empty=true;
            }
        }
        this.setState({
            clicked : !bool,
            empty   : empty
        })
    }

    static getDerivedStateFromProps(props, state) {
        const {arrayIssuesPrev} = props;
        let empty=false;
        if (props.arrayIndex!==0){
            empty=false
            if (arrayIssuesPrev.issues.length==0){
                empty=true;
            }
        }
        // this.setState({
        //     empty : empty
        // })
        return {
            empty: empty
        }
    }

    render(){
        const {clicked,text_entered} = this.state
        const {arrayIssues, arrayIndex, arrayIssuesPrev, itemsChange} = this.props;

        const handleClick_Submit = () => {
            this.setState({
                clicked: false,
                text_entered : false
            })
            if (text_entered){
                this.props.itemsChange(0,this.inputRef.current.value)
                this.inputRef.current.value=""
            }
        }

        const handleInput = (e) => {
            this.setState({
                text_entered: (this.inputRef.current.value!=="")
            })
            if (this.inputRef.current.value.length>25){
                this.inputRef.current.value = this.inputRef.current.value.slice(0,25);
            }
        }

        const AddName_placeholder = () => {
            const len=258;
            let out="";
            for (var i=0;i<len;i++){
                out+="_";
            }
            return out
        }

        const submitClass = `${css.AddCard} ${css.Submit}`

        return(
            <>
                {clicked?
                       (arrayIndex===0)? 
                            <input 
                                ref={this.inputRef}
                                className={cssItem.ListItem} 
                                placeholder={AddName_placeholder()}
                                onChange={handleInput}
                            >
                            </input>
                        :
                            <>
                                {/* <DropdownItem></DropdownItem> */}
                                <Dropdown 
                                    arrayIssuesPrev={arrayIssuesPrev} 
                                    arrayIndex={arrayIndex} 
                                    itemsChange={itemsChange}
                                    closeDrop={this.setCLicked}
                                />
                            </>
                    :
                        null
                }
                {
                    clicked?
                        (arrayIndex==0)?
                            <button 
                                className={submitClass} 
                                onClick={handleClick_Submit}
                            >
                                Submit
                            </button>
                        :
                        <></>
                    :
                        <button 
                            className={css.AddCard} 
                            onClick={() => this.setCLicked(false)}
                            disabled={this.state.empty==true}
                        >
                            <img src={plus} alt="+" className={css.plus}/>
                            <div>Add card</div>
                        </button>
                }
            </>
        )
}
}

export default AddCard;