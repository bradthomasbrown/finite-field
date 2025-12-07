# finite-field
This is a simple, minimal implementation of finite field arithmetic in TypeScript/JavaScript. 

## Why?
There is surprisingly little information on all aspects of the "cryptographic stack" in JavaScript and elsewhere that is simple and minimal. This repository is part of a series of repositories that builds up this stack from first principles, including:
- Finite field arithmetic (this repository)
- Elliptic curves over finite fields
- Sponge constructions
- Keccak
- The concrete instances of secp256k1, Keccak-256, and more as well as how these are made from the above concepts
- ECDSA
- Interacting with EVM nodes
- And potentially more

## Installation
```sh
npm i @bradthomasbrown/finite-field
```

## Usage
```js
import { FiniteField } from "finite-field";

const p = 7;
const q =
      (1n << 256n)
    - (1n << 32n)
    - 977n;

const F = new FiniteField(p);
const G = new FiniteField(q);

console.log(FiniteField.subtract(13, 0, 1));
// 12n

console.log(F.add(5, 6));
// 4n

console.log(F.multiply(5, 6));
// 2n

const inverse_3 = G.inverse(3);
const reciprocal_3 = G.reciprocal(3);

console.log(inverse_3);
// 115792089237316195423570985008687907853269984665640564039457584007908834671660n

console.log(reciprocal_3);
// 77194726158210796949047323339125271902179989777093709359638389338605889781109n

console.log(G.add(inverse_3, 3));
// 0n

console.log(G.multiply(reciprocal_3, 3));
// 1n
```