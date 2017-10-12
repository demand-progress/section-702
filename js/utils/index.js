import state from '../store/state'
import { urls, config } from '../store/config' 

export function getQueryVariables() {
    const variables = {};

    const queryString = location.search.substr(1);
    const pairs = queryString.split('&');

    for (let i = 0; i < pairs.length; i++) {
        const keyValue = pairs[i].split('=');
        variables[keyValue[0]] = keyValue[1];
    }

    return variables;
}

export function getSource() {
    const source = state.query.source || 'website';
    return source.toLowerCase();
}

export function findPos(obj) {
    let curTop = 0;
    if (obj.offsetParent) {
        do {
            curTop += obj.offsetTop;
        } while (obj = obj.offsetParent);

        return [curTop];
    }
}

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Setup shortcuts for AJAX.
export const ajax = {
    get: function(url, callback) {
        callback = callback || function() {};

        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && callback) {
                callback(xhr.response);
            }
        };
        xhr.open('get', url, true);
        xhr.send();
    },

    post: function(url, formData, callback) {
        callback = callback || function() {};

        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && callback) {
                callback(xhr.response);
            }
        };
        xhr.open('post', url, true);
        xhr.send(formData);
    },
};