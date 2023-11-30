import { Button } from 'reactstrap'

const HomePageTile = (props) => {
    return (
        <Button style={tileStyles.button}>
            <div style={tileStyles.title}>{props.title}</div>
            <div style={tileStyles.icon}>{props.icon}</div>
        </Button>
    )
}

const tileStyles = {
    button: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        border: 'solid black 1px',
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2vmax'
    },
    icon: {
        border: 'solid black 1px',
        height: '70%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '6vmax'
    }
}

export default HomePageTile
