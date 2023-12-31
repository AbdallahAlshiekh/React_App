import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from './data.json';


function Main() {
  return (
    <>
    <div style={{display:"flex" , flexWrap: "wrap" , justifyContent:"space-between" , gap:"10px" , marginTop:"25px"}}>
    {data.map(function(item){
        return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
            {item.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
             )
        }
    )
         }
    </div>
    </>

  );
}

export default Main;