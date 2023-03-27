import React, { memo, useCallback, useContext } from "react";
import { DarkmodeContext } from "../../context/darkmode_context";
import styles from "./quest_category.module.css";

const QuestCategory = memo(({ category, getCategory }) => {
	const { darkmode, toggleDarkmode } = useContext(DarkmodeContext);

	const allClick = useCallback(() => {
		getCategory("All");
	}, [getCategory]);
	const workingClick = useCallback(() => {
		getCategory("Working");
	}, [getCategory]) ;
	const completeClick = useCallback(() => {
		getCategory("Complete");
	}, [getCategory]) ;

	return (
		<nav className={styles.category}>
			<div className={styles.btnset}>
				<button
					className={category === "All" ? styles.active : undefined}
					onClick={allClick}
				>
					전체
				</button>
				<button
					className={
						category === "Working" ? styles.active : undefined
					}
					onClick={workingClick}
				>
					진행중
				</button>
				<button
					className={
						category === "Complete" ? styles.active : undefined
					}
					onClick={completeClick}
				>
					완료
				</button>
			</div>
			<div className={styles.darkmode}>
				<button onClick={() => toggleDarkmode()}>
					{darkmode === true ? <span>🌞</span> : <span>🌙</span>}
				</button>
			</div>
		</nav>
	);
})

export default QuestCategory;
