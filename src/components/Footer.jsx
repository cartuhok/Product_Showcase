import React from 'react';

const Footer = () => {
    return (
        // Changed from <nav> to <footer> for semantic purposes, and added classes for fixed positioning at the bottom
        <footer className="bg-[#1F1E1E] py-4 px-8 md:fixed inset-x-0 bottom-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left-aligned logo */}
                <div className="text-xl font-bold text-white">
                    <p>Photo M8</p>
                </div>

                {/* Right-aligned links */}
                <div className="flex space-x-4 items-center font-manrope">
                    <a href="#" style={{ color: '#E5E5E5' }} className="hover:text-black">About</a>
                    <a href="#" style={{ color: '#E5E5E5' }} className="hover:text-black">Policy</a>
                    <a href="#" style={{ color: '#E5E5E5' }} className="hover:text-black">Contact</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
