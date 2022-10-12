const getDurationWithoutWeekends = require('./index')

describe('calculating durations in partial days without weekends', function () {
	it('calculates the duration in days between the start of Monday and the end of Friday', function () {
		const start = new Date('2022-10-10').getTime()
		const end = new Date('2022-10-14T23:59:59.999Z').getTime()

		expect(getDurationWithoutWeekends(start, end)).toBe(5)
	})

	it('calculates the duration in days from the start of Monday to noon the same Monday', function () {
		const start = new Date('2022-10-10').getTime()
		const end = new Date('2022-10-10T12:00:00.000Z').getTime()

		expect(getDurationWithoutWeekends(start, end)).toBe(0.5)
	})

	it('caclulates the duration in days from the start of Friday to 18:00 on the following Thursday', function () {
		const start = new Date('2022-10-07').getTime()
		const end = new Date('2022-10-13T18:00:00.000Z').getTime()

		expect(getDurationWithoutWeekends(start, end)).toBe(4.75)
	})

	it('calculates the duration in days from the start of Friday to the end of the following monday, but does not count the weekends', function () {
		const start = new Date('2022-10-14').getTime()
		const end = new Date('2022-10-17T23:59:59.999Z').getTime()

		expect(getDurationWithoutWeekends(start, end)).toBe(2)
	})

	it('calculates the duration in days without counting the weekend when the start time occurs during the weekend', function () {
		const start = new Date('2022-10-01').getTime()
		const end = new Date('2022-10-03T23:59:59.999Z').getTime()

		expect(getDurationWithoutWeekends(start, end)).toBe(1)
	})

	it('calculates the duration in days without counting the weekend when the end time occurs during the weekend', function () {
		const start = new Date('2022-10-07').getTime()
		const end = new Date('2022-10-08T09:32:59.999Z').getTime()

		expect(getDurationWithoutWeekends(start, end)).toBe(1)
	})

	it('calculates the duration in days across several weeks and does not count the weekends', function () {
		const start = new Date('2022-10-01').getTime()
		const end = new Date('2022-10-30T23:59:59.999Z').getTime()

		expect(getDurationWithoutWeekends(start, end)).toBe(20)
	})
})
