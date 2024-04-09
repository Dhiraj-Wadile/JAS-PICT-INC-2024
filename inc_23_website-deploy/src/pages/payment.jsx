import { useEffect } from "react";
import logo from "../assets/images/logo.png";
import pictLogo from "../assets/images/pict_logo.png";
import { Buttons } from "../components";

function Payment() {
  useEffect(() => {
    const navbar = document.getElementsByClassName('navbar')
    navbar[0].className = 'hidden'
    const footer = document.getElementsByClassName('footer')
    footer[0].className = 'hidden'
  }, [])

  return (
    <div className="md:mx-20 text-center">
      <div className="payment-container pt-12 grid p-10 text-gold shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-b-xl border border-light_blue grid-cols-3 justify-items-center">
        <img src={logo} alt="img" className="h-20 w-20" />
        <h1 className="mb-2 text-center capitalize text-4xl font-bold ">
          PICT InC'24
          <span className="text-sm font-bold ">
            <p>April 5th - 7rd</p>
          </span>
        </h1>
        <img src={pictLogo} alt="img" className="h-20 rounded-md w-20" />
      </div>
      {/* <hr className='w-1/5 mx-auto' /> */}
      <h2 className="m-6 my-4 text-center capitalize text-4xl mt-8 underline decoration-gold font-bold ">
        Registered Successful !!
      </h2>
      {/* <hr className='w-1/5 mx-auto' /> */}
      {true ?
        <div className="payment-container grid justify-items-center border border-dashed rounded-md px-10 mt-6 p-6">
          <p className="text-2xl">Page will be updated within 24 hours</p>
        </div> :
        <div className="payment-container grid grid-cols-2 justify-items-center border border-dashed rounded-md px-10 mt-6 p-6">
          {/* <h3 className='mb-2 text-center capitalize text-2xl text-white mt-28'>Concepts</h3>
              <img src='https://drive.google.com/uc?export=view&id=1NgvXwsbT6SMkiyqr-GowrDwWpUCuWz-J' alt='img' className='h-15' />
              <div className='mt-28'>
                   <p className='text-white text-lg'>Payment id:cbjkbdkbhkc</p>
                   <p className='text-white text-lg'>Recipt id:6666666</p>
                   <p className='text-white text-2xl text-bold'>Transaction ID:98626171338</p>
              </div> */}
          <div className="inline-flex justify-center">
            <img
              src="https://drive.google.com/uc?export=view&id=1NgvXwsbT6SMkiyqr-GowrDwWpUCuWz-J"
              alt="img"
              className="h-24 w-24"
            />
            <h3 className="mt-8  text-center capitalize text-4xl text-gold">
              Concepts
            </h3>
          </div>
          <div className="mt-6">
            <p className="text-white text-lg">Payment ID: cbjkbdkbhkc</p>
            {/* <p className="text-white text-lg">Transaction Id:6666666</p> */}
            <p className="text-gold text-2xl text-bold">Receipt ID: 98626171338</p>
          </div>
          <h2 className=" mb-2 text-center capitalize text-xl font-semibold text-white">
            TEAM ID:XXXXX
          </h2>
          <h2 className="mb-2  text-center capitalize text-xl font-semibold text-white">
            Slot:juniors
          </h2>

          <div className="table-container items-center col-span-2  text-white py-8 ">
            <table className="table-fixed w-full  border-collapse border border-black rounded">
              <thead>
                <tr className="border-collapse border   text-gold border-black rounded">
                  <th className="border-collapse border p-2  border-black rounded">
                    Name
                  </th>
                  <th className="border-collapse border  border-black rounded">
                    Email
                  </th>
                  <th className="border-collapse border  border-black rounded">
                    Phone
                  </th>
                </tr>
              </thead>
              <tbody className="border-collapse border border-black rounded">
                <tr className="border-collapse border border-black rounded">
                  <td className="border-collapse border  p-2 border-black rounded">
                    Abhishek Jadhav
                  </td>
                  <td className="border-collapse border border-black rounded">
                    Abhi@gmail.com
                  </td>
                  <td className="border-collapse border border-black rounded">
                    9789467892
                  </td>
                </tr>
                <tr className="border-collapse border border-black rounded">
                  <td className="border-collapse border p-2 border-black rounded">
                    Abhishek Jadhav
                  </td>
                  <td className="border-collapse border border-black rounded">
                    Abhi@gmail.com
                  </td>
                  <td className="border-collapse border border-black rounded">
                    9789467892
                  </td>
                </tr>
                <tr className="border-collapse border border-black rounded">
                  <td className="border-collapse border p-2 border-black rounded">
                    Abhishek Jadhav
                  </td>
                  <td className="border-collapse border border-black rounded">
                    Abhi@gmail.com
                  </td>
                  <td className="border-collapse border border-black rounded">
                    9789467892
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="payment-container grid grid-cols-2  gap-x-20 justify-items-center  col-span-full">
            <div className=" ">
              <p className="mt-5 text-white">
                <span className="text-lg  text-gold font-bold">
                  Domain
                  <br />
                </span>
                Application Development
              </p>
              <p className="mt-5 text-white">
                <span className="text-lg text-gold font-bold">
                  College Name
                  <br />
                </span>
                PICT
              </p>
            </div>
            <div className="">
              <p className="mt-5 text-white">
                <span className="text-lg text-gold font-bold">
                  Type of Project
                  <br />
                </span>
                Hardware Based
              </p>
              <p className="mt-5 text-white">
                <span className="text-lg text-gold font-bold">
                  Guide Name
                  <br />
                </span>
                XYZ/xyz@gmail.com
              </p>
            </div>
            <div className="">
              <p className="mt-5 text-white">
                <span className="text-lg text-gold font-bold">
                  Sponsorship
                  <br />
                </span>
                Done
              </p>
              <p className="mt-5 text-white">
                <span className="text-lg text-gold font-bold">
                  Location
                  <br />
                </span>
                Pune
              </p>
            </div>
            <div className="">
              <p className="mt-5 text-white">
                <span className="text-lg text-gold font-bold">
                  Company Name
                  <br />
                </span>
                Mastercard
              </p>
              <p className="mt-5 text-white">
                <span className="text-lg text-gold font-bold">
                  Mode
                  <br />
                </span>
                Offline
              </p>
            </div>
          </div>
          <div className="w-full mt-10 col-span-full rounded-lg outline-dashed outline-2 outline-offset-[3px] outline-light_blue px-2 py-2 bg-faint_blue/10 ">
            <h2 className=" p-2 text-center text-2xl font-semibold text-white">
              Thank You For Participating in InC'24
            </h2>
          </div>
        </div>}
      <div className=" mt-10  text-left text- lg text-white">
        Regards,
        <br />
        Team INC,
        <br />
        queries.pictinc2024@gmail.com
        <br />
        7507224919
      </div>
      <Buttons value='Print' onClick={() => { window.print() }} />
      {/* <button class="mt-10 mb-3 bg-light_blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl">
        Print
      </button> */}
    </div>
  );
}

export default Payment;