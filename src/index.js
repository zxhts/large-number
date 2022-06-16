function add(a, b){
    let i = a.length - 1;
    let j = b.length - 1;

    let carry = 0;
    let ret = '';
    while(i >= 0 || j >= 0){
        let x = 0;
        let y = 0;
        let sum;

        if (i >= 0) {
            x = a[i] - '0';
            i --;
        }

        if (j >= 0) {
            y = b[j] - '0';
            j --;
        }

        sum = x + y + carry;

        if(sum >= 10){
            carry = 1;
            sum -= 10;
        }else {
            carry = 0;
        }

        ret = sum + ret;

    }

    if(carry){
        ret = carry + ret;
    }

    return ret;
}

function testFun(){
    return 'this is testFun';
}

const testModule ={
    add,
    testFun
}


/**
 * 此时webpack的output配置的为
 * libraryExport: 'testModule'
 * 以下三种写法均可以
 * 在控制台输入largeNumber.testModule
 * 可以得到{add: ƒ, testFun: ƒ}
 */
export { testModule }

// module.exports = {testModule}

// exports.testModule = testModule



/** 
 * 如果webpack的output配置的为
 * libraryExport: 'default'
 * 则此处导出值必须有default
 */


// export default testModule

// module.exports.default = testModule;

// exports.default = testModule;

