class Prices extends React.Component {
    state = {
        currency: 'USD'
    }

    render() {
        const list = <li className='list-group-item'>
            Bitcoin rate for {this.props.bpi[this.state.currency].description} :
            <span className="badge badge-primary">
                {this.props.bpi[this.state.currency].code}
            </span>
            <strong>{this.props.bpi[this.state.currency].rate}</strong>
        </li>
        return (
            <div>
                <select className='form-control' onChange={(e) => {
                    this.setState({
                        currency: e.target.value
                    });
                }}>
                    <option value='USE'>USD</option>
                    <option value='GBP'>GBB</option>
                    <option value='EUR'>EUR</option>
                </select>
                <br />
                <ul className='list-group'>
                    {list}
                </ul>
            </div>
        )
    }
}
export default Prices;