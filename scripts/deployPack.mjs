import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import dotenv from "dotenv";
dotenv.config();

(async () => {
  const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "goerli");

  const packAddress = await sdk.deployer.deployPack({
    name: "Treasure Chests",
    primary_sale_recipient: "0x77CAacb4d8D84C68FB8e33baDADFde8a26AA6d25",
  });

  console.log(`Pack address: ${packAddress}`);
})();
