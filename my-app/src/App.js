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
  
    itemsChange(arrayIndex,name,id,desc) {
        const {data, index} = this.state;

        let dataArray = data;
        // console.log("arrayIndex",arrayIndex);
        // console.log("name",name);
        // console.log("id",id);
        // console.log("desc",desc);

        let item_new = {
            id:     index,
            name:   name,
            desc:   'no desc at all'
        }
        if (arrayIndex!==0){
            item_new = {
                id  :   id  ,
                name:   name,
                desc:   desc,
            }
            for (var i=0;i<dataArray[arrayIndex-1].issues.length;i++){
                if (dataArray[arrayIndex-1].issues[i].id==id){
                    dataArray[arrayIndex-1].issues.splice(i,1)
                }
            }
            // const del=dataArray[arrayIndex-1].issues[i].indexOf
        } else {
            this.setState({index:index+1});
        }
        // console.log("2 arrayIndex"  ,arrayIndex     );
        // console.log("2 id"          ,item_new.id    );
        // console.log("2 name"        ,item_new.name  );
        // console.log("2 desc"        ,item_new.desc  );
        
        // console.log("dataArray"                  ,dataArray  );
        // console.log("dataArray[arrayIndex]"      ,dataArray[arrayIndex]  );
        // console.log("dataArray[arrayIndex]issues",dataArray[arrayIndex].issues  );
        // console.log("dataArray[arrayIndex-1].issues.length",dataArray[arrayIndex-1].issues.length );
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
