import React, { Component } from 'react';
import Header from './siteHeader';
import Footer from './siteFooter';

export default class Layout extends Component {
    render () {
        const { children } = this.props
        return (
            <>
                <Header />
                {children}
                <Footer />
            </>
        );
    }
}