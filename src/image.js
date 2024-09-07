import Card from 'react-bootstrap/Card';
import myImage from './assets/images/monImage.jpg';

function imgeA() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={myImage} alt="Mon image" />
      </Card>
    </>
  );
}

export default imgeA;