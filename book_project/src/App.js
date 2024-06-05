import logo from './logo.svg';
import { useState } from "react";
import ColorList from "./ColorList";
import colorData from "./color_data.json";
import './App.css';

function App() {

  const [colors, setColors] = useState(colorData);
  return (
    <div className="App">
      <ColorList colors={colors} onRemoveColor={id => {
        const newColors = colors.filter(color => color.id !== id);
        setColors(newColors);
      }}
        onRateColor={(id, rating)=> {
          const newColors = colors.map(color => color.id === id ? {...color, rating} : color);
          setColors(newColors);
        }}/>
    </div>
  );
}

export default App;
