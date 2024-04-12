import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	// Logica
	const [color, setColor]=useState("");
	return (
		<div className="contenedor">
			<div className="tubo"></div>
			<div className="semaforo">
				<div className={"boton red" + ((color == "red") ? " brillo": "")} onClick={()=>{
					setColor("red");
				}}></div>
				<div className= {"boton yellow" + ((color == "yellow") ? " brillo": "")} onClick={()=>{
					setColor("yellow");
				}} ></div>
				<div className= {"boton green" + ((color == "green") ? " brillo": "")} onClick={()=>{
					setColor("green");
				}}></div>
			</div>
		</div>
	);
};

export default Home;
