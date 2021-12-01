import React, { useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      console.log('clicked');
  
      emailjs.sendForm('service_c4k3vl3', 'template_2nxt21o', form.current, 'user_v0thehuKnj5uuToF980dp')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    useEffect(()=>{
      Aos.init({duration: 500});
  },[])

    return (
        <div id="contact" className="bg-gray-100">
          <div className="w-11/12 md:w-9/12 mx-auto py-8">
          <h1 className="mb-14 md:m-0 text-2xl md:text-3xl md:text-right pt-3 md:p-5 text-center font-bold text-gray-800">Contact</h1>
            <div data-aos="fade-up" className="bg-white rounded-3xl py-8">
            <form className="" ref={form} onSubmit={sendEmail}>
              <div className="flex flex-col justify-center items-center">

                  <label className="my-3 font-bold text-gray-500">Name</label>
                  <input class="w-9/12 py-3 px-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" type="text" placeholder="your name" name="name" />

                  <label className="my-3 font-bold text-gray-500">Email</label>
                  <input class="w-9/12 py-3 px-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" type="email" placeholder="your email" name="email" />
                  
                  <label className="my-3 font-bold text-gray-500">Message</label>
                  <textarea class="w-9/12 py-3 px-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="your message to me" name="message" />

                <input className="btn-green mt-3" type="submit" value="Send" />
              </div>
            </form>
            </div>
          </div>
      </div>
    );
   
};

export default Contact;