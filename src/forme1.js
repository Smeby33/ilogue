import Form from 'react-bootstrap/Form';

function Selectform({ value, onChange }) {
  return (
    <Form.Select aria-label="Default select example" value={value} onChange={onChange}>
      <option value="">Votre référentiel</option>
      <option value="Développeur">Développeur</option>
      <option value="Référent digital">Référent digital</option>
      <option value="Coach">Coach</option>   
    </Form.Select>
  );
}

export default Selectform;