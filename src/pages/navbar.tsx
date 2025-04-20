import React from 'react';

function Navbar() {
    return (
        <nav className="bg-zinc-900 text-white px-6 py-2">
            <div className="max-w-7xl mx-auto flex flex-col items-start text-left">
                <h1 className="text-2xl">Shashank Sreepathi</h1>
                <p className="text-gray-400 text-base mt-1">
                    Software Engineer, CS @ University of Washington
                </p>
            </div>
        </nav>
    );
}

export default Navbar;
