import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { Form} from 'react-bootstrap';


const DropDown = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/supervisors')
      .then((res) => {
        console.log(res.data);
        setData(res.data)})
        .catch((err) => console.log(err));
  }, []);

  return (
    <Form.Select aria-label="Default select example">
        {data.map((item) => (
            <option value="{item}">{item}</option>
        ))}
    </Form.Select>
  );
}

export default DropDown;