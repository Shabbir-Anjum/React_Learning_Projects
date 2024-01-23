import React, { useState } from 'react';

export default function Drop() {
  const [country, setCountry] = useState([' ']);
  const countries = [
    {
      name: 'Pakistan',
      value: 'PK',
      cities: ['Faisalabad', 'Lahore', 'Karachi'],
    },
    {
      name: 'India',
      value: 'IND',
      cities: ['Delhi', 'Mumbai', 'Kolkata'],
    },
  ];

  return (
    <>
      <select
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
        }}
        name="drop"
        id="1"
      >
        {countries.map((value, index) => (
          <option key={index} value={index}>
            {value.name}
          </option>
        ))}
      </select>
      {/* next drop */}
      <div>
        <select>
          {countries[country]?.cities.map((city, index) => (
            <option key={index} value={index}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

