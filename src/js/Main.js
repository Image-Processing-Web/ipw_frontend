import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider, Container, Header } from 'rsuite';
import '../css/Main.css'

const funcitonBar = <div></div>

class Main extends React.Component {
    render() {
        return (
            <Container className="body" id="body">
                <Header className="nav flex-row" id="nav">
                    <h4 className="nav-btn">註冊</h4>
                    <h4 className="nav-btn">登入</h4>
                </Header>

                <div className="flex-row">
                    <div className="function-bar" id="functionBar"></div>
                    <div className="image-placement" id="originImagePlacement"></div>
                    <Divider vertical style={{ width:"1px" }}></Divider>
                    <div className="image-placement" id="processedImagePlacement"></div>
                </div>
            </Container>
        )
    }

    setFunctionBarSize() {
        var bodyHeight = window.getComputedStyle(document.getElementById("body")).height;
        var navHeight = window.getComputedStyle(document.getElementById("nav")).height;
        var functionBar = document.getElementById("functionBar");
        functionBar.style.height = "calc(" + bodyHeight + " - " + navHeight + ")";
    }

    setImagePlacementSize() {
        var bodyWidth = window.getComputedStyle(document.getElementById("body")).width;
        var functionBarWidth = window.getComputedStyle(document.getElementById("functionBar")).width;
        var bodyHeight = window.getComputedStyle(document.getElementById("body")).height;
        var navHeight = window.getComputedStyle(document.getElementById("nav")).height;

        var imagePlacement = [document.getElementById("originImagePlacement"), 
                                document.getElementById("processedImagePlacement")];

        imagePlacement.forEach(function(item, index, array) {
            item.style.height = "calc(" + bodyHeight + " - " + navHeight + ")";
            item.style.width = "calc((" + bodyWidth + " - " + functionBarWidth + ") / 2)";
        })
    }

    componentDidMount() {
        this.setFunctionBarSize();
        this.setImagePlacementSize();
    }
}

export default Main;