import axios from "axios";
import { useState } from "react";

function Postcodes() {
    const [postcode1, setPostcode1] = useState('');
    const [postcode2, setPostcode2] = useState('');
    const [result, setResult] = useState('');
  
    const handlePostcode1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPostcode1(event.target.value);
    };
  
    const handlePostcode2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPostcode2(event.target.value);
    };
  
    const handleSubmit = async () => {
      try {
        const response = await axios.get(
          `https://media.carecontrolsystems.co.uk/Travel/JourneyPlan.aspx?Route=${postcode1},${postcode2}`
        );
        const { status, data } = response;
        if (status === 200) {
          setResult(JSON.stringify(data));
        } 
      } catch (error) {
        setResult('Error fetching data');
      }
    };
  
    return (
      <div>
        <h1>Check Postcode</h1>
          <input
            type="text"
            placeholder="Enter first postcode"
            value={postcode1}
            onChange={handlePostcode1Change}
          />
          <input
            type="text"
            placeholder="Enter second postcode"
            value={postcode2}
            onChange={handlePostcode2Change}
          />
          <button onClick={handleSubmit}>Get Postcodes Data</button>
          <br/>
        {result}
      </div>
    );
} 

export default Postcodes;