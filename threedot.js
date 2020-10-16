const ages = [10, 13, 20, 23];
const ages2 = [12, 14, 18, 22];
const allAges = ages.concat(ages2).concat([6]);
console.log(allAges);

const ages3 = [10, 13, 20, 23];
const ages4 = [12, 14, 18, 22];
const allAges2 = [...ages3, ...ages4, 6 ]
console.log(allAges2);

const tkaPoisha = [650, 880, 280];
const maximum = Math.max(...tkaPoisha);
console.log(maximum);