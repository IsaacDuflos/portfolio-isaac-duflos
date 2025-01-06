'use client';

import { MouseEvent } from 'react';

export default function InteractiveDiv() {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    console.log('Div clicked', event);
  };

  return (
    <div id="crt" className="off" onClick={handleClick}>

    </div>
  );
}