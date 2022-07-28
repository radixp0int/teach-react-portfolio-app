import React, { useState, useEffect } from 'react'

const Typewriter = ({statements}) => {
	const [index, setIndex] = useState(0);
	const [subIndex, setSubIndex] = useState(0);
	const [blink, setBlink] = useState(true);
	const [reverse, setReverse] = useState(false);

	// TypeWriter
	useEffect(() => {
		if (index === statements.length - 1 && subIndex === statements[index].length) {
			return;
		}

		if (
			subIndex === statements[index].length + 1 &&
			index !== statements.length - 1 &&
			!reverse
		) {
			setReverse(true);
			return;
		}

		if (subIndex === 0 && reverse) {
			setReverse(false);
			setIndex((prev) => prev + 1);
			return;
		}

		const timeout = setTimeout(() => {
			setSubIndex((prev) => prev + (reverse ? -1 : 1));
		}, Math.max(reverse ? 75 : subIndex === statements[index].length ? 1000 :
			150, parseInt(Math.random() * 350)));

		return () => clearTimeout(timeout);
	}, [subIndex, index, reverse]);

	// Blinker
	useEffect(() => {
		const timeout2 = setTimeout(() => {
			setBlink((prev) => !prev);
		}, 500);
		return () => clearTimeout(timeout2);
	}, [blink]);
	return (
		<>
			{`${statements[index].substring(0, subIndex)}${blink ? "|" : " "}`}
		</>
	)
}

export default Typewriter