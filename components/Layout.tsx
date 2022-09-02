import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children: ReactNode
  title: string
}

function Layout({ children, title = 'This is the default title' }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/users">Users List</Link> |{' '}
          <Link href="/api/users">Users API</Link>
        </nav>
      </header>
      {children}
    </div>
  )
}

export default Layout
