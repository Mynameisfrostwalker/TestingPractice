

const max = (arr) => {
    let sorted = arr.sort((a, b) => {
        return a - b;
    })
    return sorted[sorted.length - 1];
}

const min = (arr) => {
    let sorted = arr.sort((a, b) => {
        return a - b;
    })
    return sorted[0];
}

const average = (arr) => {
    let sum = arr.reduce((acc, curr) => {
        return acc + curr
    }, 0);
    return sum / arr.length
}

const analyze = (array) => {
    return {
        average: average(array),
        min: min(array),
        max: max(array),
        length: array.length,
    }
}

export { analyze };