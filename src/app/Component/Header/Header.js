import React from 'react';

const Header = () => {
    return (
        <header className='py-5 bg-slate-700'>
            <div className="container mx-auto xl:px-24">
                <div className="flex align-center justify-between text-white">
                    <span>Logo</span>
                    <ul className='flex align-center gap-x-8'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='#'>Login</a></li>
                    </ul>
                </div>
            </div>

        </header>
    );
};

export default Header;