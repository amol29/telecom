import React from "react";

export default function FileButton({handleFileChange}) {
  return <input
					onChange={handleFileChange}
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
					id="csvInput"
					name="file"
					type="File"
				/>
}