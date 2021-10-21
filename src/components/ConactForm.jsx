import { useRef } from "react";

export default function ConactForm() {
  const inputStyle =
    "border-b focus:border-indigo-500 outline-none w-full px-0 py-2 mb-4";

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    nameRef.current.value = ``;
    emailRef.current.value = ``;
    messageRef.current.value = ``;

    alert(`Thanks for Contacting. We will contact you shortly`);
  }

  return (
    <section className="w-full md:w-3/5">
      <h1 className="py-3 w-full text-center rounded-t-sm text-white bg-indigo-500 text-3xl">
        Contact Us
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full mb-6 py-3 px-6 border rounded-b-sm border-indigo-500 md:mb-0"
      >
        <input
          ref={nameRef}
          className={inputStyle}
          type="text"
          placeholder="Enter Your
        Name"
          required
        />

        <input
          ref={emailRef}
          className={inputStyle}
          type="email"
          placeholder="Enter Your Email"
          requierd
        />

        <textarea
          ref={messageRef}
          className={inputStyle}
          cols="30"
          rows="9"
          placeholder="Enter Your Message..."
          required
        ></textarea>
        <button className="px-8 py-2 bg-indigo-500 text-white rounded-sm">
          Send
        </button>
      </form>
    </section>
  );
}
