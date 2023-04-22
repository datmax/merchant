import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaStarOfDavid, FaTwitter } from 'react-icons/fa';
const text =
  'מוֹדֶה אֲנִי לְפָנֶֽיךָ מֶֽלֶךְ חַי וְקַיָּים. שֶׁהֶֽחֱזַֽרְתָּ בִּי נִשְׁמָתִי ,בְּחֶמְלָה. רַבָּה אֱמֽוּנָתֶֽךָ׃ מוֹדֶה אֲנִי לְפָנֶֽיךָ מֶֽלֶךְ חַי וְקַיָּים. שֶׁהֶֽחֱזַֽרְתָּ בִּי נִשְׁמָתִי ,בְּחֶמְלָה. רַבָּה אֱמֽוּנָתֶֽךָ׃ מוֹדֶה אֲנִי לְפָנֶֽיךָ מֶֽלֶךְ חַי וְקַיָּים. שֶׁהֶֽחֱזַֽרְתָּ בִּי נִשְׁמָתִי ,בְּחֶמְלָה. רַבָּה אֱמֽוּנָתֶֽךָ׃ מוֹדֶה אֲנִי לְפָנֶֽיךָ מֶֽלֶךְ חַי וְקַיָּים. שֶׁהֶֽחֱזַֽרְתָּ בִּי נִשְׁמָתִי ,בְּחֶמְלָה. רַבָּה אֱמֽוּנָתֶֽךָ׃ מוֹדֶה אֲנִי לְפָנֶֽיךָ מֶֽלֶךְ חַי וְקַיָּים. שֶׁהֶֽחֱזַֽרְתָּ בִּי נִשְׁמָתִי ,בְּחֶמְלָה. רַבָּה אֱמֽוּנָתֶֽךָ׃ מוֹדֶה אֲנִי לְפָנֶֽיךָ מֶֽלֶךְ חַי וְקַיָּים. שֶׁהֶֽחֱזַֽרְתָּ בִּי נִשְׁמָתִי ,בְּחֶמְלָה. רַבָּה אֱמֽוּנָתֶֽךָ׃ מוֹדֶה אֲנִי לְפָנֶֽיךָ מֶֽלֶךְ חַי וְקַיָּים. שֶׁהֶֽחֱזַֽרְתָּ בִּי נִשְׁמָתִי ,בְּחֶמְלָה. רַבָּה אֱמֽוּנָתֶֽךָ׃';

export default function Home() {
  return (
    <main className=" min-h-screen bg-yellow-50 text-blue-700 flex flex-col  bg-center filter">
      <motion.div className="w-full border-b-2 border-b-blue-700 border-t-2 overflow-hidden h-8 ">
        <motion.p
          initial={{ x: -1000 }}
          animate={{
            x: 1500,
            transition: { duration: 10, repeat: Infinity, ease: 'linear' },
          }}
        >
          {text}
        </motion.p>
      </motion.div>
      <img src="/banner.png" className="w-full" alt="" />
      <motion.div className="w-full border-b-2 border-b-blue-700 border-t-2 overflow-hidden h-8 ">
        <motion.p
          initial={{ x: -1000 }}
          animate={{
            x: 1500,
            transition: { duration: 10, repeat: Infinity, ease: 'linear' },
          }}
        >
          {text}
        </motion.p>
      </motion.div>
      <div className="text-2xl lg:text-7xl text-center w-full font-bold text-black lg:mt-20  mt-4">
        $MERCHANT
      </div>
      <div
        className="w-full text-center mt-2 lg:mt-8
      "
      >
        $SHALOM is the rest day of Jewish. It happens each week from sunset on
        Friday to sunset on Saturday.
      </div>
      <div className="flex justify-center my-2">
        <Link href="https://twitter.com/ThaMerchant">
          <FaTwitter size={24}></FaTwitter>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-32 mt-10 lg:mt-20">
        <div className="flex flex-col gap-y-6">
          <div className="text-2xl w-full text-black">TOKENOMICS:</div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="flex w-full align-baseline"
          >
            <FaStarOfDavid size={24}></FaStarOfDavid>
            Supply : 77.777.777.777
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="flex w-full align-baseline"
          >
            <FaStarOfDavid size={24}></FaStarOfDavid>
            Presale : 5%
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="flex w-full align-baseline"
          >
            <FaStarOfDavid size={24}></FaStarOfDavid>
            LP Locked for ever
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="flex w-full align-baseline"
          >
            <FaStarOfDavid size={24}></FaStarOfDavid>
            Tax : 3% Buy 5% Sell
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="flex w-full align-baseline"
          >
            <FaStarOfDavid size={24}></FaStarOfDavid>
            Team: 3%
          </motion.div>
        </div>
        <img src="shabbat.png" className="w-full"></img>
      </div>
    </main>
  );
}
