import { FC, ReactNode } from "react"
import Head from "next/head"
import { Navbar } from "../Navbar";

interface Props {
    title?:   string;
    content:  string
    children: ReactNode
}

export const Layout: FC<Props> = ({title, children, content}) => {
  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <Navbar/>
    
    <div className="container min-h-screen mx-auto w-full"> 
        {children}
    </div>
    </>
  )
}