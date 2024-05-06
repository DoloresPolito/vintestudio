'use client';
import React from 'react'
import styles from './style.module.scss';
import Link from 'next/link';
import styled from "styled-components"
import style from "./style.module.scss"
export default function Index({index, title, manageModal, link}) {

    return (



          
        <StyledLink href={link} target="_blank">
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
         
            <h2 className={style.worktitle}>{title}</h2>
    
            <p>Development</p>
        </div>
        </StyledLink>

    )
}

const StyledLink = styled(Link)`
text-decoration: none;
`
