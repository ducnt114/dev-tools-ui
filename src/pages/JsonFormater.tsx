import { useState } from "react";

const JsonFormater = () => {
  const [formatedData, setFormatedData] = useState("");

  const handleChange = (event: any) => {
    const rawData = event.target.value;
    if (rawData.length === 0) {
      setFormatedData("");
      return;
    }
    setFormatedData(JSON.stringify(JSON.parse(rawData), null, 4));
  };

  return (
    <div className="w-4/5 m-auto pt-4">
      <div className="flex flex-row space-x-4">
        <div className="basis-1/2">
          <textarea
            id="json-raw"
            cols={30}
            rows={30}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="paste your JSON here..."
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="basis-1/2">
          <div>
            <textarea
              id="json-formated"
              cols={30}
              rows={30}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="..."
              readOnly
              value={formatedData}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsonFormater;
