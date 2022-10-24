import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import dotenv from "dotenv";
dotenv.config();

(async () => {
  const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "mumbai");

  const pack = await sdk.getContract(
    "0xAC0BC577e8404C69b73ccc8A20944B60e806DcDC"
  );

  const packNfts = await pack.getAll();

  console.log(packNfts);
})();
