import React from 'react';
import Document, { Html, Main } from 'next/document';

import Head from './headCustom';

import NextScript from './nextScriptCustom';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript crossOrigin="anonymous" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
