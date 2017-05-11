function reverseString(str) {

    if(str === ""){
        return null;
    }else if(str === NaN){
        return true;
    }
    var splitString = str.split("");
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 

    if(joinArray === str){
        return true;
    }else{
        return joinArray; // "olleh"
    }
}

exports.reverseString = reverseString; 