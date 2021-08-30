const reverseString = (string) => {
    let split = string.split("");
    let newArray = [];
    for (let i = 0; i < split.length; i++) {
        newArray[i] = split[split.length - (i + 1)]
    }
    return newArray.join("");
};

export { reverseString };