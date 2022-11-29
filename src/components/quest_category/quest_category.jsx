import React, { useState } from "react";
import styles from "./quest_category.module.css";

const QuestCategory = (props) => {
	const [category, setCategory] = useState("All");

	return (
		<nav className={styles.category}>
			<div className={styles.btnset}>
				<button>전체</button>
				<button>진행중</button>
				<button>완료</button>
			</div>
		</nav>
	);
};

export default QuestCategory;
