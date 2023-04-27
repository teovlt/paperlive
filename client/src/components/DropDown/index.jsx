import React, { useState, useEffect } from 'react';
import { ContainerDropDown, DivActions, DivSignedAs } from './dropDownElements';
import { Caption } from '../../theme/appElements';

const DropDown = ({ options, teamName }) => {
  if (!Array.isArray(options)) {
    options = [];
  }

  const [showSignedAs, setShowSignedAs] = useState(true);

  useEffect(() => {
    if (teamName) {
      setShowSignedAs(true);
    } else {
      setShowSignedAs(false);
    }
  }, [teamName]);

  const handleActions = (action) => {
    console.log(action);  
  };

  return (
    <ContainerDropDown>
      <DivSignedAs>
        {showSignedAs ? (
          <Caption>
            Signed as <strong>{teamName}</strong>
          </Caption>
        ) : (
          <Caption>Actions Menu</Caption>
        )}
      </DivSignedAs>
      <DivActions>
        {options.map((option) => (
          <button key={option.value} onClick={handleActions(option.action)}>
            {option.label}
          </button>
        ))}
      </DivActions>
    </ContainerDropDown>
  );
};

export default DropDown;