import React, { useEffect, useState } from 'react';

function Client() {
    const [years, setYears] = useState(0);

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const startYear = 2009;
        const difference = currentYear - startYear;
    
        setYears(difference);
      }, []);

  return (
    <div className="client-container">
        <div className="client-div-one">
            <h1 className="client-hd">floSmart Statistics</h1>
        </div>
        <div className="client-div-two">
            <div className="client-numbers">
                <h1 className="client-header">{years}</h1>
                <p className="client-para">Years in operation</p>
            </div>
            <div className="client-numbers">
                <h1 className="client-header">500+</h1>
                <p className="client-para">Jobs completed</p>
            </div>
            <div className="client-numbers">
                <h1 className="client-header">9/10</h1>
                <p className="client-para">Client satisfaction</p>
            </div>
        </div>
    </div>
  )
}

export default Client