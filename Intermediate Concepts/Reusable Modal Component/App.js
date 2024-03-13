import React, { useState } from 'react';
import Button from './Components/Button.js';
import Label from './Components/Label.js';
import Input from './Components/Input.js';

const App = () => {
  const ButtonName = "Submit";
  const LabelName1 = "Name";
  const LabelName2 = "Email";
  const LabelName3 = "Password";
  const LabelName4 = "Confirm Password";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password && formData.confirmPassword) {
      console.log(formData);
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } else {
      console.log("Please fill in all the fields.");
    }
  };

  return (
    <div
      style={{
        margin: '3rem',
        border: '3px solid green',
        borderRadius: '1rem',
        padding: '3rem',
        fontSize: '1.3rem',
      }}>
      <h1 style={{ textAlign: 'center' }}>Student Form</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <Label LabelName={LabelName1} />
              </td>
              <td>
                <Input type='text' name='name' value={formData.name} handleChange={()=>handleChange} />
              </td>
            </tr>
            <tr>
              <td>
                <Label LabelName={LabelName2} />
              </td>
              <td>
                <Input type='email' name='email' value={formData.email} handleChange={()=>handleChange} />
              </td>
            </tr>
            <tr>
              <td>
                <Label LabelName={LabelName3} />
              </td>
              <td>
                <Input type='password' name='password' value={formData.password} handleChange={()=>handleChange} />
              </td>
            </tr>
            <tr>
              <td>
                <Label LabelName={LabelName4} />
              </td>
              <td>
                <Input type='password' name='confirmPassword' value={formData.confirmPassword} handleChange={()=>handleChange} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td><Button name={ButtonName} /></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
