import React from 'react'
import { drugData } from './Data';

export const Results = () => {
    return (
        <>
        
            <HomePageHeader/>
            <div className='data-container'>
                {drugData.map((details, index) => {
                    return(
                        <>
                        <table>
                            <tbody>
                                <tr>
                                <td>
                                    <h2>{details.name}</h2>
                                    <h5>{details.content}</h5>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                        </>
            );
        })}
        </div>
    </>
    );
};

const HomePageHeader = () => {
    return (
        
            <>
                 <header className='header'>
                    <p className='drug-name'>Drug Names</p>
                    <p className='content'>dynamic, pristine and edgy</p>
                </header>
            </>
    );     
    };

 