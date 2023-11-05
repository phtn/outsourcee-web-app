import { useState as useStateMock } from 'react'
import { getNextElement, map } from '../_utils/helpers'
import { jest, describe, test, it, beforeEach, expect } from '@jest/globals'

describe('Map array - map', () => {
	it('returns a pair', () => {
		const pair = map(1, 2)
		expect(pair).toHaveLength(2)
	})
	it('returns the first value if true', () => {
		const options = map('first', 'second')
		const value = options.get(true)
		expect(value).toEqual('first')
	})
	it('returns the second value if false', () => {
		const options = map('first', 'second')
		const value = options.get(false)
		expect(value).toEqual('second')
	})
	it('returns the correct type "number"', () => {
		const options = map(1, 'str')
		const value = options.get(true)
		const valueType = typeof value
		expect(valueType).toBe('number')
	})
	it('returns the correct type "string"', () => {
		const options = map(1, 'str')
		const value = options.get(false)
		const valueType = typeof value
		expect(valueType).toBe('string')
	})
})

test('getNextElement - setState is called', () => {
	const setState = jest.fn()

	beforeEach(() => {
		;(useStateMock as jest.Mock).mockImplementation((init) => [init, setState])
	})

	getNextElement([1, 2], 0, setState)
	expect(setState).toHaveBeenCalled()

	const element = getNextElement([1, 2], 0, setState)
	expect(element).toEqual(0)
})
