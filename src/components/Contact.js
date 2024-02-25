import dhara from "../../assets/image/dhara.jpg";
import karan from "../../assets/image/karan.jpg";


const Contact = () => {
  return (
    <>
      <h1 className="text-5xl m-3 text-center font-bold">Our Team</h1>
      <div className=" flex justify-center">
      <div className=" border border-black shadow-md rounded-md  shadow-gray-600 w-fit m-5 p-3 ">
        <img className="rounded-full h-60 w-60" src={karan} />
        <h1 className="text-xl font-bold text-center m-2">Karan Ribadiya</h1>
        <h2 className="text-xl font-semibold text-center m-2">Web Developer</h2>
      </div>
      <div className="border border-black shadow-md rounded-md shadow-gray-600 w-fit m-5 p-3 ">
        <img className="rounded-full h-60 w-60 object-cover" src={dhara} />
        <h1 className="text-xl font-bold text-center m-2">Dhara Tukadiya</h1>
        <h2 className="text-xl font-semibold text-center m-2">Web Developer</h2>
      </div>
      </div>
    </>
  );
};

export default Contact;
