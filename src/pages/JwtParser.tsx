import { useState } from "react";
import { Buffer } from "buffer";

const JwtParser = () => {
  const [jwtHeader, setJwtHeader] = useState("");
  const [jwtPayload, setJwtPayload] = useState("");
  // const [jwtSig, setJwtSig] = useState("");

  const handleChange = (event: any) => {
    const jwtValue = event.target.value;
    const jwtParts = jwtValue.split(".");
    if (jwtParts.length !== 3) {
      setJwtHeader("");
      setJwtPayload("");
      return;
    }
    const j1 = JSON.parse(Buffer.from(jwtParts[0], "base64").toString());
    setJwtHeader(JSON.stringify(j1, null, 4));

    const j2 = JSON.parse(Buffer.from(jwtParts[1], "base64").toString());
    setJwtPayload(JSON.stringify(j2, null, 4));
    // setJwtSig(Buffer.from(jwtParts[2], "base64").toString());
  };

  return (
    <div className="w-4/5 m-auto pt-4">
      <div className="flex flex-row">
        <div className="basis-1/2 text-xl text-sky-800">Encoded </div>
        <div className="basis-1/2 text-xl text-sky-800">Decoded</div>
      </div>
      <div className="flex flex-row space-x-4">
        <div className="basis-1/2">
          <textarea
            id="jwt-input"
            cols={30}
            rows={30}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="paste your JWT here..."
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="basis-1/2">
          <div>
            <div>Header</div>
            <textarea
              id="jwt-header"
              cols={30}
              rows={7}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="..."
              readOnly
              value={jwtHeader}
            ></textarea>

            <div>Payload</div>
            <textarea
              id="jwt-payload"
              cols={30}
              rows={19}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="..."
              readOnly
              value={jwtPayload}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="columns-2">
        <div className="w-full"></div>

        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default JwtParser;
