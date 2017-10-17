const ajax = {
    get(url, callback) {
        callback = callback || function() {}

        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && callback) {
                callback(xhr.response)
            }
        };
        xhr.open('get', url, true)
        xhr.send()
    },

    post(url, formData, callback) {
        callback = callback || function() {}

        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && callback) {
                callback(xhr.response)
            }
        };
        xhr.open('post', url, true)
        xhr.send(formData)
    },
};

export default ajax