import React, { useEffect, useRef, useState } from "react";

const monthNames = [
  "ינואר",
  "פבואר",
  "מרץ",
  "אפריל",
  "מאי",
  "יוני",
  "יולי",
  "אוגוסט",
  "ספטמבר",
  "אוקטובר",
  "נובמבר",
  "דצמבר",
];

export default function Images() {
  const [calander, setCalender] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 12; i++) {
      const item = {
        month: i,
        name: monthNames[i],
      };
      setCalender((current) => [...current, item]);
    }
  }, []);

  return (
    <div>
      {calander.map((month, index) => {
        return (
          <div className="month" key={index}>
            <div className="monthHeader">
              <h1>{month.name}</h1>
            </div>
            <div className="days"></div>
          </div>
        );
      })}
    </div>
  );
}
