function findMatching(arr, name){
    const newArr = arr.filter(element => element.toUpperCase() === name.toUpperCase());
    return newArr;
}

function fuzzyMatch(arr, partialName){
    const newArr = arr.filter(element => element.substring(0,2) === partialName.substring(0,2));
    return newArr;
}

function matchName(arr, objName){
    const newArr = arr.filter(element => element.name === objName);
    return newArr;
}