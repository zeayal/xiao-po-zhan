---
title: 15. Errors
tags:
  - solidity
  - advanced
  - wtfacademy
  - error
  - revert/assert/require
---

# WTF Solidity Tutorial: 15. Errors

Recently, I have been revisiting Solidity, consolidating the finer details, and writing "WTF Solidity" tutorials for newbies. 

Twitter: [@0xAA_Science](https://twitter.com/0xAA_Science) | [@WTFAcademy_](https://twitter.com/WTFAcademy_)

Community: [Discord](https://discord.wtf.academy)｜[Wechat](https://docs.google.com/forms/d/e/1FAIpQLSe4KGT8Sh6sJ7hedQRuIYirOoZK_85miz3dw7vA1-YjodgJ-A/viewform?usp=sf_link)｜[Website wtf.academy](https://wtf.academy)

Codes and tutorials are open source on GitHub: [github.com/AmazingAng/WTFSolidity](https://github.com/AmazingAng/WTFSolidity)

-----

In this chapter, we will introduce three ways to throw exceptions in solidity: `error`, `require`, and `assert`. We will also compare their `gas` consumption.

## Errors
Solidity has many functions for error handling. Errors can occur at compile time or runtime. 

### Error
`error` command is a new feature in solidity version `0.8`, which is both convenient and gas-saving to explain to users why the operation failed. It is the recommended way to throw error in solidity.
Custom errors are defined using the error statement, which can be used inside and outside of contracts. Below, we created a `TransferNotOwner` error, which will throw an error when the caller is not the token `owner` during transfer:

```solidity
error TransferNotOwner(); // custom error
```
During execution, `error` must be used with the `revert` command.
```solidity
    function transferOwner1(uint256 tokenId, address newOwner) public {
        if(_owners[tokenId] != msg.sender){
            revert TransferNotOwner();
        }
        _owners[tokenId] = newOwner;
    }
```
The `transferOwner1()` function will check if the caller is the owner of the token; if not, it will throw a `TransferNotOwner` exception and the transaction will revert.

### Require
`require` command was the most commonly used method for throwing exceptions prior to solidity version `0.8`. It is still popular among developers. 

Syntax of `require`: 
```
require(condition, "error message");
```

An exception will be thrown when the condition is not met.

Despite its simplicity, the gas consumption is higher than  `error` command: the gas consumption grows linearly as the length of the error message increases. 

Now, let's rewrite the above `transferOwner` function with the `require` command:
```solidity
    function transferOwner2(uint256 tokenId, address newOwner) public {
        require(_owners[tokenId] == msg.sender, "Transfer Not Owner");
        _owners[tokenId] = newOwner;
    }
```

### Assert
The `assert` command is generally used for debugging purposes, because it does not include error message.
Syntax of `asset`: 
```solidity
`assert (condition to be checked);
```
When the  condition is not met, an exception will be thrown.

Let's rewrite the above `transferOwner` function with the `assert` command:
```solidity
    function transferOwner3(uint256 tokenId, address newOwner) public {
        assert(_owners[tokenId] == msg.sender);
        _owners[tokenId] = newOwner;
    }
```

## Remix Demo
After deploying `Error` contract.

1. `error`: Enter any `uint256` number and non-zero address, call the `transferOwner1()` function. The console will throw an custom `TransferNotOwner` error.

![15 1.png](./img/15-1.png)
   
2. `require`: Enter any `uint256` number and a non-zero address and call the `transferOwner2()` call. The console will throw an exception and print the error message `"Transfer Not Owner"`.

![15 2.png](./img/15-2.png)
   
3. `assert`: Enter any `uint256` number and non-zero address and call the `transferOwner3` function. The console will throw an exception but do not print any error messages.

![15 3.png](./img/15-3.png)
   

## Gas comparison of three methods
Let's compare the gas consumption of `error`, `require`, and `assert`. 
You can find the gas consumption for each function call with the Debug button of the remix console:

1. **gas for `error`**：24445 `wei`
2. **gas for `require`**：24743 `wei`
3. **gas for `assert`**：24446 `wei`

We can see that the `error` consumes the least gas, followed by the `assert`, while the `require` consumes the most gas!
Therefore, `error` not only informs the user about the error message, but also saves gas.

## Summary
In this chapter, we introduced 3 ways to throw exceptions in solidity: `error`, `require`, and `assert`. After comparing their gas consumption, `error` is the cheapest, `require` has the highest gas consumption, and `assert` is in the middle.

