import React from "react";
import styled from "styled-components";
import { Navbar } from "./NavBar";

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
    `;
    return (<div>
        <Header />
        <Content className="content">
            <div className="container m-5">
                {children}
            </div>
        </Content>
        {/* <div>Footer</div> */}
    </div>);

}

