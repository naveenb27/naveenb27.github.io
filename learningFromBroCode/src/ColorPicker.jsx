import { useState } from "react"

function ColorPicker(){

    const [color, setColor] = useState("#fff");


    const styles = {
        textAlign : "center",
        width : "250px",
        height: "250px",
        borderRadius: "12px",
        backgroundColor: color,
    }

    const stylesContainer = {
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        justifyContent: "center",
    }

    const styleInput = {
        padding: "10px",
        width: "200px",
    }


    const changeColor = (e) => {
        setColor(e.target.value);
    }


    return(<div style={stylesContainer} className="colorContainer">
        <h1>Color picker App</h1>
        <div style={styles} className="container">
            {color}
        </div>
        <input placeholder={color} style={styleInput} type="text" onChange={changeColor}/>
        <label htmlFor="color">Pick color to get Hex value</label>
        <input type="color" onChange={changeColor}/>
    </div>)
}


export default ColorPicker;