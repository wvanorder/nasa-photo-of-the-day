import React from 'react';

export default function Right(props) {

    const today = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`
    console.log('Today is: ', today);

    const submitDate = e => {
        e.preventDefault();
       return props.chooseDate(e.target.value);
    }


    return(
        <div>
            <h3>Pick a Day and See its photo!</h3>
            <form>
                <input type='date' placeholder={today} value={props.chosenDate} onChange={submitDate} max={today}/>
            </form>
            <h4></h4>
            
        </div>
    )
}