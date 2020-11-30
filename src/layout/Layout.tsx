import React from "react";
import styled from "styled-components";
import { Navbar } from "./NavBar";
import { Footer } from "./Footer";

const Header = () => {
    return <Navbar />
}


interface ILayoutProps {
    children: any;
}

export const Layout = ({ children }: ILayoutProps) => {
    const Content = styled.div`
        display: flex;
        justify-content: center;
        flex-grow: 1;
    `;

    const ContentWrapper = styled.div`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    `;
    return (<ContentWrapper>
        <Header />
        <Content className="content">
            <div className="container m-5">
                {children}
            </div>
        </Content>
        <Footer />
    </ContentWrapper>);

}

