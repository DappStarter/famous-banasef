require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy raise mad slow inflict clinic metal ghost'; 
let testAccounts = [
"0x96c311a3dbeb9b6ac4745916e86dfed791015e67caa05a83f3991f0b10067a93",
"0x0ce87c1997c56536a44a4fe58519303c92fc5b623151e1d9c4359f0ec254d6b0",
"0xcbb677798b1069a7a7b71db3caf0e77b62931bd2d08dcc09c90814de00f81202",
"0xab40af1f240a4510e747fa2f85352842c3f0bf2db23347ef9d0c9f35fcd047fc",
"0x3cd4f5a722b227c290dbc488222fa2e150dfa4e395ee07f3bcd7073afa845c07",
"0x3d63cb03ab2519a040251fa1cf5b89307798355cf10ae452258ee4a458c3c240",
"0x6924aa303dc02b20a9481cf0401be03a6cd29ced61d3e2f13242b17b63739991",
"0x8cc9000bf3513cfee163b01d879739b4be48f7ffe3fcfa9f0d5322fd1d180415",
"0xb28dbe99fdbe7ed959b70d7dfdda583c9e6dc915d12c704fe4fb17795f34888c",
"0x71becc02b28464a5e5c7930748f6ebd1b3f918bc4894b7f2d36effbffb601eb6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
