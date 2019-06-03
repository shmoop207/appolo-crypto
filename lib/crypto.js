"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rsa_1 = require("./rsa");
const aes_1 = require("./aes");
const hash_1 = require("./hash");
const salt_1 = require("./salt");
class Crypto {
    static get aes() {
        return aes_1.Aes;
    }
    static get rsa() {
        return rsa_1.Rsa;
    }
    static get hash() {
        return hash_1.Hash;
    }
    static get salt() {
        return salt_1.Salt;
    }
}
exports.Crypto = Crypto;
//# sourceMappingURL=crypto.js.map