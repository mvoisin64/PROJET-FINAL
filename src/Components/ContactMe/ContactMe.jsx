import React from 'react';

const ContactMe = () => {
    return (
        <section id="ContactMe" className='"grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-4 pt-24 pb-40'>
       
                <h2 className='text-3xl mb-4 text-center font-bold pb-14'>Get in touch </h2>
        
           <form className="contact-form flex flex-col gap-10">
                <div className='flex flex-col'>
                    <label htmlFor="name">Name</label>
                    <input className="border-b-2 border-black outline-none px-2 py-0" type="text" id="name" name="name" required />
                </div>
                <div className=' flex flex-col'>
                    <label htmlFor="email">Email</label>
                    <input className="border-b-2 border-black outline-none px-2 py-0" type="email" id="email" name="email" required />
                </div>
                <div className=' flex flex-col'>
                    <label htmlFor="message">Message</label>
                    <textarea className="border-b-2 border-black outline-none px-2 py-0 bg-gray-100" id="message" name="message" rows="5" required />
                </div>
                <button className='font-thin text-white hover:text-black rounded-full border bg-black hover:bg-white px-4 py-2   mx-auto' type="submit">Send</button>
            </form>
           
        </section>
    );
};

export default ContactMe;