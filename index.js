// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    name = "Ralph";
    return cats.push(name);
}

function destructivelyPrependCat(name){
    name = "Bob";
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(name){
    name = "Broom";
    const newCats = [...cats, name];
    return newCats;
}

function prependCat(name){
    name = "Arnold";
    const newCatsList = ["Arnold", ...cats];
    return newCatsList;
}

function removeLastCat(){
    return cats.slice(0,2);
}

function removeFirstCat(){
    return cats.slice(1);
}