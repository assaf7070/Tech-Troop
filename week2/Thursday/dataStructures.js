
//Ex1

class UniqueArray {
  constructor() {
    this.items = []               // array to keep insertion order
    this.itemSet = new Set()      // set to track existence (for O(1) lookup)
  }

  add(item) {
    if (!this.itemSet.has(item)) {
      this.items.push(item)
      this.itemSet.add(item)
    }
  }

  showAll() {
    console.log(this.items)
  }

  exists(item) {
    return this.itemSet.has(item)
  }

  get(index) {
    return index >= 0 && index < this.items.length ? this.items[index] : -1
  }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"
uniqueStuff.showAll()


//Ex2

class UniqueArray2 {
  constructor() {
    this.items = []
  }

  add(item) {
    if (!this.exists(item)) {
      this.items.push(item)
    }
  }

  showAll() {
    console.log(this.items)
  }

  exists(item) {
    return this.items.some(existingItem => this.isEqual(existingItem, item))
  }

  get(index) {
    return index >= 0 && index < this.items.length ? this.items[index] : -1
  }

  // Deep equality checker (works for primitives, arrays, objects)
  isEqual(a, b) {
    if (a === b) return true

    if (typeof a !== typeof b) return false

    if (typeof a === 'object' && a !== null && b !== null) {
      const aKeys = Object.keys(a)
      const bKeys = Object.keys(b)
      if (aKeys.length !== bKeys.length) return false

      for (let key of aKeys) {
        if (!this.isEqual(a[key], b[key])) return false
      }
      return true
    }

    return false
  }
}

const uniqueStuff2 = new UniqueArray2()

uniqueStuff2.add("toy")
uniqueStuff2.add({ x: 3 })
uniqueStuff2.add([1, 2, 3])
uniqueStuff2.add({ x: 3 })          // duplicate object
uniqueStuff2.add([1, 2, 3])         // duplicate array
uniqueStuff2.add("toy")             // duplicate primitive

uniqueStuff2.showAll()
// Expected: ["toy", { x: 3 }, [1, 2, 3]]

console.log(uniqueStuff2.exists("toy"))        // true
console.log(uniqueStuff2.exists({ x: 3 }))     // true
console.log(uniqueStuff2.exists([1, 2, 3]))     // true

console.log(uniqueStuff2.get(1)) // { x: 3 }
console.log(uniqueStuff2.get(5)) // -1




