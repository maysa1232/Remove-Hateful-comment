function RemoveVowl(str){
    return (str || "").replace(/[aeiou]/gi, '');
}


const str = "This comment is a loser LOL";
console.log(RemoveVowl(str));