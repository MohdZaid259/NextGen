import React, { useState, useEffect } from 'react';

function TermsConditions() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/termsConditions.txt')
      .then((response) => response.text())
      .then((data) => setContent(data))
      .catch((error) => console.error(error));
  }, []);

  return <div>{content}</div>;
}

export default TermsConditions;
