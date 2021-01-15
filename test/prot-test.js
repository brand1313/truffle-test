const PROTtoken = artifacts.require("PROTtoken");

contract('PROT 토큰',(accounts) => {

    const PROT = PROTtoken.deployed(); 

    it('1212000000 수량이 첫번째 계정에 초기 전달 되어야 한다.',() => {
        return PROT.then((instance) => {
            return instance.balanceOf.call(accounts[0]);
        })
        .then((balance) => {
            assert.equal(balance.valueOf(), 1212000000*(10**18), "초기 전달 실패")
        });
    });

    it('심볼은 prot가 되어야 한다.', ()=>{
        return PROT.then((instance) => {
            return instance.symbol.call();
        })
        .then((symbol) => {
            assert.equal(symbol, 'prot', '심볼 오류 : prot가 아님')
        })
    })

    it('transfer 함수가 정확히 작동한다.', () => {
        
        let PROTinstance;
        const account00 = accounts[0];
        let balanceOfAccount00;
        let balanceOfAccount00_last;
        const account01 = accounts[1];
        let balanceOfAccount01;
        let balanceOfAccount01_last;
        let amount = 100;
        
        return PROT.then(instance => {
            PROTinstance = instance;
            return PROTinstance.balanceOf.call(account00);
        })
        .then((balance) => {
            balanceOfAccount00 = balance.valueOf();
            return PROTinstance.balanceOf.call(account01);
        })
        .then((balance) => {
            balanceOfAccount01 = balance.valueOf();
            return PROTinstance.transfer(account01,amount,{from:account00});
        })
        .then(() => {
            return PROTinstance.balanceOf.call(account00);
        })
        .then((balance) => {
            balanceOfAccount00_last = balance.valueOf();
            // console.log(balance.valueOf());
            return PROTinstance.balanceOf.call(account01);
        })
        .then((balance) => {
            balanceOfAccount01_last = balance.valueOf();
            assert.equal(balanceOfAccount00_last,balanceOfAccount00-amount, 'transfer 함수 오작동');
            assert.equal(balanceOfAccount01_last,parseInt((balanceOfAccount01 + amount)), 'transfer 함수 오작동');
        })
    })
})