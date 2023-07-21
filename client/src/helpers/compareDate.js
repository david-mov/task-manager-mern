export const compareDate = (date) => {
  let miliseconds = Math.abs(new Date() - date)
  const diff = {}

  diff.years = Math.floor(miliseconds / 3.15576e10)
  miliseconds = miliseconds - diff.years * 3.15576e10

  diff.months = Math.floor(miliseconds / 2.6298e9)
  miliseconds = miliseconds - diff.months * 2.6298e9

  diff.weeks = Math.floor(miliseconds / 6.048e8)
  miliseconds = miliseconds - diff.weeks * 6.048e8

  diff.days = Math.floor(miliseconds / 8.64e7)
  miliseconds = miliseconds - diff.days * 8.64e7

  diff.minutes = Math.floor(miliseconds / 60000)
  miliseconds = miliseconds - diff.minutes * 60000

  diff.seconds = Math.floor(miliseconds / 1000)
  miliseconds = miliseconds - diff.seconds * 1000

  diff.text = diff.years
    ? diff.years === 1
      ? '1 year'
      : diff.years + ' years'
    : diff.months
    ? diff.months === 1
      ? '1 month'
      : diff.months + ' months'
    : diff.weeks
    ? diff.weeks === 1
      ? '1 week'
      : diff.weeks + ' weeks'
    : diff.days
    ? diff.days === 1
      ? '1 day'
      : diff.days + ' days'
    : diff.minutes
    ? diff.minutes === 1
      ? '1 minute'
      : diff.minutes + ' minutes'
    : diff.seconds
    ? diff.seconds === 1
      ? '1 second'
      : diff.seconds + ' seconds'
    : '0 seconds'

  return diff
}
