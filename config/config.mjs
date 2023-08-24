const config = {
    apiURL: 'http://localhost:8008',
    api: (end_point) => {
        if (typeof end_point === 'string') {
            const apiURL = config.apiURL.concat('/api', '/', end_point);
            return apiURL
        }else {
            return config.apiURL
        }

    }
}

export default config