import React, { useState } from "react";
import { motion } from 'framer-motion';
import { MdOpacity, MdFastfood, MdCloudUpload, MdFoodBank, MdAttachMoney } from "react-icons/md";
import { categories } from '../utils/data';
import Loader from "./Loader";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { onSnapshot } from "firebase/firestore";


const CreateContainer = () => {
    const [title, setTitle] = useState("");
    const [calories, setCalories] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState(null);
    const [imageAsset, setImageAsset] = useState(null);
    const [fields, setFields] = useState(false);
    const [alertStatus, setAlertStatus] = useState("danger");
    const [msg, setMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const uploadImage = (e) => {
        setIsLoading(true);
        const imageFile = e.target.files[0];
        const storageref = ref(storage, 'Images/${Date.now()}-${imageFile.name} ')
        const uploadTask = uploadBytesResumable(storageref, imageFile);

        uploadTask.on('state_changed', (snapshot) => {
            const uploadProgess = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        },


            (error) => {
                console.log(error);
                setMsg('Error While Uploading ! Try Again');
                setIsLoading(true);
                setAlertStatus("danger")
                setTimeout(() => {
                    setFields(false)
                    setIsLoading(false)
                }, 400);
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
                    setImageAsset(downloadURL);
                    setIsLoading(false)
                    setFields(true)
                    setMsg("Image Uploaded")
                    setAlertStatus("success")
                    setTimeout(() => {
                        setFields(false)
                    }, 4000);
                })
            }


        )
    }



    const deleteimage = () => { }

    const saveDetails = () => { }

    return (
        <div className="w-full min-h-screen flex items-center justify-center ">
            <div className="w-[90%] md:w-[50%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
                {fields && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus === "danger"
                            ? "bg-red-400 text-red-800"
                            : "bg-emerald-400 text-emerald-800"
                            }`}
                    >
                        {msg}
                    </motion.p>

                )
                }
                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                    <MdFastfood className="text-xl text-gray-700" />
                    <input type="text"
                        required value={title}
                        placeholder='Give me a title...'
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full h-full bg-transparent  outline-none border-none placeholder:text-gray-400 text-textColor" />
                </div>

                <div className="w-full">
                    <select name="" id="" onChange={(e) => setCategory(e.target.value)} className="p-4 w-full items-center justify-center outline-none capitalize font-semibold text-gray-500 border-b-2 text-base rounded-md cursor-pointer">
                        <option value="other" >
                            Select Category
                        </option>
                        {categories && categories.map(item => (
                            <option key={item.id} value={item.ParamName} className="text-base border-0 outline-none capitalize bg-white text-gray-500 ">
                                {item.name}
                            </option>
                        )
                        )}
                    </select>
                </div>

                <div className="group flex justify-center items-center flex-col border border-dotted border-gray-300 w-full h-225 md:h-420  rounded-lg text-gray-400">
                    {
                        isLoading ? <Loader /> : <>
                            {
                                !imageAsset ? <>
                                    <label classname="w-full h-full flex flex-col items-center justify-center ">
                                        <div className="w-full h-full flex flex-col items-center justify-center gap-2 py-14 md:py-0">
                                            <MdCloudUpload className="h-8 w-8" />
                                            <p className="">Drop Your Image Here</p>
                                        </div>
                                        <input type="file" accept="image/*" onChange={uploadImage} className="h-0 " />
                                    </label>
                                </> : <>
                                    <div className="relative h-full">
                                        <img src={imageAsset} alt="uploaded image" className="w-full h-full object-cover" />
                                        <button type="button" className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out" onClick={deleteimage}
                                        >
                                            <MdDelete className="text-white" />
                                        </button>
                                    </div>
                                </>
                            }
                        </>
                    }
                </div>

                <div className="w-full flex flex-col md:flex-row items-center gap-3">
                    <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                        <MdFoodBank className="text-xl text-gray-700" />
                        <input type="text"
                            required value={calories}
                            placeholder='Calories'
                            onChange={(e) => setCalories(e.target.value)}
                            className="w-full h-full bg-transparent  outline-none border-none placeholder:text-gray-400 text-textColor" />
                    </div>

                    <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                        <MdAttachMoney className="text-xl text-gray-700" />
                        <input type="number"
                            required value={price}
                            placeholder='Price'
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full h-full bg-transparent  outline-none border-none placeholder:text-gray-400 text-textColor" />
                    </div>
                </div>



                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full p-2 rounded-lg text-center text-lg  bg-green-400 text-emerald-800 font-semibold hover:shadow-lg"
                    placeholder="Save"
                    onClick={saveDetails}

                > Save</motion.button>


            </div>
        </div>

    );
};

export default CreateContainer;