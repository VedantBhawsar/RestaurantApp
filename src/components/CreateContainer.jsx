import React from 'react'
import { useState } from 'react';




const CreateContainer = () => {

    const [Title, setTitle] = useState("");
    const [Palories, setcalories] = useState("");
    const [Price, setPrice] = useState("");
    const [Category, setCategory] = useState(null);
    const [imageAsset, setImageAssest] = useState(null);
    const [fields, setFields] = useState(true);
    const [alertStatus, setAlertStatus] = useState("danger");
    const [msg, setMsg] = useState(null);
    const [isLoading, setisLoading] = useState(false);

    return (
        <div className='w-full min-h-full flex items-center justify-center'>
            <div className='w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center '>

            </div>
        </div>
    );
}

export default CreateContainer;