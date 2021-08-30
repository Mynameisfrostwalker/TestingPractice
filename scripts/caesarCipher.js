
const encode = (string) => {
    let split = string.split("");
    let mapped = split.map((string) => {
        if(string !== " "){
        string = string.charCodeAt(0);
        if(string >= 97 && string <= 122) {
            string = string + 13;
            if(string > 122){
                string = string - 122 + 96;
            }
        }
        if(string >= 65 && string <= 90) {
            string = string + 13;
            if(string > 90){
              string = string - 122 + 96;
            }
        }
        return String.fromCharCode(string)
    }else return string;
    })
    return mapped.join("");
}

export { encode };
