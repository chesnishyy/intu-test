export const milliToTime = (time) => {
	const seconds = (time / 1000 % 60).toFixed(2);
	const minutes = Math.trunc((time / 1000) / 60 % 60);

	return `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
};