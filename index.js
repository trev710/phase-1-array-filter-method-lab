function findMatching(arr,str){
    let match = arr.filter(name=> str.toUpperCase() === name.toUpperCase());{
        
        return match// return match.toUpperCase()
    }
}
function fuzzyMatch(arr,str){
let fuzzy = arr.filter(name=> name.substring(0,str.length)=== str);
    return fuzzy
}
function matchName(arr,str){
    let gotIt = arr.filter(obj=> obj.name=== str);
    return gotIt

}