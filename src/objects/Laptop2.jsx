import {ReactComponent as LaptopIcon} from './../images/Laptop.svg';
import "../style/laptop.css";
import {Component} from "react";

export class Laptop2 extends Component {
	constructor(props) {
		super(props);
		console.log(this)
	}

	changeColor


	render() {
		return (
			<LaptopIcon height="calc(100vh / 10.2)" className="icon" />
		);
	}
}