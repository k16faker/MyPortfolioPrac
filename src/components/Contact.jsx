import React, {useRef} from "react";
import { LuPhone } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();


  return (
    <div
      id="contact"
      className="justify-between items-center w-[1000px] mx-auto h-[calc(100vh-80px)]"
    >
      <div className="w-[500px] mt-[50px] mx-auto text-center">
        <h1 className="text-3xl font-mono font-bold text-white">Contact</h1>
        <p className="text-white mt-[20px]">
          구인 관련 궁금하신점이 있다면 연락 주세요!
        </p>
      </div>
      <div className="flex items-center mt-[120px]">
        <div className="w-[700px] h-[700px] border rounded-xl bg-sky-600">
          <h1 className="text-center font-bold text-3xl font-serif mt-4 text-white">
            Contact
          </h1>
          <form className="w-full h-full">
            <div className="flex w-[500px] h-[50px] mx-auto mt-[20px] px-[50px] justify-between text-center">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-[250px] h-[40px] rounded-xl text-center border-black"
                ref={nameRef}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-[450px] h-[40px] rounded-xl text-center border-black"
                ref={emailRef}
              />
            </div>
            <div className="flex w-[500px] h-[300px] mx-auto mt-[20px]">
              <textarea
                name="message"
                placeholder="Message"
                className="w-[800px] h-[300px] rounded-xl text-center border-black"
                ref={messageRef}
              ></textarea>
            </div>
            <div className="flex w-[80px] h-[40px] mx-auto mt-4 hover:scale-110 transition-all">
              <button className="w-full h-full border rounded-lg bg-slate-700 text-white">
                Send
              </button>
            </div>
          </form>
        </div>
        <section className="text-white w-[300px] text-center font-mono">
          <div className="my-3">
            <p>아니면 여기로 연락주셔도 돼요!</p>
          </div>
          <div className="my-3">
            <LuPhone size={50} className="mx-auto" />
            <p>010-3113-0895</p>
          </div>
          <div>
            <AiOutlineMail size={50} className="mx-auto" />
            <p>sjyj98@naver.com</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
