import Link from 'next/link'
import Head from 'next/head'


export default function FirstPost() {
  return (
    <>
      <Head>
        <title>resume</title>
      </Head>
      <div className="resume">
      <iframe className="resume" src="https://docs.google.com/document/d/e/2PACX-1vQ4pdONHdM7lH706l2LWszyNbcGxNoNlJnaS1ovn7lsXCzbbvrfh5cBqi8cXGfad5aeeoRxk0nqCK1O/pub?embedded=true"  frameBorder="0"></iframe>
 
      <style jsx>{`
        .resume{
          width: 100%;
          height: 1400px;
        }
      `}</style>
 </div>
 </>
  )
}