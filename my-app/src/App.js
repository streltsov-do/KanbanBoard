import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css'

import AwesomeHeader  from "./components/1_header/AwesomeHeader";
import AwesomeMain    from "./components/2_main/AwesomeMain";
import AwesomeFooter  from "./components/3_footer/AwesomeFooter";

import dataMock from "./components/dataMock";

class App extends React.Component{
    constructor(props) {
        super(props)
        
        const dataArrayDef = [
            {
                title: 'Backlog',
                issues: [
                ]
            },
            {
                title: 'Ready',
                issues: [
                ]
            },
            {
                title: 'In Progress',
                issues: [
                ]
            },
            {
                title: 'Finished',
                issues: [
                ]
            },
        ]

        this.state = {
            // data: dataMock,
            // index: 13,
            
            data: dataArrayDef,
            index: 0,

            // detailed: false,
            // detailedArrayIndex: "",
            // detailedId: "",
            // detailedTitle: "",
            // detailedDesc: "",

        };
        this.itemsChange = this.itemsChange.bind(this)
        this.detailedChange = this.detailedChange.bind(this)
        this.dataArrayChange = this.dataArrayChange.bind(this)
        // this.detailedShow = this.detailedShow.bind(this)
    }

    componentDidMount() {
        
        const dataArrayDef = [
            {
                title: 'Backlog',
                issues: [
                ]
            },
            {
                title: 'Ready',
                issues: [
                ]
            },
            {
                title: 'In Progress',
                issues: [
                ]
            },
            {
                title: 'Finished',
                issues: [
                ]
            },
        ]

        let dataArray = localStorage.getItem('dataArray') 
        dataArray=JSON.parse(dataArray);
        // console.log(dataArray);
        if (dataArray!==null)
            this.setState({data:dataArray});
        else 
            this.setState({data:dataArrayDef});
            
    }

    dataArrayChange(dataArray) {
        // console.log("change",dataArray)
        localStorage.setItem("dataArray",JSON.stringify(dataArray))
        this.setState({data:dataArray});
    }


    itemsChange(arrayIndex,val) {
        const {data, index} = this.state;

        let dataArray = data;
        
        let item_new = {
            id:     index,
            name:   val,
            desc:   'This task has no description'
        }

        if (arrayIndex!==0){
            let name="";
            let desc="";
            for (var i=0;i<dataArray[arrayIndex-1].issues.length;i++){
                if (dataArray[arrayIndex-1].issues[i].id==val){
                    name = dataArray[arrayIndex-1].issues[i].name
                    desc = dataArray[arrayIndex-1].issues[i].desc
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
        // this.setState({data:dataArray});
        this.dataArrayChange(dataArray);
    }

    detailedChange(arrayIndex,id,desc) {
        // console.log("sssssss",arrayIndex,id,desc);
        
        const {data, index} = this.state;

        let dataArray = data;

        let name="";

        for (var i=0;i<dataArray[arrayIndex].issues.length;i++){
            if (dataArray[arrayIndex].issues[i].id==id){
                // console.log("bbb",arrayIndex);
                let desc_fin= (desc=="")?('This task has no description'):desc;
                // console.log("ddd",desc_fin);
                dataArray[arrayIndex].issues[i].desc=desc_fin;
                // console.log("dA",dataArray);
                // return
            }
        }
        // console.log("aaa",dataArray);
        // this.setState({data:dataArray});
        this.dataArrayChange(dataArray);
    }
    


    // detailedShow(bool, arrayIndex, id, name, desc) {
    //     this.setState({
    //         detailed:bool
    //     })
    //     console.log("arrayIndex",arrayIndex)
    //     console.log("id",id)
    //     console.log("name",name)
    //     console.log("desc",desc)
    //     if (bool) {
    //         this.setState({
    //             detailedArrayIndex: arrayIndex,
    //             detailedId: id,
    //             detailedName: name,
    //             detailedDesc: desc,
    //         })
    //     }
    // }
    
    render() {
        const {detailed,detailedArrayIndex,detailedId,detailedName,detailedDesc} = this.state;
        // console.log("a;o",detailedArrayIndex,detailedId,detailedName,detailedDesc);
        return (
            <BrowserRouter>
                <AwesomeHeader/>
                <AwesomeMain 
                    items           ={this.state.data}
                    itemsChange     ={this.itemsChange}
                    detailedChange  ={this.detailedChange}
                    // detailedShow    ={this.detailedShow}
                    
                    // detailedarrayIndex  ={detailedArrayIndex}
                    // detailedid          ={detailedId}
                    // detailedname        ={detailedName}
                    // detaileddesc        ={detailedDesc}
                />
                
                <AwesomeFooter 
                    items={this.state.data}
                />
            </BrowserRouter>
        );
}
}

export default App;
