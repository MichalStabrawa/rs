import logo from '../assets/logo.jpg';
import Button from './Ui/Button';
import CartContext from '../store/CartContext';
import { useContext } from 'react';

export default function Header() {
    const cartCtx = useContext(CartContext)

    const totatlCartItems = cartCtx.items.reduce((totalNumberOfItems,item)=> {return totalNumberOfItems + item.quantity},0)

    console.log(totatlCartItems)
    return <header id="main-header">
        <div id="title">
            <img src={logo} alt="all restaurants"/>
            <h1>ReactFood</h1>
        </div>
        <nav>
            <Button textOnly>Cart({totatlCartItems})</Button>
        </nav>
    </header>
}