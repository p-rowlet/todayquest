import { createContext, useEffect, useState } from "react";

export const DarkmodeContext = createContext();

export function DarkmodeProvider({ children }) {
	const [darkmode, setDarkmode] = useState(false);

	useEffect(() => {
        console.log(("questisdark" in localStorage));
		if (
			localStorage.getItem("questisdark") === "true" ||
			((!("questisdark" in localStorage)) &&
				(window.matchMedia("(prefers-color-scheme : dark)").matches))
            ){
            document.documentElement.classList.add("dark");
		}
        setDarkmode(JSON.parse(localStorage.getItem("questisdark")));
	}, []);
	const toggleDarkmode = () => {
		setDarkmode((mode) => !mode);
        localStorage.setItem("questisdark", JSON.stringify(!darkmode));
		document.documentElement.classList.toggle("dark");
	};

	return (
		<DarkmodeContext.Provider value={{ darkmode, toggleDarkmode }}>
			{children}
		</DarkmodeContext.Provider>
	);
}
