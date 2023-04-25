import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import VideoAd from './VideoAd'
import { loadImaSdk } from '@alugha/ima'
import type { google } from '@alugha/ima'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [ima, setIma] = useState<typeof google.ima | undefined>(undefined);
  useEffect(() => {
    loadImaSdk().then((res)=> setIma(res));
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {ima && <VideoAd ima={ima} />}
      </main>
    </>
  )
}
