const readlinesync = require("readline-sync");
const { isRowsame, isColumeSame, isSquareMatrix } = require("./help.js");

function inputMatrix() {
  // Number of rows
  const rows = readlinesync.questionInt("Enter the Number of rows:");
  // Number of columns
  const columns = readlinesync.questionInt("Enter the Number of columns:");

  let matrix = [];

  // Takeing the input from the user one by one
  for (let i = 0; i < rows; i++) {
    matrix.push([]);
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = readlinesync.questionInt(
        `Enter the value for index ${i}${j}:`
      );
    }
  }
  console.log(matrix);
  return matrix;
}

function Addition() {
  // taking input from user
  let matrix1 = inputMatrix();
  let matrix2 = inputMatrix();

  if (!isRowsame(matrix1, matrix2)) {
    console.log("The rows are different! please Try again.");
    return;
  }
  if (!isColumeSame(matrix1, matrix2)) {
    console.log("The columns are different! please Try again.");
    return;
  }
  const result = [];
  for (let i = 0; i < matrix1.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix1[i].length; j++) {
      result[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }
  console.log("Resulted Matrix:");
  console.log(result);
}

function subtration() {
  // taking input from user
  let matrix1 = inputMatrix();
  let matrix2 = inputMatrix();

  if (!isRowsame(matrix1, matrix2)) {
    console.log("The rows are different! please Try again.");
    return;
  }
  if (!isColumeSame(matrix1, matrix2)) {
    console.log("The columns are different! please Try again.");
    return;
  }
  const result = [];
  for (let i = 0; i < matrix1.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix1[i].length; j++) {
      result[i][j] = matrix1[i][j] - matrix2[i][j];
    }
  }
  console.log("Resulted Matrix:");
  console.log(result);
}

function diagonal() {
  let matrix = inputMatrix();

  if (!isSquareMatrix(matrix)) {
    console.log("The matrix is not a square matrix:");
  }
  return;
  const diagonalElement = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // non-diagonal elements
      if (i != j) {
        if (matrix[i][j] != 0) {
          console.log([]);
          return;
        }
      }
      // diagonal elements
      if (i == j) {
        diagonalElement.push(matrix[i][j]);
      }
    }
  }
   console.log("Diagonal Elements are",diagonalElement);
}

function trace() {
  const matrix = inputMatrix();

  if (!isSquareMatrix(matrix)) {
    console.log("The matrix is not a square matrix! Please try again.");
    return;
  }
  let traceof = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // diagonal elements
      if (i == j) {
        trace += matrix[i][j];
      }
    }
  }
   console.log("Trace of the Matrix:", trace);
}

module.exports = { Addition, subtration, diagonal, trace };
