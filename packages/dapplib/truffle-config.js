require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install infant fox turn fan release night hospital include praise army gas'; 
let testAccounts = [
"0x287b931ef2850cb4fb020bbaa0481e0a1d6ef6a4b3f4da38d18ddab5e8f348ab",
"0x4e90bcae3bc6298caa5f40a0f5ff8e1528e572d4e94db4b03dd4cb3bd1be9a9a",
"0x0ea82cde8f36bdc7b622068322849062df211e766ab1d23d001583a5513fa733",
"0x166777a11c14c404a209a61cc892702a02491fcd5bc9d73fbef7692fab62c475",
"0x6530aea8330a8065c2c03353c77c054ea69f16abb516e5df63a6cb31d1b3cc34",
"0xa0aa29c958e4604c889258a85ea83a8e5c01381a7d88196477d39acf593e4476",
"0xa54f74a93ace9e016d8ce96ecaa68f76c4ec7528eb87abbb0b6987f87047f669",
"0x05ff54ba5f6583ea64583a3a335e7933e913f3fe190e0ad1ea496839d8a52f3b",
"0x857e4b6f983bbfa584161f2ade74d10462ac4f06a7f7e78c1fc4cf6df3cb3cd0",
"0x49c737c969aed421e3c4d86330a7d5e6d67ab4311df1db71ab9bf8f4838cc36b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

