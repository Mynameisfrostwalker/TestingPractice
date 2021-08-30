const capitalizeFirstLetter = (string) => {
    let split = string.split("");
    split[0] = split[0].toUpperCase();
    return split.join("");
};

export { capitalizeFirstLetter };