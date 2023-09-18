import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [datum, setData] = useState([]);
  const [selectedData,setSelectedData]=useState([]);
  const [total,setTotal]=useState(0);
  const [remaining,setRemainining]=useState(0);

  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleBuyClick = (element) => {
    const isExist=selectedData.find(similer=>similer.Id===element.Id);
    let creditHour=element.Credit;
    if(isExist){
        alert('this is similar');
    }
    else{
        selectedData.forEach(cd=>{
            creditHour=creditHour+cd.Credit;
           
        });
        const remaining=20 -creditHour;
        if(creditHour>20){
          alert("ar nibo naa");
        }
        else{
          setRemainining(remaining);
          setTotal(creditHour);
          setSelectedData([...selectedData,element]);
          
        }
     

    }
    
    
    
  };

  return (
    <div className="grid grid-cols-4">
      {datum.map((element) => (
        <div key={element.Id} className="card card-compact bg-base-100 shadow-xl">
          <figure><img src={element.Image} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{element.Title}</h2>
            <p>Total Price: {element.Price}</p>
            <p>Credit Hours: {element.Credit}</p>
            <div className="card-actions justify-center">
              <button onClick={()=>handleBuyClick(element)} className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
     <Card props1={selectedData} props2={total} props3={remaining} />

     
    </div>
  );
};

export default Cards;
