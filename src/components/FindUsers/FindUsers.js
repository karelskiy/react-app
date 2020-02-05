import React, { useState } from 'react';
import Users from './Users/Users';
import classes from './FindUsers.module.css';
import Preloader from '../Preloader/Preloader';

let FindUsers = (props) => {
    let users = props.usersData.map(el => (<Users isUnfollow={props.isUnfollow} isFollow={props.isFollow} arrToggles={props.arrToggles} id={el.id} key={el.id} status={el.followed} src={el.photos.large} name={el.name} />))
    let pages = Math.ceil(props.totalCountPerson / props.pageSize);
    let arrPages = [];
    

    for (let i = 1; i <= pages; i++) {
        arrPages.push(i)
    }
    let portionSize = 10;
    let portionCount = Math.ceil(arrPages.length / portionSize);
    let[currentNumber, setCurrentNumber] = useState(1);
    let leftPortionPageNumber = (currentNumber - 1) * portionSize +1;
    let rightPortionPageNumber = currentNumber * portionSize;


    return (
        <div>
            {props.loader ? <Preloader /> : null}
            {currentNumber!= 1 && <button onClick={()=> setCurrentNumber(1)} >{'<--'}</button>}
            {currentNumber > 1 && <button onClick={()=> setCurrentNumber(currentNumber-1)} >{'<-'}</button>}
            {arrPages.filter(i=> i >= leftPortionPageNumber && i<= rightPortionPageNumber).
            
            map(i => {
                return (
                    <span key={i} onClick={() => props.clickOnPage(i)} className={props.currentPage === i ? classes.choosedPage : null}>{ i }</span>
                )
            })}
            {portionCount > currentNumber  &&  <button onClick={()=>setCurrentNumber(currentNumber + 1)}>-></button>}
            {currentNumber != portionCount && <button onClick={()=> setCurrentNumber(portionCount)}>--></button>}
            {users}
        </div>
    )
}

export default FindUsers
