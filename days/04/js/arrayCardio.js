const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Xontos, Harald', 'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventors1500 = inventors.filter(inventor => inventor.year > 1500 && inventor.year < 1600);
console.log("inventors1500");
console.table(inventors1500);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log("fullNames");
console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sorted = inventors.sort((a, b) => a.year - b.year);
console.log("sorted");
console.table(sorted);

// 3.b (OWN challenge) Add an age field to all inventors
const inventorsAddedAge = inventors.reduce((arr, item) => {
  arr.push({ ...item, age: item.passed - item.year });
  return arr;
}, []);
console.log("inventorsAddedAge");
console.table(inventorsAddedAge);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalAge = inventors.reduce((total, inventor) => {
  total += inventor.passed - inventor.year;
  return total;
}, 0);
console.log("totalAge");
console.log(totalAge);

// 5. Sort the inventors by years lived
const sortedByAgeOfficial = inventors.sort((a, b) => (b.passed - b.year) - (a.passed - a.year));
console.log("sortedByAgeOfficial");
console.table(sortedByAgeOfficial);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// Im gonna actually scrape that data instead with fetch...
const corsProxy = "https://cors-anywhere.herokuapp.com/";
fetch(corsProxy + "https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris").then(response => response.text())
  .then(text => {
    // replace all links to prevent images from loading
    text = text.replace(/href=["|'](.*?)["|']/g, "");
    text = text.replace(/src=["|'](.*?)["|']/g, "");
    text = text.replace(/srcset=["|'](.*?)["|']/g, "");

    // inject as innerHTML
    const hiddenElement = document.getElementById("hiddenElement");
    hiddenElement.innerHTML = text;

    // scrape data with JS
    const cities = Array.from(document.querySelectorAll(".mw-category a")).map(el => el.text);

    // remove element
    hiddenElement.remove();

    // filter out only cities that contain de anywhere in the name
    console.log("Cities scraped from wikipedia page containing 'de' anywhere in the name");
    console.log(cities.filter(city => city.includes("de")));
  })

// 7. sort Exercise
// Sort the people alphabetically by last name
const peopleSorted = people.sort((a, b) => a.split(", ")[0].localeCompare(b.split(", ")[0]))
console.log("people sorted by last name");
console.log(peopleSorted);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const dict = data.reduce((dict, item) => {
  dict[item] = dict[item] ? dict[item] + 1 : 1;
  return dict;
}, {})
console.log("Count of all items in array");
console.log(dict);

// 9. Remove Duplicates of Array
const uniqueValues = data.filter((item, indx, self) => self.indexOf(item) === indx);
console.log("uniqueValues");
console.log(uniqueValues);
