import React from 'react';
import Users from './Users/Users';
import classes from './FindUsers.module.css';
import Preloader from '../Preloader/Preloader';

let FindUsers = (props) => {
    let users = props.usersData.map(el => (<Users getCurrentApi={props.getCurrentApi} unfollow={props.unfollow} follow={props.follow} id={el.id} key={el.id} status={el.followed} src={el.photos.large} name={el.name} />))
    let pages = Math.ceil(props.totalCountPerson / props.pageSize);
    let arrPages = [];
    
    for(let i = 1; i<= pages; i++){
        arrPages.push(i)
    }

    
    return (
        <div>
            {props.loader ? <Preloader /> : null}
            {arrPages.map(i => {
                return <span onClick={()=> props.clickOnPage(i)} className={props.currentPage === i ? classes.choosedPage : null}>{i}</span>
            })}
            {users}
        </div>
    )
}

export default FindUsers
