import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div>
      <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        {/* <Image
          className="object-contain"
          src="https://links.papareact.com/ua6"
          width={200}
          height={100}
        /> */}
        <h1 className="text-6xl font-extrabold sm: mb-4 cursor-pointer">
          PLEXI
        </h1>

        {/* Header Button Container*/}
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem title="HOME" Icon={HomeIcon} />
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
          <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
          <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
          <HeaderItem title="SEARCH" Icon={SearchIcon} />
          <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        </div>
      </header>
    </div>
  );
}

export default Header;
