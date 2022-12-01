import { Suspense } from 'react';
import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = ()=>{

    return(
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={ logo } alt='Logo Work'/>
                        <ul>
                            {
                                routes.map(({to, name})=>
                                    <li key={to}>
                                        <NavLink 
                                            to={to} 
                                            className={({isActive})=> isActive ? 'nav-active' : ''}>
                                            { name }
                                        </NavLink>
                                    </li>
                                )
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {
                            routes.map(({ path, Component})=>
                                <Route 
                                    key={ path }
                                    path={ path } 
                                    element={<Component/>}/>
                            )
                        }
                        <Route path='/*' element={<Navigate to={routes[0].path} replace/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )

}