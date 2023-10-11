import React, { useState } from 'react';
import { Dropdown, PrimaryButton } from '@fluentui/react';

const Welcome = ({ onNext, setSelectedMajor, setSelectedYear }) => {
  const [selectedMajor, setSelectedMajor] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleNext = () => {
    if (selectedMajor && selectedYear) {
      onNext();
    }
  };

  const majorOptions = [
    { key: 'cs', text: 'Computer Science' },
    { key: 'is', text: 'Information Systems' },
  ];

  const yearOptions = [
    { key: 'freshman', text: 'Freshman' },
    { key: 'sophomore', text: 'Sophomore' },
    { key: 'junior', text: 'Junior' },
    { key: 'senior', text: 'Senior' },
  ];

  return (
    <div>
      <Dropdown
        label="Select College Major"
        options={majorOptions}
        onChange={(e, item) => setSelectedMajor(item.key)}
      />
      <Dropdown
        label="Select College Year"
        options={yearOptions}
        onChange={(e, item) => setSelectedYear(item.key)}
      />
      <PrimaryButton text="Next" onClick={handleNext} />
    </div>
  );
};

export default Welcome;
