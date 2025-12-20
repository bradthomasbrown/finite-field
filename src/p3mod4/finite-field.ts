import { _7c3dda_ } from "../finite-field.ts";

// Note: This function assumes the order of the field is equivalent to 3 mod 4 and that value `a` is a quadratic residue over the finite field of order `p`.
function sqrt_p3mod4(
    power:(p:bigint|number, b:bigint|number, e:bigint|number)=>bigint,
    p:bigint|number,
    a:bigint|number
):bigint {
    p = BigInt(p);
    a = BigInt(a);
    const e = p + 1n >> 2n;
    return power(p, a, e);
}

/**
 * Notes:
 * - This class assumes the order of the field will be equivalent to 3 mod 4.
 * - This class assumes that you will use `sqrt` with quadratic residues over the finite field of order `p`. The output of `sqrt` on a nonresidue is undefined.
 */
const FiniteField = _7c3dda_(sqrt_p3mod4);

export { FiniteField };