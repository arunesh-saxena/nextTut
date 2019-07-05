import Fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import Prices from '../components/Prices'

const Index = (props) => (
    <Layout>
        <div>
            <h1>Home</h1>
            <p>Hello Next.js, this is your Arunesh Saxena</p>
            {props.data.time.updated}
            <p>Check current BitCoin rate</p>
            <Prices bpi={props.data.bpi}/>
        </div>
    </Layout>
);

Index.getInitialProps = async function () {
    const res = await Fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    return {
        data
    };
}

export default Index