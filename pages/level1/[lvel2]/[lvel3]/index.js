import React from 'react'
import { useRouter } from 'next/router';


export default function index() {

    const router = useRouter()
    const {lvel3} = router.query;
    // console.warn(q);
    return (
        <div >
            <h3>Level3 Index {lvel3}</h3>
        </div>
    )
}
