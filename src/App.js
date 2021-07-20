import './App.css';
import { useState } from "react";
import ReactDOM from 'react-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  let gender=""
  const [startDate, setStartDate] = useState(new Date());
  const [formData, setFormData] = useState({"email": "", "name": "", "age": NaN, "DOB": startDate, "phone": NaN, "password": ""})
  console.log(formData)
  

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("data", JSON.stringify(formData))
    
    const data = JSON.parse(localStorage.getItem('data'))
    console.log(data)

    if (data.Male){gender = "Male"}
    else if (data.Female){gender = "Female"}

    ReactDOM.render(
      <div className="App">
        <h1>Your registered information</h1>
        <div className="info">
        <h3>Email:</h3> 
        <p>{data.email}</p>
        </div>

        <div className="info">
        <h3>Name:</h3> 
        <p>{data.name}</p>
        </div>

        <div className="info">
        <h3>Age:</h3> 
        <p>{data.age}</p>
        </div>

        <div className="info">
        <h3>Date of birth:</h3> 
        <p>{data.DOB.split('T')[0]}</p>
        </div>

        <div className="info">
        <h3>Gender:</h3> 
        <p>{gender} </p>
        </div>

        <div className="info">
        <h3>Phone:</h3> 
        <p>{data.phone}</p>
        </div>

        <div className="info">
        <h3>Password:</h3> 
        <p>{data.password}</p>
        </div>
      </div>,
      document.getElementById('result')
    )


  }
  
  const handleOnChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value })
  }
  
  
  return (
    <div className="App">
      <div className="container">
      <h1>Demo Form</h1>


<Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><h5>Email address</h5></Form.Label>
    <Form.Control type="email" id="email" value={formData.email} name="email" placeholder="Enter email"  onChange={handleOnChange}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><h5>Name</h5></Form.Label>
    <Form.Control type="text" id="name" value={formData.name} name="name" placeholder="Your name"  onChange={handleOnChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><h5>Age</h5></Form.Label>
    <Form.Control type="number" id="age" value={formData.age} name="age" placeholder="Your age"  onChange={handleOnChange}/>
  </Form.Group>
  
  <Form.Label><h5>Date of birth:</h5></Form.Label>
  <DatePicker id="DOB" value={formData.DOB} name="DOB" selected={startDate} onChange={(date) => setStartDate(date)} />

  <Form>
    <h5>Gender</h5>
  {['radio'].map((type) => (
    <div id="gender" value={formData.gender} name="gender" key={`inline-${type}`} className="mb-3"  onChange={handleOnChange}>
      <Form.Check
        inline
        label="Male"
        name="Male"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="Female"
        name="Female"
        type={type}
        id={`inline-${type}-2`}
      />
    </div>
  ))}
</Form>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><h5>Phone</h5></Form.Label>
    <Form.Control id="phone" value={formData.phone} name="phone" type="number" placeholder="Your phone number"  onChange={handleOnChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label><h5>Password</h5></Form.Label>
    <Form.Control id="password" value={formData.password} name="password" type="password" placeholder="Password"  onChange={handleOnChange} />
  </Form.Group>

  <FloatingLabel controlId="floatingTextarea2" label="Essay"><h5>Essay</h5> 
    <Form.Control
      as="textarea"
      placeholder="Put your essay here"
      style={{ height: '100px' }}
    />
  </FloatingLabel>
  <br/>
  
  <Button className="submit" variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
    </div>
  );
}

export default App;
