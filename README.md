# Coding Challenge 
## Calculate the duration between timestamps without including the weekends

The goal here is to simply calculate the duration between to date, assuming that the second (to/end) date is always later than the first (start,from) date.

* The arguments will be given in epoch millisecond timestamps.
* All dates should be UTC.
* Round to maximum 3 decimal places. 
    * This doesn't matter so much, but it's just to get the tests to pass.

The difference between the start of Monday 00:00:00.000Z and Friday 23:59:59.999Z should be 5 days. While technically it's 1ms less than 5 days, the rounding in JS works in such a way that it's 5.

```js
const start = new Date('2022-10-10').getTime() // 1665360000000
const end = new Date('2022-10-14T23:59:59.999Z').getTime() // 1665791999999
const difference = (end - start) / 1000 / 60 / 60 / 24  // 4.999999988425926
Math.round(difference * 1000) / 1000 / 5 // 5
```
So some of the rounding might be slightly off due to float precision, but the tests are using pretty straight-forward numbers so it shouldn't be an issue.

### See if you can get the tests to pass.
