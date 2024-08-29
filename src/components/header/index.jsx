import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { loginUser, logoutnUser } from "../../redux/user/actions";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const dispatch = useDispatch()

  console.log({ currentUser })

  const handleLoginClick = () => {
    dispatch(loginUser({nome: 'Bruno', email: 'bruno@bruno.com'}))
  }

  const handleLogoutClick = () => {
    dispatch(logoutnUser())
  }


  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick} >Sair</div>
        ) : (
          <div onClick={handleLoginClick} >Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header