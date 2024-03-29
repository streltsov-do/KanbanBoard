import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import AwesomeHeader from "./components/1_header/AwesomeHeader";
import AwesomeMain from "./components/2_main/AwesomeMain";
import AwesomeFooter from "./components/3_footer/AwesomeFooter";

import dataMock from "./components/dataMock";

class App extends React.Component {
  constructor(props) {
    super(props);

    const dataArrayDef = [
      {
        title: "Backlog",
        issues: [],
      },
      {
        title: "Ready",
        issues: [],
      },
      {
        title: "In Progress",
        issues: [],
      },
      {
        title: "Finished",
        issues: [],
      },
    ];

    this.state = {
      // data: dataMock,
      // index: 13,

      data: dataArrayDef,
      index: 0,
    };
    this.itemsChange = this.itemsChange.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  componentDidMount() {
    const dataArrayDef = [
      {
        title: "Backlog",
        issues: [],
      },
      {
        title: "Ready",
        issues: [],
      },
      {
        title: "In Progress",
        issues: [],
      },
      {
        title: "Finished",
        issues: [],
      },
    ];

    let dataArray = localStorage.getItem("dataArray");
    dataArray = JSON.parse(dataArray);

    if (dataArray !== null) {
      this.setState({ data: dataArray });
    } else {
      this.setState({ data: dataArrayDef });
    }

    let index = localStorage.getItem("index");
    index = JSON.parse(index);
    index = index === null ? 0 : index;

    this.setState({ index: index });
  }

  updateData(dataArray) {
    localStorage.setItem("dataArray", JSON.stringify(dataArray));
    this.setState({ data: dataArray });
  }

  itemsChange(arrayIndex, val) {
    let emptyVal = true;
    for (let i = 0; i < val.length; i++) {
      if (val[i] !== " ") {
        emptyVal = false;
      }
    }
    if (emptyVal && arrayIndex === 0) {
      return;
    }

    const { data, index } = this.state;

    let dataArray = data;

    let item_new = {
      id: index,
      name: val,
      desc: "This task has no description",
    };

    if (arrayIndex !== 0) {
      let name = "";
      let desc = "";
      for (let i = 0; i < dataArray[arrayIndex - 1].issues.length; i++) {
        if (dataArray[arrayIndex - 1].issues[i].id == val) {
          name = dataArray[arrayIndex - 1].issues[i].name;
          desc = dataArray[arrayIndex - 1].issues[i].desc;
          dataArray[arrayIndex - 1].issues.splice(i, 1);
        }
      }
      item_new = {
        id: val,
        name: name,
        desc: desc,
      };
    } else {
      this.setState({ index: index + 1 });
      localStorage.setItem("index", JSON.stringify(index + 1));
    }

    dataArray[arrayIndex].issues.push(item_new);
    this.updateData(dataArray);
  }

  changeDescription(arrayIndex, id, desc) {
    const { data } = this.state;

    let dataArray = data;

    for (let i = 0; i < dataArray[arrayIndex].issues.length; i++) {
      if (dataArray[arrayIndex].issues[i].id == id) {
        let desc_fin = desc === "" ? "This task has no description" : desc;

        dataArray[arrayIndex].issues[i].desc = desc_fin;

        const detailed = {
          detailedArrayIndex: arrayIndex,
          detailedId: id,
          detailedName: dataArray[arrayIndex].issues[i].name,
          detailedDesc: desc_fin,
        };

        localStorage.setItem("detailed", JSON.stringify(detailed));
      }
    }

    this.updateData(dataArray);
  }

  render() {
    return (
      <BrowserRouter>
        <AwesomeHeader />
        <AwesomeMain
          items={this.state.data}
          itemsChange={this.itemsChange}
          changeDescription={this.changeDescription}
        />

        <AwesomeFooter items={this.state.data} />
      </BrowserRouter>
    );
  }
}

export default App;
