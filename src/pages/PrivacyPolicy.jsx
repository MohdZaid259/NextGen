import React, { useState, useEffect } from 'react';

function PrivacyPolicy() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/privacyPolicy.txt')
      .then((response) => response.text())
      .then((data) => setContent(data))
      .catch((error) => console.error(error));
  }, []);

  return <div>{content}</div>;
}

export default PrivacyPolicy;
