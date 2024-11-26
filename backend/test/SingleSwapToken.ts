import { expect } from "chai";
import hre from "hardhat";

const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

describe("SingleSwapToken", ()=>{
    let singlSwapToken;
    let accounts;
    let weth;
    let dai;
    let usdc;
    
    
    
    before(async()=>{
        accounts = await hre.ethers.getSigners();

        const SingleSwapToken = await hre.ethers.getContractFactory("SingleSwapToken");
        singlSwapToken = await SingleSwapToken.deploy();
        await singlSwapToken.deployed();

        weth = await hre.ethers.getContractAt("IWETH", WETH);
        dai = await hre.ethers.getContractAt("IERC20", DAI);
        usdc = await hre.ethers.getContractAt("IERC20", USDC);
    })

    


})