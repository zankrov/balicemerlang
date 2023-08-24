import React from 'react'

export default function Webpak() {
  function MyComponent({ name, age }) {
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  }

  return (
    <div>
      <MyComponent name="John" age={30} />;
  </div>
  )
}