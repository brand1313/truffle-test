const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://172.30.1.39:8501'));


console.log(web3.eth.accounts.decrypt({
    "address":
    "e11b89dc1ebe4efe168c896765c001018c42d3ba",
    "crypto":{
        "cipher":"aes-128-ctr",
        "ciphertext":"1aa92c8ff765f5f1fb73511d0109b24cca58e16636ae7d886f9a8b47a8fa0041",
        "cipherparams":{
            "iv":"ddcbcb8e91e8b44c9c46dc1f11f231e0"
        },
        "kdf":"scrypt",
        "kdfparams":{
            "dklen":32,
            "n":262144,
            "p":1,
            "r":8,
            "salt":"d0b72f60d878f58ba8c61347ee75d1031b374cc3fbdc10de1ddcfa4bbf759c03"
        },
        "mac":"acb0c268e766285e7d13ad7b407cafd90ed7aa175191e7de58166a83890fa868"
    },
    "id":"d4de9168-24b4-426a-96dc-2ebf1aed6476",
    "version":3
},'pine1122'));