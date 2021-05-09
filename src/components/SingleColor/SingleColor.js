import {useState, useEffect} from "react";
import rgbToHex from "../../utils"

const SingleColor = ({rgb,weight,index}) => {
	const [alert, setAlert] = useState(false);
	const bcg = rgb.join(",");
	const hex = rgbToHex(...rgb);
	
	const copyToClipboard = () => {
	   	setAlert(true);
		navigator.clipboard.writeText(hex);
	}
	
	useEffect(()=> {
		const timeoutId = setTimeout(() => {setAlert(false)}, 3000);
		return () => {clearTimeout(timeoutId)}
	},[alert]);
	
	
	return (
	<article className={`color ${index > 10 && "color-light"}`}
		style={{background: `rgb(${bcg})`}}
		onClick={copyToClipboard}>
		<p className="percent-value">{ weight }%</p>
		<p className="color-value" >{hex}</p>
		{alert && <p className="alert">Copied to the clipboard..</p>}
		</article>
	)
}

export default SingleColor;