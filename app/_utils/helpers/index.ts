import { Dispatch, SetStateAction } from 'react'

function toggleState(setState: Dispatch<SetStateAction<boolean>>): void {
	setState((prevState) => !prevState)
}

function map(e1: any, e2: any): Map<boolean, any> {
	const pairs = new Map([
		[true, e1],
		[false, e2],
	])
	return pairs
}

function getNextElement<T>(
	array: T[],
	currentIndex: number,
	setState: Dispatch<SetStateAction<number>>
) {
	const nextIndex = (currentIndex + 1) % array.length // Calculate the next index with wrap-around
	setState(nextIndex)
}

export { map, toggleState, getNextElement }
