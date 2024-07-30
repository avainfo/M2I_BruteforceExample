import { ReactComponent as LaptopIcon } from './../images/Laptop.svg';
import "../style/laptop.css";
import { useEffect, useRef } from "react";

function Laptop({ uniqueId }) {
	const laptopRef = useRef(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (laptopRef.current) {
				console.log("test", uniqueId);
				const isFirstCat = uniqueId < 6;
				const container = document.getElementsByClassName("laptops")[isFirstCat ? 0 : 1];

				if (container) {
					const targetElement = container.children[uniqueId % 6]; // Prendre le bon enfant en fonction de l'index
					console.log("Element : ", targetElement);
					if (targetElement) {
						requestAnimationFrame(() => {
							targetElement.style.stroke = "red"; // Appliquer le style souhaité
						});
					}
				}
			}
		}, 500);

		return () => clearTimeout(timer); // Nettoyer le timer
	}, [uniqueId]);

	return (
		<LaptopIcon ref={laptopRef} height="calc(100vh / 10.2)" className="icon" />
	);
}

export default Laptop;
