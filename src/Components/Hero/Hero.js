import React from 'react';

// TODO GTB-4: - 该组件可以直接和HeroGroup组件合并，并将内部的item单独拆成可复用的组件
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
