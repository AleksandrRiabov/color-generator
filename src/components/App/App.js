
import {useState} from "react";
import SingleColor from "../SingleColor/SingleColor";

import Values from "values.js";

function App() {
	const [color, setColor] = useState("#c51a1a");
	const [error, setError] = useState(false);
	const [list, setList] = useState(new Values("#c51a1a").all(10));
	
	const handleSubmit = (e) => {
		e.preventDefault();
		try{
		let colors = new Values(color).all(10);
			setList(colors)
		} catch{
			setError(true);
		}
	}
		
	
  return (
	  <>
    <div className="container">
		  <h3>Color Generator</h3>
		  <form onSubmit={handleSubmit}>
		  <input className={error ? "error" :  null} placeholder="#fafafa" type="text" value={color} onChange={(e) => {setColor(e.target.value); setError(false)}} />
			 <button className="btn" type="submit"> Submit</button> 
		  </form>
     </div>
	  <section className="colors">
	  {list.map((color,index) => {
			  return <SingleColor key={index} {...color} index={index}/>
		  })}
	  </section>
	  </>
  );
}

export default App;
