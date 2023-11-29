import { Button } from 'reactstrap'

const HomePageTile = (props) => {
    return (
        <Button color='primary' style={tileStyles.button}>
            <div style={tileStyles.title}>{props.title}</div>
            <div style={tileStyles.icon}>{props.icon}</div>
        </Button>
    )
}

const tileStyles = {
    button: {
        height: '80%',
        fontSize: '40px',
        width: '80%'
    },
    title: {
        border: 'solid black 1px'
    },
    icon: {
        border: 'solid black 1px'
    }
}

export default HomePageTile
