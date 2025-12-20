function _7c3dda_(
    sqrt:(
        power:(
            p:bigint|number,
            b:bigint|number,
            e:bigint|number
        )=>bigint,
        p:bigint|number,
        a:bigint|number
    )=>bigint
) {
    return class FiniteField {

        /**
         * The order of a finite field.
         * @type {bigint}
         */
        p:bigint

        /**
         * Calculate the square root of a value over a finite field of order `p`.
         * @param {bigint|number} a - The value to calculate the square root of.
         * @returns {bigint} The square root of the value.
         */
        sqrt:(a: number|bigint)=>bigint

        constructor(p:bigint)
        constructor(p:number)
        constructor(p:bigint|number) {
            this.p = BigInt(p);
            this.sqrt = (a) => sqrt(FiniteField.power, p, a);
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
         * Return the multiplicative inverse of an integer over this instance of a finite field.
         * @param {bigint|number} a - The integer to find the multiplicative inverse of.
         * @returns {bigint} The additive inverse.
         */
        reciprocal(a:bigint|number):bigint {
            return FiniteField.reciprocal(this.p, a);
        }

        /**
         * Divide two numbers over this instance of a finite field.
         * @param {bigint|number} a - The dividend or first operator of a division operation.
         * @param {bigint|number} b - The divisor or second operator of a division operation.
         * @returns {bigint} The quotient of the dividend and divisor over this instance of a finite field.
         */
        divide(a:bigint|number, b:bigint|number):bigint {
            return FiniteField.divide(this.p, a, b);
        }

        /**
         * Raise a base to the power of an exponent over this finite field.
         * @param {bigint|number} b - The base or first operator of an exponentiation operation.
         * @param {bigint|number} e - The exponent or second operator of a exponentiation operation.
         * @returns {bigint} The power of the base and exponent over this instance of a finite field.
         */
        power(b:bigint|number, e:bigint|number):bigint {
            return FiniteField.power(this.p, b, e);
        }

        /**
         * Add two numbers over a finite field of order `p`.
         * @param {bigint|number} p - The order of the finite field.
         * @param {bigint|number} a - The augend or first operator of an addition operation.
         * @param {bigint|number} b - The addend or second operator of an addition operation.
         * @returns {bigint} The sum of the augend and addend over a finite field of order `p`.
         */
        static add(p:bigint|number, a:bigint|number, b:bigint|number):bigint {
            return (BigInt(a) + BigInt(b)) % BigInt(p);
        }

        /**
         * Multiply two numbers over a finite field of order `p`.
         * @param {bigint|number} p - The order of the finite field.
         * @param {bigint|number} a - The multiplier or first operator of a multiplication operation.
         * @param {bigint|number} b - The multiplicand or second operator of a multiplication operation.
         * @returns {bigint} The product of the multiplier and multiplicand over a finite field of order `p`.
         */
        static multiply(p:bigint|number, a:bigint|number, b:bigint|number):bigint {
            return BigInt(a) * BigInt(b) % BigInt(p);
        }

        /**
         * Return the additive inverse of an integer in a finite field of order `p`.
         * @param {bigint|number} p - The order of the finite field.
         * @param {bigint|number} a - The integer to find the additive inverse of.
         * @returns {bigint} The additive inverse.
         */
        static inverse(p:bigint|number, a:bigint|number):bigint {
            return BigInt(p) - BigInt(a);
        }

        /**
         * Subtract two numbers over a finite field of order `p`.
         * @param {bigint|number} p - The order of the finite field.
         * @param {bigint|number} a - The minuend or first operator of a subtraction operation.
         * @param {bigint|number} b - The subtrahend or second operator of a subtraction operation.
         * @returns {bigint} The difference of the minuend and subtrahend over a finite field of order `p`.
         */
        static subtract(p:bigint|number, a:bigint|number, b:bigint|number):bigint {
            return FiniteField.add(p, a, FiniteField.inverse(p, b));
        }

        /**
         * Return the multiplicative inverse of an integer in a finite field of order `p`.
         * @param {bigint|number} p - The order of the finite field.
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

        /**
         * Divide two numbers over a finite field of order `p`.
         * @param {bigint|number} p - The order of the finite field.
         * @param {bigint|number} a - The dividend or first operator of a division operation.
         * @param {bigint|number} b - The divisor or second operator of a division operation.
         * @returns {bigint} The quotient of the dividend and divisor over a finite field of order `p`.
         */
        static divide(p:bigint|number, a:bigint|number, b:bigint|number):bigint {
            p = BigInt(p);
            a = BigInt(a);
            b = BigInt(b);
            const reciprocalB = FiniteField.reciprocal(p, b);
            return FiniteField.multiply(p, a, reciprocalB);
        }

        /**
         * Raise a base to the power of an exponent over a finite field of order `p`.
         * @param {bigint|number} p - The order of the finite field.
         * @param {bigint|number} b - The base or first operator of an exponentiation operation.
         * @param {bigint|number} e - The exponent or second operator of a exponentiation operation.
         * @returns {bigint} The power of the base and exponent over a finite field of order `p`.
         */
        static power(p:bigint|number, b:bigint|number, e:bigint|number):bigint {
            p = BigInt(p);
            b = BigInt(b);
            e = BigInt(e);
            let _1e_ = 1n;
            for (; e > 0n; e >>= 1n, b = FiniteField.multiply(p, b, b))
                if ((e & 1n) != 0n) _1e_ = FiniteField.multiply(p, _1e_, b);
            return _1e_;
        }

        /**
         * Return whether or not a value is a quadratic residue over a finite field of order `p`.
         * @param {bigint|number} p - The order of the finite field.
         * @param {bigint|number} a - The value to check.
         * @returns {boolean} True if the value is a quadratic residue, false otherwise.
         */
        static qr(p:bigint|number, a:bigint|number):boolean {
            p = BigInt(p);
            a = BigInt(a);
            const e = p - 1n >> 1n;
            return FiniteField.power(p, a, e) == 1n;
        }

    };
}

export { _7c3dda_ };