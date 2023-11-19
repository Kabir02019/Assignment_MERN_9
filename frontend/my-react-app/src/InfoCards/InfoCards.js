import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function InfoCards(props){
    const cardStyles={
        textAlign:'left',
        width: props.width||'18rem',
        backgroundColor:props.color||'#f8f8f8',
        border:'0rem',
        WebkitFilter: "drop-shadow(0px 0px 5px #666)",
        filter: "drop-shadow(0px 0px 5px #666)"
    }
    return(<>
    <Card  style={cardStyles} >
      <Card.Img variant="top" src={props.image}  />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        {props.text}
        </Card.Text>
        <Button variant="primary" style={{display:props.button}}>{props.action}</Button>
      </Card.Body>
    </Card>
    </>)


}

export default InfoCards;