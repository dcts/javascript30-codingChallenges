// Shuffling Arrays
const array = [1,2,3,4,5,6,6,1,1,2];
array.sort(item => Math.random() < 0.5 ? 1 : -1);

// sum all values of array
array.reduce((a,b) => a + b);

// Max/Min value of array with spread operator
Math.max(...arr)
Math.min(...arr)

// remove duplicates of array
array.filter((item, index, self) => self.indexOf(item) === index);
