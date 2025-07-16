const add = function(a, b){
    return a + b
}



const calculateHyp = function(a,b) {
    const hyp = Math.sqrt(a*a + b*b)
    // console.log(hyp)
    return hyp;
}

// calculateHyp(3,4)

module.exports = {add,calculateHyp}
