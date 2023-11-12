import logo from '../assets/logo.jpg';
import Button from './Ui/Button';
import CartContext from '../store/CartContext';
import { useContext } from 'react';
import UserProgressContext from '../store/UserProgressContext';

export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx =useContext(UserProgressContext);

    const totatlCartItems = cartCtx.items.reduce((totalNumberOfItems,item)=> {return totalNumberOfItems + item.quantity},0);

    function handleShowCart() {
        userProgressCtx.showCart()
    }

    return <header id="main-header">
        <div id="title">
            <img src={logo} alt="all restaurants"/>
            <h1>ReactFood</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}>Cart({totatlCartItems})</Button>
        </nav>
    </header>
}