const getQueryVariables = () => {
    const variables = {};

    const queryString = location.search.substr(1);
    const pairs = queryString.split('&');

    for (let i = 0; i < pairs.length; i++) {
        const keyValue = pairs[i].split('=');
        variables[keyValue[0]] = keyValue[1];
    }

    return variables;
}

export default getQueryVariables