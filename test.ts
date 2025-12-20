import { FiniteField as FiniteField0 } from "ff1";
import { FiniteField as FiniteField1 } from "@bradthomasbrown/finite-field/p3mod4";

const p = 3 + 4 * 11
const F0 = new FiniteField0(p);
const F1 = new FiniteField1(p);

console.log("sqrt")
for (let i = 1; i < p; i++) {
    const s0 = F0.sqrt_p3mod4(i);
    const s1 = F1.sqrt(i);
    console.log(`\t${i}, ${s1} === ${s0}, ${s1 === s0}`);
    if (s1 !== s0) throw new Error(`mismatch on a = ${i}, [${s0} ${s1}]`);
}
