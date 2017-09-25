export function findPos(obj) {
    let curTop = 0;
    if (obj.offsetParent) {
        do {
            curTop += obj.offsetTop;
        } while (obj = obj.offsetParent);

        return [curTop];
    }
}

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

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}