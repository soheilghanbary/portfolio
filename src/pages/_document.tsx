import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <title>Soheil Ghanbary - FullStack Web Developer</title>
          <meta
            property="og:title"
            content="Soheil Ghanbary - FullStack Web Developer"
            key="title"
          />
          <meta
            property="og:description"
            content="I'm Soheil Ghanbary, FullStack WebDeveloper"
            key="description"
          />
          <meta
            name="description"
            content="I'm Soheil Ghanbary, FullStack WebDeveloper"
          />
          <meta name="keywords" content="FullStack, Soheil , Ghanbary" />
          <meta name="author" content="Soheil Ghanbary" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="robots" content="index"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
