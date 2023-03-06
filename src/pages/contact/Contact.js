import React from 'react';

import { toast } from 'react-hot-toast';
import { BiPhone } from 'react-icons/bi';
import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import PathBanner from '../../components/reuseable/PathBanner';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        if (!name || !email || !message) {
            return toast.error('Please fill up the required fields');
        }
        // emailjs
        //     .sendForm(
        //         'service_quexl4i',
        //         'template_law2mte',
        //         e.target,
        //         'ABeQVmFkzyPo0SWB5'
        //     )
        //     .then((res) => {
        //         if (res.text === 'OK') {
        //             toast.success('Successfully Sent message');
        //         }
        //     })
        //     .catch((err) => {
        //         if (err) {
        //             toast.error('Something went wrong, Please try again later');
        //         }
        //     });
        e.target.reset();
    };
    return (

        <>
            <PathBanner to='contact us' />
            <div className=" mt-12 text-black pt-5 lg:px-28 md:px-16 px-5 pb-10">

                <div>

                    <div className="lg:grid grid-cols-2 mx-auto  ">
                        <div className=" lg:mr-12 md:mr-10">
                            <h1 className="lg:text-4xl  md:text-3xl text-3xl font-bold text-sky-500  ">
                                DON'T BE SHY !
                            </h1>
                            <p className="py-4">
                                Feel free to get in touch with me. If you have any query to me
                                or any kind of work you can send me a message from here. It will
                                be my please to have your message
                            </p>
                            <div className=" text-black">
                                <div className="flex  ">

                                    <div>
                                        <IoHomeOutline className='inline-block  text-xl mr-2 text-blue-500 ' />
                                    </div>
                                    <div>
                                        <h1 className="font-semibold">Address </h1>
                                        <h3>Sreepur, Gazipur , Dhaka - Bangladesh</h3>
                                    </div>
                                </div>
                            </div>
                            <div className=" text-black mt-2">
                                <div className="flex">

                                    <div>
                                        <MdOutlineEmail className='inline-block  text-xl mr-2 text-blue-500 ' />
                                    </div>
                                    <div className="my-auto">
                                        <h1 className=" font-semibold">Mail us </h1>
                                        <h3 className="text-thin text-blue-500">
                                            admin@job-portal.com
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className=" text-black mt-2">
                                <div className="flex ">
                                    <div>
                                        <BiPhone className='inline-block  text-xl mr-2 text-blue-500 ' />
                                    </div>
                                    <div>
                                        <h1 className=" font-semibold">Call Us</h1>
                                        <h3 className="text-thin">+8801634319696</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="  lg:mt-5 md:mt-0 sm:mt-5 h-full ">
                            <form onSubmit={handleSubmit} className=" my-auto">
                                <div className="grid lg:grid-cols-2 md:grid-cols-2 mb-4">
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                        autoComplete="off"
                                        required={true}
                                        className="input  lg:mr-2 md:mr-2 mb-2 lg:mb-0 md:mb-0 bg-sky-50 text-black "
                                    />
                                    <input
                                        name="email"
                                        type="text"
                                        required={true}
                                        placeholder="Your email"
                                        autoComplete="off"
                                        className="input   text-black bg-sky-50"
                                    />
                                </div>
                                <div className="form-control mb-4 flex ">
                                    <input
                                        name="subject"
                                        type="text"
                                        autoComplete="off"
                                        placeholder="Subject"
                                        className="input bg-sky-50 w-full  text-black"
                                    />
                                </div>
                                <div className="form-control mb-3">
                                    <textarea
                                        name="message"
                                        type="text"
                                        required={true}
                                        placeholder="Your message"
                                        className="textarea text-black  w-full  bg-sky-50"
                                    />
                                </div>

                                <div className=" flex justify-end">
                                    <button
                                        type="submit"
                                        value="Send Message"
                                        className="btn border  mt-5 mb-3 my-auto send_button bg-blue-100 text-blue-500 border-none hover:bg-blue-500 hover:text-white hover:border-none duration-300"
                                    >
                                        <span className="mr-1"> Send Message </span>
                                        {/* <IconButton aria-label="delete" size="large">
                                        <SendIcon fontSize="small" className=" text-black" />{' '}
                                    </IconButton> */}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* </div> */}

            </div>
        </>
    );
};

export default Contact;