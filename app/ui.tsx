'use client'

import DropboxImage from "components/dropbox-image";
import DropboxImageList from "components/dropbox-image-list";
import FileDropZone from "components/file-dragdropzone";
import Logo from "components/logo";
import SearchComponent from "components/search-components";
import Image from "next/image";
import { useState } from "react";

export default function UI() {
  const [searchInput, setSearchInput] = useState("")

  return (
    <main className="w-full p-2 flex flex-col gap-4">
      {/* {Logo} */}
      <Logo/>

      {/* {Search component} */}
      <SearchComponent
      searchInput={searchInput}
      setSearchInput={setSearchInput}
      />
      {/* {File Drag&Drop Zone} */}
      <FileDropZone/>

      {/* {Dropbox Image List} */}
    <DropboxImageList/>
    </main>
  );
}
