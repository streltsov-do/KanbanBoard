import React from "react"

class GenList extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            {prop.issues.map(item => (
                <ListItem props={item} key={item.id}>Nealo</ListItem>
            ))}
        )
    }
}
