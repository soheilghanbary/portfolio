import "styles/app.scss";
import { ThemeProvider } from "next-themes";
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from "next/app";
import Layout from "components/layout";
import { RecoilRoot } from "recoil";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
