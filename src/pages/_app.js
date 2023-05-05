//_app.js
import React from 'react';
import '../styles/reset.scss';
import '../styles/globals.scss';
import App from 'next/app';
import Layout from '../components/Layout';
import {headers} from "next/headers";

export default class MyApp extends App {

    static async getInitialProps({Component, ctx}) {

        const BASE_URL = 'http://localhost/wp-json';
        const siteInfo = await fetch(
            BASE_URL
        )
        const sitemeta = await siteInfo.json()

        console.log(sitemeta);

        return {
            name: sitemeta.name,
            logo: sitemeta.site_logo_svg,
            desc: sitemeta.description,
            icon: sitemeta.site_icon_url,
        }
    }

    render () {
        const { Component, pageProps } = this.props
        return (
            <Layout name={this.props.name} icon={this.props.icon} logo={this.props.logo}>
                <Component {...pageProps} />
            </Layout>
        )
    }
}

