import React from "react";

export default function WordSummaryItem({ text, value }) {
  return (
    <ul className="flex items-center justify-between p-4 border-b">
      <li>{text}</li>
      <li>{value}</li>
    </ul>
  );
}
