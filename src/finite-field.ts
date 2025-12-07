/**
 * The FiniteField class.
 */
class FiniteField {

    /**
     * The number of elements in a finite field.
     * @type {bigint}
     */
    p:bigint

    /**
     * Creates an instance of a finite field.
     * @param {bigint|number} p - The number of elements in a finite field.
     */
    constructor(p:bigint)
    constructor(p:number)
    constructor(p:bigint|number) {
        this.p = BigInt(p);
    }

    /**
     * Add two numbers over this instance of a finite field.
     * @param {bigint|number} a - The augend or first operator of an addition operation.
     * @param {bigint|number} b - The addend or second operator of an addition operation.
     * @returns {bigint} The sum of the augend and addend over this instance of a finite field.
     */
    add(a:bigint|number, b:bigint|number):bigint {
        return FiniteField.add(this.p, a, b);
    }

    /**
     * Multiply two numbers over this instance of a finite field.
     * @param {bigint|number} a - The multiplier or first operator of a multiplication operation.
     * @param {bigint|number} b - The multiplicand or second operator of a multiplication operation.
     * @returns {bigint} The product of the multiplier and multiplicand over this instance of a finite field.
     */
    multiply(a:bigint|number, b:bigint|number):bigint {
        return FiniteField.multiply(this.p, a, b);
    }

    /**
     * Return the additive inverse of an integer in this finite field.
     * @param {bigint|number} a - The integer to find the additive inverse of.
     * @returns {bigint} The additive inverse.
     */
    inverse(a:bigint|number):bigint {
        return FiniteField.inverse(this.p, a);
    }

    /**
     * Subtract two numbers over this instance of a finite field.
     * @param {bigint|number} a - The minuend or first operator of a subtraction operation.
     * @param {bigint|number} b - The subtrahend or second operator of a subtraction operation.
     * @returns {bigint} The difference of the minuend and subtrahend over this instance of a finite field.
     */
    subtract(a:bigint|number, b:bigint|number):bigint {
        return FiniteField.subtract(this.p, a, b);
    }

    /**
     * Return the multiplicative inverse of an integer in this finite field.
     * @param {bigint|number} a - The integer to find the multiplicative inverse of.
     * @returns {bigint} The additive inverse.
     */
    reciprocal(a:bigint|number):bigint {
        return FiniteField.reciprocal(this.p, a);
    }

    /**
     * Add two numbers over a finite field of order `p`.
     * @param {bigint|number} a - The augend or first operator of an addition operation.
     * @param {bigint|number} b - The addend or second operator of an addition operation.
     * @returns {bigint} The sum of the augend and addend over a finite field of order `p`.
     */
    static add(p:bigint|number, a:bigint|number, b:bigint|number):bigint {
        return (BigInt(a) + BigInt(b)) % BigInt(p);
    }

    /**
     * Multiply two numbers over a finite field of order `p`.
     * @param {bigint|number} a - The multiplier or first operator of a multiplication operation.
     * @param {bigint|number} b - The multiplicand or second operator of a multiplication operation.
     * @returns {bigint} The product of the multiplier and multiplicand over a finite field of order `p`.
     */
    static multiply(p:bigint|number, a:bigint|number, b:bigint|number):bigint {
        return BigInt(a) * BigInt(b) % BigInt(p);
    }

    /**
     * Return the additive inverse of an integer in a finite field of order `p`.
     * @param {bigint|number} a - The integer to find the additive inverse of.
     * @returns {bigint} The additive inverse.
     */
    static inverse(p:bigint|number, a:bigint|number):bigint {
        return BigInt(p) - BigInt(a);
    }

    /**
     * Subtract two numbers over a finite field of order `p`.
     * @param {bigint|number} a - The minuend or first operator of a subtraction operation.
     * @param {bigint|number} b - The subtrahend or second operator of a subtraction operation.
     * @returns {bigint} The difference of the minuend and subtrahend over a finite field of order `p`.
     */
    static subtract(p:bigint|number, a:bigint|number, b:bigint|number):bigint {
        return FiniteField.add(p, a, FiniteField.inverse(p, b));
    }

    /**
     * Return the multiplicative inverse of an integer in a finite field of order `p`.
     * @param {bigint|number} a - The integer to find the multiplicative inverse of.
     * @returns {bigint} The additive inverse.
     */
    static reciprocal(p:bigint|number, a:bigint|number):bigint {
        p = BigInt(p);
        a = BigInt(a);
        if (a == 1n) return 1n;
        const rate = p % a;
        const error = (a - 1n) % rate;
        const k = error == 0n ? 1n : FiniteField.reciprocal(rate, a % rate);
        const passes = (k * a - 1n) / rate;
        const result = (p * passes + 1n) / a;
        return result;
    }

}

export { FiniteField };