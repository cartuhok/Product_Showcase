import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-transparent py-4 px-8 md:fixed inset-x-0 top-0 overflow-hidden max-w-full">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left-aligned logo */}
                <div className="text-xl font-bold">
                    <img src='./Logo.png' alt="Logo"/>
                </div>

                {/* Right-aligned links */}
                <div className="flex space-x-4 items-center">
                    <a href="#" style={{ color: '#E5E5E5' }} className="hover:text-black">Specs</a>
                    <a href="#" style={{ color: '#E5E5E5' }} className="hover:text-black">Details</a>
                    <a href="#" style={{ color: '#E5E5E5', backgroundColor: '#FB3D3D' }} className="px-4 py-2 rounded">Buy Now</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
