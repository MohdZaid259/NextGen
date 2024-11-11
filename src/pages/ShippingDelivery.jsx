import React, { useState, useEffect } from 'react';

function ShippingDelivery() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/shippingDelivery.txt')
      .then((response) => response.text())
      .then((data) => setContent(data))
      .catch((error) => console.error(error));
  }, []);

  return <div>{content}</div>;
}

export default ShippingDelivery;
