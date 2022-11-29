import React from "react";
import styles from "./quest_category.module.css";

const QuestCategory = ({category, getCategory}) => {

    const allClick = () =>{
        getCategory("All");
    }
    const workingClick = () =>{
        getCategory("Working");
    }
    const completeClick = () => {
        getCategory("Complete");
    }

	return (
		<nav className={styles.category}>
			<div className={styles.btnset}>
				<button className={category === "All" ? styles.active : undefined} onClick={allClick}>전체</button>
				<button className = {category === "Working" ? styles.active : undefined}onClick={workingClick}>진행중</button>
				<button className={category === "Complete" ? styles.active : undefined} onClick={completeClick}>완료</button>
			</div>
		</nav>
	);
};

export default QuestCategory;
