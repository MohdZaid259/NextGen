import React, { useState, useEffect } from 'react';

function ReturnPolicy() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/returnPolicy.txt')
      .then((response) => response.text())
      .then((data) => setContent(data))
      .catch((error) => console.error(error));
  }, []);

  return <div>{content}</div>;
}

export default ReturnPolicy;
