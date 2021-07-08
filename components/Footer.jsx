import React from 'react';

function Footer(props) {
  const { isAmp } = props;

  return (
    <footer className="mx-auto text-center">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by &nbsp;
        {!isAmp ? (
          <img src="/vercel.svg" width="100" height="20" alt="Vercel Logo" />
        ) : (
          <amp-img
            width="100"
            height="20"
            layout="intrinsic"
            src="/vercel.svg"
            alt="Vercel Logo"
          />
        )}
      </a>
    </footer>
  );
}
export default Footer;
