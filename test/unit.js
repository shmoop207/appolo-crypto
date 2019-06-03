"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const index_1 = require("../index");
let should = chai.should();
describe("Crypto", function () {
    describe("rsa", function () {
        it('should encrypt decrypt ras keys', async () => {
            let { privateKey, publicKey } = await index_1.Crypto.rsa.generateRsaKeys();
            let encrypt = index_1.Crypto.rsa.encrypt(publicKey, "test");
            let singhId = index_1.Crypto.rsa.sign(privateKey, "test");
            let decrypt = index_1.Crypto.rsa.decrypt(privateKey, encrypt);
            let isValid = index_1.Crypto.rsa.verify(publicKey, singhId, decrypt);
            decrypt.should.be.eq("test");
            isValid.should.be.ok;
        });
    });
    describe("aes", function () {
        it('should encrypt decrypt', async () => {
            let encrypt = index_1.Crypto.aes.encrypt("aaaaaa", "bbbbbbbb");
            let decrypt = index_1.Crypto.aes.decrypt("aaaaaa", encrypt);
            decrypt.should.be.eq("bbbbbbbb");
        });
    });
    describe("md5", function () {
        it('should create valid hash', async () => {
            let has1 = index_1.Crypto.hash.md5("aaaaaa");
            let has2 = index_1.Crypto.hash.md5("aaaaaa");
            has1.should.be.eq(has2);
        });
    });
    describe("salt", function () {
        it('should create salt password', async () => {
            let hashed = await index_1.Crypto.salt.hash("aaaaaa");
            let isValid = await index_1.Crypto.salt.verify("aaaaaa", hashed);
            let isValid2 = await index_1.Crypto.salt.verify("aaaaaa2", hashed);
            isValid.should.be.ok;
            isValid2.should.not.be.ok;
        });
    });
});
//# sourceMappingURL=unit.js.map