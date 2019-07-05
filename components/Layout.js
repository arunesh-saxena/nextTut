import Head from 'next/head';

import NavBar from './NavBar';

const Layout = (props) => (
    <div>
        <Head>
            <title>Next+React+express Tut</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
        </Head>
        <NavBar />
        <div className="container">
            {props.children}
        </div>

    </div>
);

export default Layout;