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
        <Image
          className="object-contain"
          src="https://links.papareact.com/ua6"
          width={200}
          height={100}
        />

        {/* Header Button Container*/}
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem title="HOME" title="HOME" Icon={HomeIcon} />
          <HeaderItem title="TRENDING" title="HOME" Icon={LightningBoltIcon} />
          <HeaderItem title="VERIFIED" title="HOME" Icon={BadgeCheckIcon} />
          <HeaderItem title="COLLECTIONS" title="HOME" Icon={CollectionIcon} />
          <HeaderItem title="SEARCH" title="HOME" Icon={SearchIcon} />
          <HeaderItem title="ACCOUNT" title="HOME" Icon={UserIcon} />
        </div>
      </header>
    </div>
  );
}

export default Header;
