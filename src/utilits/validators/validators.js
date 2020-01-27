export const required = value => {
    if(value) return undefined;

    return 'Error: Field is required';
}

export const maxLength = count => value => {
    if(value.length > count) return `Error: Max length is ${count} symbols`;
    return undefined
}