const isValid = (value) => value !== null && value !== undefined;

const isFunction = (value) => isValid(value) && typeof value === 'function';

export { isValid, isFunction };
