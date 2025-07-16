const exercises = require('./exercises')


test("Is even:", () => {
    const ex = new exercises()
    expect(ex.isEven(6)).toBeTruthy()
    expect(ex.isEven(7)).toBeFalsy()
    expect(ex.isEven(8)).toBeTruthy()
    expect(ex.isEven(13)).toBeFalsy()

})


test("remove from array:", () => {
    const ex = new exercises()
    const arr = [1,2,3,4,5,6,7,8,9,0];
    ex.removeAtLeastOne(arr);
    expect(arr.length).toBeLessThan(10);
    ex.removeAtLeastOne(arr);
    const len = arr.length;
    expect(arr.length).toBeLessThanOrEqual(len);

})

test(`string without these symbols: "!", "#", ".", ",", "'":`, () => {
    const ex = new exercises()
    expect(ex.simplify("ahhah!,hh")).toBe("ahhahhh")
    expect(ex.simplify("As#.s.af !Shu'k!run#")).toBe("Assaf Shukrun")

})

test("validate", () => {
    const ex = new exercises()
    expect(ex.validate([])).toEqual({error: "Need at least one boolean"})
    expect(ex.validate([1,2,3])).toEqual({error: "Need at least one boolean"})
    expect(ex.validate([true,false,true])).toBeTruthy();
    expect(ex.validate([true,false,false])).toBeFalsy();
    expect(ex.validate([true,false])).toBeFalsy();
    expect(ex.validate([1, 'false', null])).toEqual({error: "Need at least one boolean"})
    expect(ex.validate([true, 'x', false, 0])).toBeFalsy();

})

test("add uses push", () => {
  const pushSpy = jest.spyOn(Array.prototype, 'push');
  const ex = new exercises();
  ex.add(1, 2);
  
  expect(pushSpy).toHaveBeenCalled();
  expect(pushSpy).toHaveBeenCalledWith(1, 2);
  pushSpy.mockRestore();
});




