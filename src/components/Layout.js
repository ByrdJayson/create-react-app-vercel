import React from "react";
import HomeItems from "./HomeItems";


const Layout = () => {
    return (
        <>
            <header>
                <nav>
                    <img src={'https://logowik.com/content/uploads/images/letter-v-logo-template1570.jpg'} className={'header-logo'} alt={'company-logo'}/>
                    <ul>
                        <li>Home</li>
                        <li>Inventory</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </nav>
            </header>
            <HomeItems />
            <footer>
                <div className={'links'}>
                    <ul>
                        <li>Home</li>
                        <li>Inventory</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <p>Copyright 2021 Byrd Enterprises</p>
            </footer>
        </>
    )
}



export default Layout;