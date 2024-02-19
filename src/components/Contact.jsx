import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex justify-center items-center w-full h-[calc(100vh-80px)]"
    >
      <div className="w-[1000px] h-[700px] border rounded-xl bg-sky-600">
        <h1 className="text-center font-bold text-3xl font-serif mt-4 text-white">Contact</h1>
        <form className="w-full h-full">
            <div className="flex w-[800px] h-[50px] mx-auto mt-[20px] px-[50px] justify-between text-center">
                <input type="text" name="name" placeholder="Name" className="w-[250px] h-[40px] rounded-xl text-center border-black" />
                <input type="email" name="email" placeholder="Email" className="w-[450px] h-[40px] rounded-xl text-center border-black" />
            </div>
            <div className="flex w-[800px] h-[300px] mx-auto mt-[20px]">
                <textarea name="message" placeholder="Message" className="w-[800px] h-[300px] rounded-xl text-center border-black"></textarea>
            </div>
            <div className="flex w-[80px] h-[40px] mx-auto mt-4 hover:scale-110 transition-all">
                <button className="w-full h-full border rounded-lg bg-slate-700 text-white">Send</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
