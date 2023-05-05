import React from "react";
import classes from "@components/styles/siteHeader.module.scss";
import Image from "next/image";

export default function siteLogo(props) {
    return <Image height="150" width="150" src={props.logo + '.svg'} />
}