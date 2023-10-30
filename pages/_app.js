import '../styles/globals.css'
import Head from 'next/head'
import Footer from '../components/home/footer'
import {DevSupport} from "@react-buddy/ide-toolbox-next";
import {ComponentPreviews, useInitial} from "../dev";


function MyApp({Component, pageProps}) {
    return <>
        <Head>
            <title>Extra Quadrata Tech Fest</title>
            <meta name="robots" content="all"/>
            <meta name='description'
                  content="“Technology like art is a soaring exercise of the human imagination.” To be steady with our motion of development, it is vital for the youth to grasp every facet of technology and innovation.
        DPS Kolar Road has taken an initiative to contribute to this field. Extraquadrata would be our very first annual tech meet up hosted by and for high schoolers which will be held on the 14th of November.
        Our competitions would test the participant’s creativity and logical thinking to response time and sheer skill for tech savvies to people who crave to be."></meta>
            <meta name="og:image" content="/logo.png"/>
            <link rel='icon' href='/logo.png'/>
            <link rel='apple-touch-icon' href='/logo.png'/>
            <meta name='og:description'
                  content="“Technology like art is a soaring exercise of the human imagination.” To be steady with our motion of development, it is vital for the youth to grasp every facet of technology and innovation.
        DPS Kolar Road has taken an initiative to contribute to this field. Extraquadrata would be our very first annual tech meet up hosted by and for high schoolers which will be held on the 14th of November.
        Our competitions would test the participant’s creativity and logical thinking to response time and sheer skill for tech savvies and people who crave to be."></meta>
        </Head>
        <div style={{minHeight: '80vh'}}>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <Component {...pageProps} />
            </DevSupport>
        </div>
        <Footer/></>
}

export default MyApp
