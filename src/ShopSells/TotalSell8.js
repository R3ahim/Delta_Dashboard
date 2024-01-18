import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';



function TotalSell8() {
  const [user, loading, error] = useAuthState(auth);

    const [jsonData, setJsonData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");

    useEffect(() => {
      // Fetch data from time.json when the component mounts
      fetchData();
  
      // Set the initial selectedDate to the current month
      const today = new Date();
      const initialSelectedDate = today.toISOString().slice(0, 7); // Format: YYYY-MM
      setSelectedDate(initialSelectedDate);
    }, []);
  
    useEffect(() => {
      // Update filteredData when jsonData or selectedDate changes
      filterData();
    }, [jsonData, selectedDate]);
    const fetchData = async () => {
      try {
        const response = await fetch("https://deltaserverer.onrender.com/totalSell8"); // Assumes time.json is in the public folder
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const filterData = () => {
      const selectedMonth = new Date(selectedDate).getMonth() + 1;
      const selectedYear = new Date(selectedDate).getFullYear();
  
      const filteredData = jsonData.filter((appointment) => {
        const appointmentMonth = new Date(appointment.time).getMonth() + 1;
        const appointmentYear = new Date(appointment.time).getFullYear();
    
        return (
          appointmentMonth === selectedMonth && appointmentYear === selectedYear 
        //   && user?.email === 'dskuddin@gmail.com'||user?.email === 'r8ahim@gmail.com'||user?.email ==='iqbal101200@gmail.c0m'
        );
      });
  
      setFilteredData(filteredData);
    };
  
    const handleDateChange = (event) => {
      setSelectedDate(event.target.value);
    };
  console.log(filteredData)
  console.log(selectedDate)






    const sellValues = filteredData.map((item) => parseFloat(item.totalSellValue) || 0);
    const cashValues = filteredData.map((item) => parseFloat(item.totalCashValue) || 0);
    const bankValues = filteredData.map((item) => parseFloat(item.totalBankValue) || 0);
    const glovoValues = filteredData.map((item) => parseFloat(item.glovoValue) || 0);
    const restomaticValues = filteredData.map((item) => parseFloat(item.restomaticValue) || 0);
    const phisnafelValues = filteredData.map((item) => parseFloat(item.phisnafelValue) || 0);

    // Calculate the sum using reduce
     const totalSell = sellValues.reduce((sum, value) => sum + value, 0);
     const totalCash = cashValues.reduce((sum, value) => sum + value, 0);
     const totalBank = bankValues.reduce((sum, value) =>  sum + value, 0);
     const totolGlovo = glovoValues.reduce((sum, value) =>  sum + value, 0);
     const totalRestomatic = restomaticValues.reduce((sum, value) =>  sum + value, 0);
     const totalPhisnafel = phisnafelValues.reduce((sum, value) =>  sum + value, 0);
     
     const handleDallete =(ider)=>{
      const id = ider;
      const data = {id:id}
     
     const proceed = window.confirm('Are you sure?');
     
     if(proceed){
         const url = `https://deltaserverer.onrender.com/items/${id}`;
         console.log(url);
         fetch(url, {
             method: 'DELETE',
             headers: {
                 'content-type': 'application/json'
             },
             body:JSON.stringify(data),
           
             
         })
         .then(res => res.json())
         .then(data => {
             console.log(data);
             const remaining = filteredData.filter(service => service._id !== id);
             setFilteredData(remaining);
         })
     }
  }





  return (
    <div className=''>

<div className="overflow-x-auto  ">

        <input
          type="month"
          id="month"
          className='btn'
          value={selectedDate}
          onChange={handleDateChange}
        />

  <table className="table  -full mx-0">
    <thead>
      <tr className='text-{15px} 
 text-white'>    
        <th className=''>date</th> 
        <th>Total Sell</th> 
        <th>Bank</th> 
        <th>Cash</th> 
        <th>Glovo</th> 
        <th>Restomatic</th>
<th>Pyszne pl</th>     
      
      </tr>
    </thead> 
    <tbody>
     
      {filteredData.map((sell, index ) =>
        <tr>
           <td>{sell.time.split('-')[2]}</td> 
          <td>{sell.totalSellValue}</td> 
          <td>{sell.totalBankValue}</td> 
          <td>{sell.totalCashValue}</td> 
          <td>{sell.glovoValue}</td>
          <td>{sell.restomaticValue}</td>  
          <td>{sell.phisnafelValue}</td> 
          <td><button  onClick={()=>handleDallete(sell._id)}  className="btn btn-error btn-xs">Dellete</button></td>



        </tr>
        
      )}
      
    </tbody> 
    <tfoot>
      <tr className=' text-red-500'>
        <th></th> 
        <th className='text-[17px]'>{Math.ceil(totalSell)}</th> 
        <th  className='text-[17px]'>{Math.ceil(totalBank)}</th> 
        <th className='text-[17px]'>{Math.ceil(totalCash)}</th> 
        <th className='text-[17px]'>{Math.ceil(totolGlovo)}</th> 
        <th className='text-[17px]'>{Math.ceil(totalRestomatic)}</th> 
        <th className='text-[17px]'>{Math.ceil(totalPhisnafel)}</th> 
      </tr>
    </tfoot>
  </table>
</div>

    </div>
  )
}

export default TotalSell8