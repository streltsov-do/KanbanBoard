import React from "react";
import './App.css'

import AwesomeHeader  from "./components/1_header/AwesomeHeader";
import AwesomeMain    from "./components/2_main/AwesomeMain";
import AwesomeFooter  from "./components/3_footer/AwesomeFooter";

import dataMock from "./components/dataMock";

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            data: dataMock,
            index: 10
        };
        this.itemsChange = this.itemsChange.bind(this)
    }
  
    itemsChange(arrayIndex,val) {
        const {data, index} = this.state;

        let dataArray = data;
        
        let item_new = {
            id:     index,
            name:   val,
            desc:   'no desc at all'
        }
        // console.log("dataArray[arrayIndex-1].issues.length",dataArray[arrayIndex-1].issues.length)
        // console.log("dataArray[arrayIndex-1].issues",dataArray[arrayIndex-1].issues)
        if (arrayIndex!==0){
            let name="";
            let desc="";
            for (var i=0;i<dataArray[arrayIndex-1].issues.length;i++){
                if (dataArray[arrayIndex-1].issues[i].id==val){
                    name = dataArray[arrayIndex-1].issues[i].name
                    desc = dataArray[arrayIndex-1].issues[i].desc
                    // console.log("name",name)
                    // console.log("desc",desc)
                    dataArray[arrayIndex-1].issues.splice(i,1)
                }
            }
            item_new = {
                id  :   val  ,
                name:   name,
                desc:   desc,
            }
            
        } else {
            this.setState({index:index+1});
        }
        
        dataArray[arrayIndex].issues.push(item_new);
        this.setState({data:dataArray});
    }

    render() {
        return (
            <>
                <AwesomeHeader/>
                <AwesomeMain 
                    items={this.state.data}
                    itemsChange={this.itemsChange}
                />
                <AwesomeFooter 
                    items={this.state.data}
                />
            </>
        );
}
}

export default App;
