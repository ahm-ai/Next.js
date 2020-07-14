import React from 'react'
import { useRouter } from 'next/router';


export default function index() {
    
    const router = useRouter()
    const {lvel2} = router.query;
    // console.warn(q);
    return (
        <div >
            <h3>Level3 Index {lvel2}</h3>
        </div>
    )
}
