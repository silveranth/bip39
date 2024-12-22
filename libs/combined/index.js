/* base-x */

module.exports.basex = require('base-x')

/* base32 */

module.exports.base32 = require('base32.js')

/* bchaddrjs */

module.exports.bchaddr = require('bchaddrjs')

/* bchaddrjs slp */

module.exports.bchaddrSlp = require('bchaddrjs-slp')

/* bech32 */

module.exports.bech32 = require('bech32')

/* biginteger */

module.exports.BigInteger = require('javascript-biginteger')

/* bitcoinjs-bip38 */

module.exports.bip38 = require('bip38')

/* bip85 */

module.exports.bip85 = require('bip85')

/* @bitcoinerlab/secp256k1 */

let ecc = require('@bitcoinerlab/secp256k1')

/* bitcoinjs-lib */

let bitcoin = require('bitcoinjs-lib')
bitcoin.initEccLib(ecc);
module.exports.bitcoin = bitcoin;


/* bip32 */

let BIP32Factory  = require('bip32').BIP32Factory

let bip32 = new BIP32Factory(ecc)
module.exports.bip32 = bip32

/* ECPair */

let ECPairFactory = require('ecpair').ECPairFactory;
let ECPairAPI_inst = new ECPairFactory(ecc);

module.exports.ecpair_lib = ECPairAPI_inst;

module.exports.ecc = ecc;
/* buffer */

module.exports.buffer = require('buffer/').Buffer;

/* elastos */
// See https://github.com/iancoleman/bip39/pull/368
// and https://github.com/johnnynanjiang/Elastos.SDK.Keypair.Javascript/tree/iancoleman-bip39

module.exports.elastosjs = require('elastos-wallet-js')

/* ethereum-util */

module.exports.ethUtil = require('ethereumjs-util')

/* fast-levenshtein */

module.exports.levenshtein = require('fast-levenshtein')

/* kjua qr codes */

module.exports.kjua = require('kjua')

/* nebulas */

try {
module.exports.nebulas = require('nebulas')
}
catch (e) {
    console.warn("Error loading nebulas library");
    console.warn(e);
};

/* stellar-util */

let StellarBase = require('stellar-base');
let edHd = require('ed25519-hd-key');
module.exports.edHd = edHd;
module.exports.stellarUtil = {
    getKeypair: function (path, seed) {
        const result = edHd.derivePath(path, seed);
        return StellarBase.Keypair.fromRawEd25519Seed(result.key);
    },
    dummyNetwork: {
        bip32: {public: 0, private: 0},
        messagePrefix: '',
        pubKeyHash: 0,
        scriptHash: 0,
        wif: 0,
    },
}

/* solana */
let sol_addresses = require('@solana/addresses');
let sol_keys = require('@solana/keys');
let { install } = require('@solana/webcrypto-ed25519-polyfill');
install();

module.exports.solana = {
    keys: sol_keys,
    addresses: sol_addresses,
    dummyNetwork: {
        bip32: {public: 0, private: 0},
        messagePrefix: '',
        pubKeyHash: 0,
        scriptHash: 0,
        wif: 0,
    },
};

/* nano-util */
let NanoBase = require('nanocurrency-web');
module.exports.nanoUtil = {
    getKeypair: function (index, seed) {
        const accounts = NanoBase.wallet.accounts(seed, index, index)
        return {privKey: accounts[0].privateKey, pubKey: accounts[0].publicKey, address: accounts[0].address};
    },
    dummyNetwork: {
        bip32: {public: 0, private: 0},
        messagePrefix: '',
        pubKeyHash: 0,
        scriptHash: 0,
        wif: 0,
    },
}

/* unorm */

module.exports.unorm = require('unorm')

/* zxcvbn */

module.exports.zxcvbn = require('zxcvbn')

/* handshake */
module.exports.handshake = require('handshake-util')

/* bs58 */
try {
    module.exports.bs58 = require('bs58')
}
catch (e) {
    console.warn("Error loading bs58 library");
    console.warn(e);
};

/* create-hash */
try {
    module.exports.createHash = require('create-hash')
}
catch (e) {
    console.warn("Error loading create-hash library");
    console.warn(e);
};

