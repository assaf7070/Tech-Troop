const allFunctions = require('./code')

test("add should return sum of a + b", () => {
    let sum = allFunctions.add(1, 2)
    expect(sum).toBe(3)
})

test("a^2 + b^2 = ", () => {
    let hyp = allFunctions.calculateHyp(3,4)
    expect(hyp).toBe(5)
})


