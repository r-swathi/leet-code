// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Brute force - O(n*m) + O(n + m) + O(n*m)
const setZeroes = function(matrix) {
    const matrixLength = matrix.length
    // console.log(matrix)
    for(let i=0; i < matrix.length; i++) {
        for(let j=0; j < matrix[i].length; j++) {
            if(matrix[i][j] === 0) {
                //mark row 
                matrix[i].forEach((ele,index) => ele && (matrix[i][index] = '*'))
                // mark  col
                for(k=0; k < matrixLength; k++) {
                    if(matrix[k][j] !== 0) {
                        matrix[k][j] = '*'
                    }
                }
            }
        }
    }
    matrix.forEach((ele,index) => {
        for(let k =0; k<ele.length; k++) {
            (ele[k] === 0 || ele[k] === '*') && (matrix[index][k] = 0)
        }
    })
    // console.log(matrix)
};

setZeroes([[1,1,1],[1,0,1],[1,1,1]])
setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])
setZeroes([[0,1,2,0],[0,4,5,2],[1,3,1,5]])