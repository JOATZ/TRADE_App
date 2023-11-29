import { AwesomeButton } from 'react-awesome-button'
import { Col, Row } from 'reactstrap' // import Row and Col from react-bootstrap

import 'react-awesome-button/dist/styles.css'

const HomePageTile = (props) => {
    return (
        <AwesomeButton type='primary' style={tileStyles.button}>
            <div style={{ height: '100%' }}>
                <Row style={tileStyles.title}>{props.title}</Row>
                <Row style={tileStyles.icon}>{props.icon}</Row>
            </div>
        </AwesomeButton>
    )
}

const tileStyles = {
    button: {
        height: '80%',
        fontSize: '40px',
        width: '80%'
    },
    title: {
        border: 'solid black 1px',
        height: '100%'
    },
    icon: {
        border: 'solid black 1px'
    }
}

export default HomePageTile
