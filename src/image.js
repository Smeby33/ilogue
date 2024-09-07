import Card from 'react-bootstrap/Card';
import monImage from './assets/images/monImage.png';

function imgeA() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={monImage} alt="Mon image" />
      </Card>
    </>
  );
}

export default imgeA;