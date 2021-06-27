import React from 'react';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import { Header } from './header';

const components = {};

export default function Blog(props) {
  const { meta, route, ...rest } = props;

  console.log(props);

  const sharedHead = (
    <Head>
      <meta property="og:title" content={meta.title} />
      <meta property="og:site_name" content="Jared Palmer's blog" />
      <meta property="og:description" content={meta.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@jaredpalmer" />
      <meta property="og:image" content={meta.og} />
    </Head>
  );

  if (route.startsWith('/blog')) {
    return function Layout({ children }) {
      return (
        <>
          {sharedHead}
          <Header />
          <div className="prose lg:prose-lg mx-auto px-4 py-8">
            <MDXProvider components={components}>{children}</MDXProvider>
          </div>
        </>
      );
    };
  }

  return function Layout({ children }) {
    return (
      <>
        {sharedHead}
        {children}
      </>
    );
  };
}
