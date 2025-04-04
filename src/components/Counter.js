import React, { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	const handleIncrement = () => {
		setCount(count + 1);
	};

	const handleDecrement = () => {
		setCount(count - 1);
	};

	return (
		<div
			style={{
				textAlign: "center",
				margin: "50px auto",
				maxWidth: "300px",
			}}
		>
			<h1>Simple Counter</h1>
			<h2>Count: {count}</h2>
			<div>
				<button
					onClick={handleIncrement}
					style={{
						padding: "8px 16px",
						margin: "0 5px",
						fontSize: "16px",
					}}
				>
					Increment (+)
				</button>
				<button
					onClick={handleDecrement}
					style={{
						padding: "8px 16px",
						margin: "0 5px",
						fontSize: "16px",
					}}
				>
					Decrement (-)
				</button>
			</div>
		</div>
	);
}

export default Counter;