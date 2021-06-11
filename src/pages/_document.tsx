import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import {ReactElement} from 'react';
import {Constants} from '../utils';

class DocumentRoute extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render(): ReactElement {
    return (
      <Html>
        <Head>
          <link href={Constants.fontFamily} rel="stylesheet" />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DocumentRoute;
