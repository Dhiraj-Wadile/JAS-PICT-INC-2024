function checkAlphanumeric(input) {
    const regex = new RegExp('^[A-Z0-9]{8}$')
    return !regex.test(input)
}

export {
    checkAlphanumeric,
}