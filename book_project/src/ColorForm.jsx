import { useInput } from "./hooks";
import { useColors } from "./ColorProvider";


export default function AddColorForm({ onNewColor = f=> f}) {
    const [titleProps, setTitle ] = useInput("");
    const [colorProps, setColor] = useInput("#000000");

    const { addColor } = useColors();

    const submit = e=> {
        e.preventDefault();
        addColor(titleProps.value, colorProps.value);
        setTitle("");
        setColor("");
    }

    return (
        <form onSubmit={submit}>
            <input 
                {...titleProps}
                type="text"
                placeholder="color title..."
                required
            />
            <input 
                {...colorProps}
                type="color"
                required
            />
            <button>ADD</button>
        </form>
    )
}