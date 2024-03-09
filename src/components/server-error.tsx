/*
The contents of this file are largely based upon
https://github.com/vercel/next.js/blob/31a3aff75534378e277331b4e0a996995c49e269/packages/next/src/pages/_error.tsx
Copyright (c) 2024 Vercel, Inc
Vercel, Inc license the referenced file to Van Mildert JCR under the MIT license.

Copyright (c) 2024 Van Mildert JCR
All rights reserved.
 */

import React from "react";
import Head from "next/head";

const styles: Record<string, React.CSSProperties> = {
  error: {
    // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
    fontFamily:
      'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
    height: '80vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  desc: {
    lineHeight: '48px',
  },
  h1: {
    display: 'inline-block',
    margin: '0 20px 0 0',
    paddingRight: 23,
    fontSize: 24,
    fontWeight: 500,
    verticalAlign: 'top',
  },
  h2: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '28px',
  },
  wrap: {
    display: 'inline-block',
  },
}

export type HttpErrorProps = {
  statusCode?: string,
  conciseMessage?: string,
  message: string,
}

export default function ServerError(props: HttpErrorProps) {
  return (
    <div style={styles.error}>
      <Head>
        <meta
          key="title"
          property="og:title"
          content={props.conciseMessage ? props.conciseMessage : "Unexpected Error"}
        />
      </Head>
      <div style={styles.desc}>
        {props.statusCode ? (
          <h1 className="next-error-h1" style={styles.h1}>
            {props.statusCode}
          </h1>
        ) : null}
        <div style={styles.wrap}>
          <h2 style={styles.h2}>
            {props.message}.
          </h2>
        </div>
      </div>
    </div>
  )
}
