import Image from "next/image";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Logo from "../public/Logo.png";
import { SearchIcon, MenuIcon, HomeIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useRouter } from "next/router";
import Modal from "./Modal";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
      },
    });
  };

  return (
    <header className="sticky top-0 z-40 w-full grid grid-cols-3 bg-themeDark shadow-md p-5 md:px-10 overflow-hidden">
      {/* LEFT */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src={Logo}
          width="200px"
          height="200px"
          objectPosition="left"
          alt="Just time logo"
          priority
        />
      </div>
      {/* MIDDLE */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="pl-2 bg-transparent flex-grow outline-none text-sm text-themeLight placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Search"}
        />
        <SearchIcon className="hidden h-8 bg-themePrimary text-themeLight rounded-full p-2 cursor-pointer md:inline-flex md:mx-2" />
      </div>
      {/* RIGHT */}
      <div className="flex items-center space-x-4 justify-end">
        <Modal
          name="Post your offer"
          styling="hidden md:inline cursor-pointer text-themeLight"
        />
        <div className="flex items-center space-x-4 border-2 rounded-full text-themeLight">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <MenuIcon className="h-6 pl-1 md:pl-4 cursor-pointer text-themeLight" />
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className="bg-themeLight w-full p-4 z-50 space-y-2 rounded-md shadow-md">
                <DropdownMenu.Item className="hoverCustom">
                  Login
                </DropdownMenu.Item>
                <DropdownMenu.Item className="hoverCustom">
                  Register
                </DropdownMenu.Item>

                <DropdownMenu.Sub>
                  <DropdownMenu.SubTrigger className="hoverCustom">
                    Settings →
                  </DropdownMenu.SubTrigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.SubContent className="bg-themeLight mx-2 p-4 z-50 space-y-2 rounded-md shadow-md">
                      <DropdownMenu.Item className="hoverCustom">
                        Profile
                      </DropdownMenu.Item>
                      <DropdownMenu.Arrow />
                    </DropdownMenu.SubContent>
                  </DropdownMenu.Portal>
                </DropdownMenu.Sub>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
          <HomeIcon className="h-6 pr-1 md:pr-4 cursor-pointer " />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold text-white">
              Best results:
            </h2>
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-red-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-white">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
