export default class ArraySchema {
    constructor() {
        this.onlyIntegers = false
    }

    integers() {
        this.onlyIntegers = true
        return this;
    }

    isValid(value) {
        if (!Array.isArray(value)) {
            return false;
        }

        if (this.onlyIntegers) {
            return value.length > 0 && value.every((item) => Number.isInteger(item))
        }

        return true
    }
}