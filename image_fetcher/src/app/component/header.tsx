// const React = require('react');
import React from 'react';
import Image from 'next/image';

export interface User{
    name: string;
}

export default function Header(){
    return(
        <div className='background:'>
            <div className=''>
            {/* <span>NewName<p>Checking</p></span> */}
            <nav>
                <ul>
                    <li>
                        {/* <a>
                            SomeName
                        </a> */}
                        <Image src="/next.svg" alt="sdfgss" width={100} height={100}></Image>
                    </li>
                </ul>
            </nav>
            
        </div>
        </div>
        
    );
}