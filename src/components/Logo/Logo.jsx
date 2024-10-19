import logo from '../../assets/logo.png';
import './Logo.css';

function Logo() {
    return (
        <>
            <div className="logo-content">
              <img src={logo} alt="logo" />
            <h1>TO-DO LIST</h1>
            </div>     
        </>
    )
 
}

export default Logo;