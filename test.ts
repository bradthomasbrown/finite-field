import { FiniteField as FiniteField1 } from "ff1";
import { FiniteField as FiniteField2 } from "./src/p3mod4/finite-field.ts";

const p = 3 + 4 * 11
const F1 = new FiniteField1(p);
const F2 = new FiniteField2(p);

console.log("sqrt")
for (let i = 1; i < p; i++) {
    const s0 = F1.sqrt_p3mod4(i);
    const s1 = F2.sqrt(i);
    console.log(`\t${i}, ${s1} === ${s0}, ${s1 === s0}`);
    if (s1 !== s0) throw new Error(`mismatch on a = ${i}, [${s0} ${s1}]`);
}
