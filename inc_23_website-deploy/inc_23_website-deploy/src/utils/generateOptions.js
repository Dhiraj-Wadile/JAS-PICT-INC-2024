function generateOptions(min, max) {
    let options = []
    for (let i = min; i <= max; i++) {
        options.push({ value: i, label: i })
    }
    return options
}

export default generateOptions;