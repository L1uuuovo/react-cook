import React,{lazy,Suspense} from 'react'
import Home from './Home'
import { Route,Routes,useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
const Cuisine = lazy(()=>import('./Cuisine'))
const Searched = lazy(()=>import('./Searched'))
const Recipe = lazy(()=>import('./Recipe'))
// import Cuisine from './Cuisine'
// import Searched from './Searched'
// import Recipe from './Recipe'

function Page() {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/cuisine/:type' element={<Cuisine/>}/>
                    <Route path='/searched/:search' element={<Searched/>}/>
                    <Route path='/recipe/:name' element={<Recipe/>}/>
                </Routes>
            </Suspense>
        </AnimatePresence>
    )
}

export default Page
