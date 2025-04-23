import React from 'react';

import { Saira_Stencil_One } from 'next/font/google';

const sairaStencilOne = Saira_Stencil_One({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-saira-stencil-one',    
});

const Header: React.FC = () => {
    return (
        <header className="flex flex-row justify-center items-center">
            <div className='flex w-full max-w-[1400px] justify-between items-center'>
                <div className={"flex text-4xl h-[80px] items-center align-middle ms-[10%] text-primary uppercase " + sairaStencilOne.className}>
                    capputeeno                
                </div>
                <div className="flex flex-row mx-5 items-center align-middle me-[10%]">
                    <input
                        type="text"
                        placeholder="Procurando por algo específico?"
                        className="w-[300px] p-2 border border-gray-300 rounded"
                    />
                    <div className="text-xl cursor-pointer ms-5">
                        🛒
                    </div>
                </div>
            </div>            
        </header>
    );
};

export default Header;