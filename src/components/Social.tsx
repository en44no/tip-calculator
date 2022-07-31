import { useState } from 'react';

import {
  UilLinkedinAlt,
  UilGithubAlt,
  UilEnvelopeAdd,
  UilGlobe
} from "@iconscout/react-unicons";
import { AtSymbolIcon } from '@heroicons/react/outline';

const Social = () => {

  const [showToast, setShowToast] = useState(false);

  const notificationAndCopyToClipboard = () => {
    navigator.clipboard.writeText("nahuelmarquez12@gmail.com");
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  return (
    <>
      {showToast && (
        <div id='toast-notification' className="absolute top-5 flex items-center p-4 space-x-4 w-full max-w-fit text-gray-500 bg-white rounded-lg divide-x divide-gray-200 shadow-md" role="alert">
          <AtSymbolIcon className='h-6 w-6' />
          <div className="pl-4 text-sm font-semibold">Dirección de Gmail copiada a tu portapapeles.</div>
        </div>
      )}
      <div className="absolute bottom-5 right-6 flex items-center gap-3">
        <a
          className="github-icon"
          href="https://github.com/en44no"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <UilGithubAlt size="1.7rem" />
        </a>
        <a
          className="linkedin-icon"
          href="https://www.linkedin.com/in/nahuelmarquez/"
          target="_blank"
          rel="noreferrer"
          title="Linkedin"
        >
          <UilLinkedinAlt size="1.7rem" />
        </a>
        <button
          className="email-icon mt-1"
          title="Gmail address"
          aria-label="GetMyEmailAddressButton"
          onClick={() => notificationAndCopyToClipboard()}
        >
          <UilEnvelopeAdd size="1.7rem" />
        </button>
        <a
          className="website-icon mt-1"
          href="https://nahuelmarquez.com"
          target="_blank"
          rel="noreferrer"
          title="Personal website"
        >
          <UilGlobe size="1.7rem" />
        </a>
      </div>
    </>
  );
};

export default Social;
