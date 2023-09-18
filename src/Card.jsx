

const Card = ({props1,props2,props3}) => {
    return (
        <div>
            {
                props1.map((item)=>(
                    <li key={item.Id}>{item.Title}</li>
                ))
            }
            <p>Total Hour:{props2}</p>
            <p>Total remaining:{props3}</p>

            
        </div>
    );
};

export default Card;