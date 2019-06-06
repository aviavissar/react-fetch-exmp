import React from 'react';
import HeaderComponent from "../header.component/header.component"
import Apps from '../apps.component/apps.component';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            txt:"a"
        }
    }

    render() {
        return (
            <div key="Apps">
                <HeaderComponent mytext={this.mytext}></HeaderComponent>
                <Apps searchTxt={this.state.txt} ></Apps>
            </div>
        )
    }
    mytext=(c)=>{
        console.log(c)
        this.setState({txt:c})
    }

}
export default Main;
