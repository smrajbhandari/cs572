// Using ES6 features

String.prototype.filterWords = function(list) {
 
 const words = this.split(" ");
 
 const final = words.map(x => list.includes(x)?"***": x)
;
 return final.join(" ");

}

console.log("This house is nice !".filterWords(["house", "nice"]));



// Promises

String.prototype.filterWords = function(list) {
    const myString = this;
  const pro=new Promise(function(resolve,reject){
    const words = myString.split(" ");
  const final = words.map(x => list.includes(x)?"***": x);
    resolve(final.join(" "));
  });
  pro.then(data=>console.log(data));
}
"This house is nice !".filterWords(["house", "nice"]);

// Async/Await



String.prototype.filterWords = async function(list) {
  try {
    const myString = this;
    let finalData = await getData(this, list);
  }
  catch(e) {
    console.log(e);
  }
  return true;
}
const getData = function(string, list) {
  const words = string.split(" ");
  const final = words.map(x => list.includes(x)?"***": x);
  console.log(final.join(" "));

}
"This house is nice !".filterWords(["house", "nice"]);



// Observables


String.prototype.filterWords = function(list) {
  const {
    from
  } = rxjs;
  const {
    map, reduce, flatMap
  } = rxjs.operators;
  let finalData;

  from(this.split(" ")).pipe(
    map(x => list.includes(x)?"***": x),
    reduce((x, y) => x+" "+y)
  )
  .subscribe(x => finalData = x);
  return finalData;
}
console.log("This house is nice !".filterWords(["house", "nice"]));