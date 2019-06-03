"use strict";
import chai = require('chai');
import Q = require('bluebird');
import {Crypto} from "../index";

let should = chai.should();

describe("Crypto", function () {

    describe("rsa", function () {
        it('should encrypt decrypt ras keys', async () => {

            let {privateKey, publicKey} = await Crypto.rsa.generateRsaKeys();

            let encrypt = Crypto.rsa.encrypt(publicKey, "test");
            let singhId = Crypto.rsa.sign(privateKey, "test");

            let decrypt = Crypto.rsa.decrypt(privateKey, encrypt);
            let isValid = Crypto.rsa.verify(publicKey, singhId, decrypt);

            decrypt.should.be.eq("test");
            isValid.should.be.ok;
        });

    });
    describe("aes", function () {
        it('should encrypt decrypt', async () => {

            let encrypt = Crypto.aes.encrypt("aaaaaa", "bbbbbbbb")

            let decrypt = Crypto.aes.decrypt("aaaaaa", encrypt);

            decrypt.should.be.eq("bbbbbbbb")

        });

    });

    describe("md5", function () {
        it('should create valid hash', async () => {

            let has1 = Crypto.hash.md5("aaaaaa");
            let has2 = Crypto.hash.md5("aaaaaa");

            has1.should.be.eq(has2)

        });

    });

    describe("salt", function () {
        it('should create salt password', async () => {

            let hashed = await Crypto.salt.hash("aaaaaa");
            let isValid = await Crypto.salt.verify("aaaaaa", hashed);
            let isValid2 = await Crypto.salt.verify("aaaaaa2", hashed);

            isValid.should.be.ok;
            isValid2.should.not.be.ok;

        });

    });


});
