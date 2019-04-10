import React, { memo } from "react";
import { SVGIcon, VerdanaText, Button } from "../../../../components";
import "./UserLoginBox.css";

const getUserCard = (name,signOut) => (
    <div className='user-box-wrapper'>
        <VerdanaText text={name} classname='user-name'/>
        <Button text='выйти' classname='sign-out-button' handleClick={signOut}/>
    </div>
);

const getEmptyCard = (signIn) => (
    <div className='empty-box-wrapper'>
        <Button text='войти' classname='sign-in-button' handleClick={signIn}/>
    </div>
);

export const UserLoginBox = memo((props) => {
    const { loginState, userName, openModal, signOutFunc } = props
    console.log('check UserLoginBox props')
    console.log(props)
	return (
		<div className='user-box-wrapper'>
            {
                loginState ? getUserCard(userName,signOutFunc) : getEmptyCard(openModal)
            }
        </div>
	);
});

UserLoginBox.defaultProps = {
    loginState: false, 
    userName: 'test Name',
    openModal: ()=>console.log('check signIn'), 
    signOutFunc: ()=>console.log('check signOut'), 
};
