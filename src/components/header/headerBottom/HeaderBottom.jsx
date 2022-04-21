import './headerBottom.css';

const HeaderBottom = () => {
    return (
        <div className='header__bottom'>
            <ul className='header__categories'>
                <li className='header__categories-item'>
                    <a href='.' className='header__categories-link'>
                        Business
                    </a>
                </li>
                <li className='header__categories-item'>
                    <a href='.' className='header__categories-link'>
                        General
                    </a>
                </li>
                <li className='header__categories-item'>
                    <a href='.' className='header__categories-link'>
                        Health
                    </a>
                </li>

                <li className='header__categories-item'>
                    <a href='.' className='header__categories-link'>
                        Science
                    </a>
                </li>
                <li className='header__categories-item'>
                    <a href='.' className='header__categories-link'>
                        Sports
                    </a>
                </li>
                <li className='header__categories-item'>
                    <a href='.' className='header__categories-link'>
                        Technology
                    </a>
                </li>
                <li className='header__categories-item'>
                    <a href='.' className='header__categories-link'>
                        Entertainment
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default HeaderBottom;
