
import '@/styles/globals.css'
import { useState } from 'react';
import { useRouter } from 'next/router'

import Layout from '@/components/Layout'
import Menu from "@/components/Menu";
import Sidebar from '@/components/Sidebar';
import Language from '@/components/Language';

import enData from '../language/en'
import ptData from '../language/pt'
import esData from '../language/es'

export default function App({ Component, pageProps }) {
  //import mock data
  const [data] = useState({ en: enData, pt: ptData, es: esData });

  //fetch locale/language from next/router
  const router = useRouter()
  const { locale } = router

  //init all 3 components here so they can share the state
  //send them as {props} to the <Layout>
  const menu = (<Menu navigation={data[locale].pageProps.navigation}></Menu>)
  const language = (<Language></Language>)
  const sidebar = (<Sidebar navigation={data[locale].pageProps.navigation} ></ Sidebar>)

  //wraping the Main component as children on the <Layout> 
  //sending the extra components as props to the <Layout>
  //<Layout> as no logic, only style.
  return <Layout menu={menu} sidebar={sidebar} language={language}>
    <Component {...pageProps} />
  </Layout>
}
