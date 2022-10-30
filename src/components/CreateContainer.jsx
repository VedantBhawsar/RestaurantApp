import React, { useState } from "react";
import { motion } from 'framer-motion';
import { MdOpacity, MdFastfood, MdCloudUpload } from "react-icons/md";
import { categories } from '../utils/data';
import Loader from "./Loader";


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

    const uploadImage = () => {

    }

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
                        className="w-full h-full bg-transparent font-semibold outline-none border-none placeholder:text-gray-400 text-textColor" />
                </div>

                <div className="w-full">
                    <select name="" id="" onChange={(e) => setCategory(e.target.value)} className="p-4 w-full items-center justify-center outline-none capitalize font-semibold text-gray-500 border-b-2 text-base rounded-md cursor-pointer">
                        <option value="other" >
                            Select Category
                        </option>
                        {categories && categories.map(item => (
                            <option key={item.id} value={item.ParamName} className="text-base border-0 outline-none capitalize bg-white text-gray-500 font-semibold">
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
                                </> : <> </>
                            }
                        </>
                    }
                </div>

                <div className="mdj:flex justify-between  gap-16">
                    <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                        <MdFastfood className="text-xl text-gray-700" />
                        <input type="text"
                            required value={title}
                            placeholder='Give me a title...'
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full h-full bg-transparent font-semibold outline-none border-none placeholder:text-gray-400 text-textColor" />
                    </div>

                    <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                        <MdFastfood className="text-xl text-gray-700" />
                        <input type="text"
                            required value={title}
                            placeholder='Give me a title...'
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full h-full bg-transparent font-semibold outline-none border-none placeholder:text-gray-400 text-textColor" />
                    </div>

                </div>
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full p-2 rounded-lg text-center text-lg font-semibold bg-green-400 text-emerald-800 hover:shadow-lg"
                    placeholder="Save"
                > Save</motion.button>


            </div>
        </div>
    );
};

export default CreateContainer;