const RoboPunk = artifacts.require("RoboPunk");

require('chai').use(require('chai-as-promised')).should()

const toWei = (num) => web3.utils.toWei(num.toString())
const fromWei = (num) => web3.utils.fromWei(num.toString())

const EVM_REVERT = 'VM Exception while processing transaction: revert'

contract("RoboPunksNFT", ([deployer, buyer1]) => {
  const COST = toWei(0.01);
  const _NAME = "RoboPunksNFT";
  const _SYMBOL = "RP";
  const _BASE_URI =
    "https://gateway.pinata.cloud/ipfs/QmdAm869R67UZPpZ9gidid7zZJMfdZDoufRNfqCZUeCv47/";

  const TITLE = "RoboPunksNFT";
  const DESCRIPTION =
    "";

  let roboPunk, result;

  beforeEach(async () => {
    roboPunk = await RoboPunk.new(_NAME, _SYMBOL, _BASE_URI);
  });

  describe("deployment", () => {
    it("confirms NFT name", async () => {
      result = await roboPunk.name();
      result.should.equal(_NAME);
    });

    it("confirms NFT symbol", async () => {
      result = await roboPunk.symbol();
      result.should.equal(_SYMBOL);
    });

    it("confirms NFT baseURI", async () => {
      result = await roboPunk.baseURI();
      result.should.equal(_BASE_URI);
    });

    it("confirms NFT owner", async () => {
      result = await roboPunk.owner();
      result.should.equal(deployer);
    });

    it("confirms NFT mint cost", async () => {
      result = await roboPunk.cost();
      result.toString().should.equal(COST);
    });
  });

  describe("Minting", () => {
    describe("Success", () => {
      beforeEach(async () => {
        result = await roboPunk.payToMint(TITLE, DESCRIPTION, {
          from: buyer1,
          value: COST,
        });
      });

      it("Confirms buyer owns minted token", async () => {
        result = await roboPunk.ownerOf(1);
        result.should.equal(buyer1);
      });

      it("Confirms supply increase by 1", async () => {
        result = await roboPunk.supply();
        result.toString().should.equal("1");
      });

      it("Returns NFT array", async () => {
        result = await roboPunk.getAllNFTs();
        result.length.toString().should.equal("1");
      });

      it("Returns an NFT object", async () => {
        result = await roboPunk.getAnNFTs(1);
        result.length.toString().should.equal("7");
      });
    });

    describe("Failure", () => {
      it("Prevents mint with 0 value", async () => {
        await roboPunk
          .payToMint(TITLE, DESCRIPTION, { from: buyer1, value: 0 })
          .should.be.rejectedWith(EVM_REVERT);
      });

      it("Prevents minting by deployer", async () => {
        await roboPunk
          .payToMint(TITLE, DESCRIPTION, { from: deployer, value: COST })
          .should.be.rejectedWith(EVM_REVERT);
      });
    });
  });
});