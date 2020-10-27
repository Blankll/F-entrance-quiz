import React from 'react';

export default function Hero(props) {
  return (
    <div>
      {props?.heros?.map((hero) => (
        // eslint-disable-next-line react/button-has-type
        <button key={hero.id}>
          {hero.id}. {hero.name}
        </button>
      ))}
    </div>
  );
}
