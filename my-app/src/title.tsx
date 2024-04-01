const Title = () => {
    const titleStyle = {
        backgroundColor: 'darkgreen',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
        margin: '0px 80px'
    }
    return (
        <header style={titleStyle}>
            <h1>Spin Me!</h1>
        </header>
    )
}

export default Title