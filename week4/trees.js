// class Node {
//     constructor(value){
//         this.value = value;
//         this.leftChild = null;
//         this.rightChild = null;
//     }
//     insertLeft(value) {
//         if (!this.leftChild) {
//             this.leftChild = new Node(value);
//         } else {
//             let newNode = new Node(value);
//             newNode.leftChild = this.leftChild;
//             this.leftChild = newNode
//         }
//     }

//     insertRight(value) {
//         if (!this.rightChild) {
//             this.rightChild = new Node(value);
//         } else {
//             let newNode = new Node(value);
//             newNode.rightChild = this.rightChild;
//             this.rightChild = newNode
//         }
//     }
// }


// const H = new Node("H")
// //left and right inserts

// // const E = new Node("E")
// H.insertLeft("E");
// H.leftChild.insertRight("G");
// H.insertRight("S");
// H.rightChild.insertLeft("L")
// H.rightChild.leftChild.insertLeft("I");
// H.rightChild.insertRight("Y");

// console.log(H)


class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }

    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if (newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }

    //Ex1
    findNode(value) {
        if (this.value === value) return true;

        const leftResult = this.leftChild ? this.leftChild.findNode(value) : false;
        const rightResult = this.rightChild ? this.rightChild.findNode(value) : false;

        return leftResult || rightResult;
    }

    //Ex2
    findCommonParent(val1, val2) {
        if (val1 === this.leftChild.value || val2 === this.rightChild.value || val1 === this.rightChild.value || val2 === this.leftChild.value)
            return this.value;
        if (val1 < this.value && val2 < this.value)
            return this.leftChild.findCommonParent(val1, val2);
        if (val1 > this.value && val2 > this.value)
            return this.rightChild.findCommonParent(val1, val2);
        return this.value;
    }

    //Ex3
    findMax(node) {
        while (node.rightChild) {
            node = node.rightChild
        }
        return node.value
    }


    removeNode(node, val) {
        if (!node) return null

        if (val < node.value) {
            node.leftChild = this.removeNode(node.leftChild, val)
        } else if (val > node.value) {
            node.rightChild = this.removeNode(node.rightChild, val)
        } else {
            
            if (!node.leftChild && !node.rightChild) {
                return null
            }

            if (!node.leftChild) return node.rightChild
            if (!node.rightChild) return node.leftChild

            const maxVal = this.findMax(node.leftChild)
            node.value = maxVal
            node.leftChild = this.removeNode(node.leftChild, maxVal)
        }

        return node
    }

}

// const bsTree = new BSNode("H");
// bsTree.insertNode("E")
// bsTree.insertNode("S")
// bsTree.insertNode("G")
// bsTree.insertNode("L")
// bsTree.insertNode("Y")
// bsTree.insertNode("I")
// // console.log(HBS)

// //Use the following to test
// console.log(bsTree.findNode("H")) // should print true
// console.log(bsTree.findNode("G")) // should print true
// console.log(bsTree.findNode("Z")) // should print false
// console.log(bsTree.findNode("F")) // should print false
// console.log(bsTree.findNode("y")) // should print false - we didn't make the tree case sensitive!


// const bsTree2 = new BSNode("J");
// bsTree2.insertNode("H")
// bsTree2.insertNode("R")
// bsTree2.insertNode("E")
// bsTree2.insertNode("S")
// bsTree2.insertNode("P")
// bsTree2.insertNode("G")
// bsTree2.insertNode("B")
// bsTree2.insertNode("L")
// bsTree2.insertNode("Y")
// bsTree2.insertNode("I")


// console.log(bsTree2.findCommonParent("B", "I")) //should return "H"
// console.log(bsTree2.findCommonParent("B", "G")) //should return "E"
// console.log(bsTree2.findCommonParent("B", "L")) //should return "J"
// console.log(bsTree2.findCommonParent("L", "Y")) //should return "R"
// console.log(bsTree2.findCommonParent("E", "H")) //should return "J"


const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree like the first image (the 9 will be deletied) 

let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5) 

