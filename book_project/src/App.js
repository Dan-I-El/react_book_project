import { useState } from "react";
import ColorForm from "./ColorForm";
import ColorList from "./ColorList";
import colorData from "./color_data.json";
import { v4 } from "uuid";
import './App.css';

function App() {

  const [colors, setColors] = useState(colorData);
  return (
    <div className="App">
      <ColorForm
        onNewColor={(title, color)=> {
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color
            }
          ]
          setColors(newColors);
        }}/>
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
