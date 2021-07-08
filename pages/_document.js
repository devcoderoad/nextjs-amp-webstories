import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const isAmp = ctx.query.amp;
    return {
      ...initialProps,
      isAmp,
    };
  }

  render() {
    const { isAmp } = this.props;
    return (
      <Html>
        <Head />
        <body className={`${isAmp && 'amp-mode'}`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
