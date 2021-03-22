import React from "react";
import styled from "styled-components";
import Link from 'next/link'
import {useRouter} from "next/router";

const Navigation = () => {
    const router = useRouter()

    return (
        <NavigationStyled>
            <ul>
                <li>
                    <Link href="/about">
                        <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a className={router.pathname === '/blog' ? 'active' : ''}>Blog</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a className={router.pathname === '/contact' ? 'active' : ''}>Contact</a>
                    </Link>
                </li>
            </ul>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
  .active {
    color: blue;
  }
`

export default Navigation