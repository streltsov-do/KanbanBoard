import React from "react";

import cssItem from '../ListItem/ListItem.module.css';
import css from './AddCard.module.css';
import plus from "./AddCard.svg"
import arrowdown from "./Dropdown_Arrow.svg"

class AddCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false,
            text_entered: false
        }
        this.inputRef = React.createRef();
    }

    render(){
        const {clicked,text_entered} = this.state
        const {prop, idx, add_ListItem} = this.props;
    
        const handleClick_Add = () => {
            // console.log("alo2");
            // console.log(clicked);

            this.setState({
                clicked : true
            })
        }
        
        const handleClick_Submit = () => {
            this.setState({
                clicked: false,
                text_entered : false
            })
            if (idx==0) {
                add_ListItem(this.inputRef.current.value)
            }
            this.inputRef.current.value=""

        }

        const handleInput = (e) => {
            // console.log("alo1",this.inputRef.current);
            // console.log("alo1v",this.inputRef.current.value);
            // const value=this.inputRef.current.value;
            // console.log("alo1vt",value);
            
            this.setState({
                text_entered: (this.inputRef.current.value!=="")
            })
        }

        const AddName_placeholder = () => {
            const len=258;
            let out="";
            for (var i=0;i<len;i++){
                out+="_";
            }
            return out
        }

        const Submit_class = `${css.AddCard} ${css.Submit}`

        return(
            <>
                {clicked?
                        <input 
                            ref={this.inputRef}
                            className={cssItem.ListItem} 
                            placeholder={AddName_placeholder()}
                            onChange={handleInput}
                        >
                        </input>
                    :
                        null
                }
                {
                    text_entered?
                        <button className={Submit_class} onClick={handleClick_Submit}>
                            Submit
                        </button>
                    :
                        <button className={css.AddCard} onClick={handleClick_Add}>
                            <img src={plus} alt="+" className={css.plus}/>
                            <div>Add card</div>
                        </button>
                }
            </>
        )
}
}

export default AddCard;