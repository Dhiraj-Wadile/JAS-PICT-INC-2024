function errorParser(err) {
    if (err instanceof Error) {
        if (err.status === 500 || err.status < 200) return { server: 'Error: Internal Server Error. Contact Web Admin' }
        const message = err?.response?.data?.message
        if (message) {
            var parsedError = { error: '' }
            if (Array.isArray(message)) {
                message.forEach(e => {
                    if (e instanceof Object) {
                        for (const key in e) {
                            if (key === 'ticket') parsedError.error = 'Ticket is required or session expired. Please try again.'
                            else if (key === 'admin_data') parsedError.error = 'Session expired. Please login again.'
                            else parsedError[key] = e[key]
                        }
                    } else parsedError = { error: e }
                })
            } else if (message instanceof Object) {
                for (const key in message) {
                    parsedError[key] = message[key]
                }
            } else if (typeof message === 'string') return { error: message }
            return parsedError
        }
        return { error: err?.message }
    }
    return err
}

export default errorParser;