import { useState } from 'react';

interface Props {
  text: string;
}

export default function InfoTooltip({ text }: Props) {
  const [show, setShow] = useState(false);

  return (
    <span className="relative inline-block ml-1">
      <button
        type="button"
        className="w-4 h-4 rounded-full bg-gray-200 text-gray-600 text-xs leading-none inline-flex items-center justify-center hover:bg-gray-300 cursor-help"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow(!show)}
        aria-label="Más información"
      >
        ?
      </button>
      {show && (
        <span className="absolute bottom-6 left-1/2 -translate-x-1/2 w-64 p-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg z-10">
          {text}
        </span>
      )}
    </span>
  );
}
