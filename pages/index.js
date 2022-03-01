import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import avatar_1 from '../public/images/avatar_images/avatar_1.png'
import avatar_2 from '../public/images/avatar_images/avatar_2.png'
import avatar_4 from '../public/images/avatar_images/avatar_4.png'
import avatar_5 from '../public/images/avatar_images/avatar_5.png'
import avatar_6 from '../public/images/avatar_images/avatar_6.png'
import appartment_1 from '../public/images/appartment_images/appartment_1.jpg'
import React from 'react'
import ImageDescSlider from '../components/image-desc-slider'

export default function Home() {
  
  const avatar_data = [
    {
      name: "Alpha 1",
      status: "Locked",
      title: "Degen 170",
      imgUrl: avatar_1
    },
    {
      name: "Alpha 1",
      status: "Locked",
      title: "Degen 170",
      imgUrl: avatar_4
    },
    {
      name: "Alpha 1",
      status: "Locked",
      title: "Degen 170",
      imgUrl: avatar_2
    },
    {
      name: "Alpha 1",
      status: "Locked",
      title: "Degen 170",
      imgUrl: avatar_5
    },
    {
      name: "Alpha 1",
      status: "Locked",
      title: "Degen 170",
      imgUrl: avatar_1
    },
    {
      name: "Alpha 1",
      status: "Locked",
      title: "Degen 170",
      imgUrl: avatar_6
    },
    {
      name: "Alpha 1",
      status: "Locked",
      title: "Degen 170",
      imgUrl: avatar_5
    },
    {
      name: "Alpha 1",
      status: "Locked",
      title: "Degen 170",
      imgUrl: avatar_6
    },
    {
      name: "Alpha 1",
      status: "Locked",
      title: "Degen 170",
      imgUrl: avatar_1
    },
  ]

  const appartments_data = [
    {
      name: "Alpha 1",
      status: "Locked",
      title: "Degen 170",
      imgUrl: appartment_1
    },
    {
      name: "Alpha 1",
      status: "Locked",
      title: "Degen 170",
      imgUrl: appartment_1
    },
    {
      name: "Alpha 1",
      status: "Locked",
      title: "Degen 170",
      imgUrl: appartment_1
    },
    {
      name: "Alpha 1",
      status: "Locked",
      title: "Degen 170",
      imgUrl: appartment_1
    },
    {
      name: "Alpha 1",
      status: "Locked",
      title: "Degen 170",
      imgUrl: appartment_1
    },
    {
      name: "Alpha 1",
      status: "Locked",
      title: "Degen 170",
      imgUrl: appartment_1
    },
    {
      name: "Alpha 1",
      status: "Locked",
      title: "Degen 170",
      imgUrl: appartment_1
    },
    {
      name: "Alpha 1",
      status: "Locked",
      title: "Degen 170",
      imgUrl: appartment_1
    },
    {
      name: "Alpha 1",
      status: "Locked",
      title: "Degen 170",
      imgUrl: appartment_1
    },
  ]



  return (
    <>
      <Head>
        <title>Miami Real</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ImageDescSlider items={avatar_data} title="PFP AVATARS" />
      <ImageDescSlider items={appartments_data} title="APPARTMENTS" />

    </>
  )
}
