import './headerTop.css';

import accountImg from '../../../assets/profile_user_icon.svg';
import searchZoom from '../../../assets/search-zoom.svg';

const HeaderTop = () => {
    return (
        <div className='header__top'>
            <h1 className='header__logo'>
                <a href='.'>
                    <span>E</span>news
                </a>
            </h1>
            <nav className='header__nav'>
                <ul className='header__nav-list'>
                    <li className='header__nav-item'>
                        <a href='.' className='header__nav-link'>
                            Новости
                        </a>
                    </li>
                    <li className='header__nav-item'>
                        <a href='.' className='header__nav-link'>
                            Погода
                        </a>
                    </li>
                    <li className='header__nav-item'>
                        <a href='.' className='header__nav-link'>
                            Видео
                        </a>
                    </li>
                </ul>
            </nav>
            <div className='header__user'>
                <img
                    src={accountImg}
                    alt='User account'
                    className='header__user-account'
                />
                <img
                    src={searchZoom}
                    alt='Search zoom'
                    className='header__search'
                />
            </div>
        </div>
    );
};

export default HeaderTop;
