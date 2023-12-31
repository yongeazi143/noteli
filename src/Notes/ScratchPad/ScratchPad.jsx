import { useState, useEffect } from "react";
import _Hanko from "../../../hanko/hanko";
import useDebounce from "../../containers/debounce/debounce";
import storage from "../../containers/storage/storage";
import { AES, enc } from "crypto-js";
const hanko = _Hanko.hankoInstance();
const encryptionKey = "your-encryption-key";

const encryptText = (text) => {
  return AES.encrypt(text, encryptionKey).toString();
};

const decryptText = (encryptedText) => {
  const bytes = AES.decrypt(encryptedText, encryptionKey);
  return bytes.toString(enc.Utf8);
};

const ScratchPad = () => {
  const session = hanko.session.get();
  const userId = () => session && session.userID;
  const [scratchNote, setScratchNote] = useState(() => {
    const storedText = storage.get(userId());
    if (storedText) {
      return decryptText(storedText);
    }
    return "";
  });
  const debouncedTxt = useDebounce(scratchNote);
  const characterLimit = 500;
  const handleInputChange = (e) => {
    const text = e.target.value;
    if (text.trim() === "") {
      setScratchNote("");
      return;
    }
    if (characterLimit - text.length >= 0) {
      setScratchNote(text);
    }
  };

  useEffect(() => {
    storage.set(userId(), encryptText(debouncedTxt));
  }, [debouncedTxt]);

  return (
    <div className="shadow mx-auto shadow-gray bg-hero rounded-md p-5 w-[90vw]">
      <div className="mb-5 flex items-center justify-between">
        <h1 className="font-bold font-serif text-lg uppercase text-nav-blue">
          Scratch Pad
        </h1>
        <small className="font-medium font-poppins text-sm text-center text-nav-blue">
          {characterLimit - scratchNote.length} Remaining;
        </small>
      </div>
      <textarea
        name="scratch-pad"
        className="w-full border-none outline-none bg-hero text-base cursor-auto overflow-y-auto pr-4 align-top resize-none text-nav-blue tracking-wide font-serif"
        cols="30"
        rows="10"
        value={scratchNote}
        onChange={handleInputChange}
        placeholder="Write something... Don't be afraid it is save and secure"
        style={{
          boxShadow: "none",
        }}
      ></textarea>
    </div>
  );
};

export default ScratchPad;
