import './App.css';
import server from "./images/Server.png";
import {useEffect, useRef, useState} from "react";
import {Laptop2} from "./objects/Laptop2";

function App() {
	const [laptops, setLaptops] = useState([]);
	const laptopsCountRef = useRef(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (laptopsCountRef.current < 11) {
				setLaptops(prevLaptops => [
					...prevLaptops,
					<Laptop2 key={laptopsCountRef.current} uniqueId={laptopsCountRef.current++}/>
				]);
			} else {
				clearInterval(intervalId);
			}
		}, 500);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="app">
			<div className="laptops" id="laptops1">
				{laptops.filter((value, index) => index < 6)}
			</div>
			<img src={server || ""} alt="Test"/>
			<div className="laptops" id="laptops2">
				{laptops.filter((value, index) => index >= 6)}
			</div>
		</div>
	);
}

export default App;
