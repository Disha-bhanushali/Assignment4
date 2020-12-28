import React, { Component } from 'react'
import "./style.scss"
import { HiBan } from "react-icons/hi";
export class page1 extends Component {
    render() {
        return (
            <div className="page1">
            <div className="heads">
                <HiBan/>
                <h1 className="head1">Page1</h1>
            </div>
            </div>
        )
    }
}

export default page1
