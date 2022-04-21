import HeaderTop from './headerTop/HeaderTop';
import HeaderBottom from './headerBottom/HeaderBottom';

import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <HeaderTop />
                <HeaderBottom />
            </div>
        </div>
    );
}

export default Header;