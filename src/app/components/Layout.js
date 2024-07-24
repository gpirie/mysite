import React, { Component } from 'react';
import Header from './siteHeader';
import Footer from './siteFooter';
import {getSiteInfo} from "@components/utils/wordpress";

export default class Layout extends Component {
    render () {
        const { children } = this.props
        return (
            <>
                <Header name={this.props.name} desc={this.props.desc} url={this.props.url} icon={this.props.icon} logo={this.props.logo} />
                {children}
                <Footer name={this.props.name} />
            </>
        );
    }
}