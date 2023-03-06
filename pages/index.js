import Head from 'next/head'
import { useContext } from 'react'
import Blog from '../components/basicpage/Blogs'
import ImgSlider from '../components/basicpage/ImgSlider'
import TodoLists from '../components/basicpage/TodoLists'
import Header from '../components/Header'
import mainContext from '../context/MainContext'

export default function Home() {
  const {user}=useContext(mainContext)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ico.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"/>
      </Head>
      <Header/>
      {user!==null&&<TodoLists/>}
        <Blog/>
     
    </>
  )
}
