import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useGetJudge } from '../../../hooks/judge.hooks';
import { slots } from '../../../static/data';
import { BeatLoader } from 'react-spinners';

const Profile = () => {
  const [judgeData, setJudgeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { data } = useGetJudge(Cookies.get('jid'));

  useEffect(() => {
    let timer = setTimeout(() => {
      if (data) {
        setJudgeData(data.data);
        setIsLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [data]);

  return (
    <div className='my-8 md:my-12'>
      {isLoading ?
        <div className="flex justify-center items-center h-80">
          <BeatLoader color="#0e2558" size={30} />
        </div>
        :
        <div className="mx-auto w-[95%] sm:w-3/4 lg:w-1/2 p-5 bg-faint_blue text-gold shadow-lg rounded-lg overflow-hidden md:text-xl">
          <div className="px-4 py-2">
            <h2 className="text-center text-2xl font-bold mb-1">Judge Profile</h2>
            <p className="text-center text-xl text-gray-500 mb-2">INC 2024</p>

            {/* User Details */}
            <div className="flex mb-2">
              <div className="w-1/2 pr-2">
                <p className="font-semibold text-gray-500">First Name:</p>
                <p className="font-bold">{judgeData?.name?.split(" ")[0]}</p>
              </div>

              <div className="w-1/2 pl-2">
                <p className="font-semibold text-gray-500">Last Name:</p>
                <p className="font-bold">{judgeData?.name?.split(" ")[judgeData?.name?.split(" ").length - 1]}</p>
              </div>
            </div>

            <div className="flex mb-2">
              <div className="w-1/2 pr-2">
                <p className="font-semibold text-gray-500">Phone:</p>
                <p className="font-bold">{judgeData.phone}</p>
              </div>

              <div className="w-1/2 pl-2">
                <p className="font-semibold text-gray-500">Company:</p>
                <p className="font-bold">{judgeData.company}</p>
              </div>
            </div>

            <div className="mb-2">
              <p className="font-semibold text-gray-500">Email ID:</p>
              <p className="font-bold">{judgeData.email}</p>
            </div>

            <div className="mb-2">
              <p className="font-semibold text-gray-500">Address:</p>
              <p className="font-bold">{judgeData.residential_address}</p>
            </div>

            <div className="mb-2">
              <p className="font-semibold text-gray-500">Domains:</p>
              <p className='font-bold'>{judgeData?.domains?.map((domain, index) => (
                <span key={index}>{index === 0 ? '' : ', '}{domain}</span>))}
              </p>
            </div>

            <div className="mb-2">
              <div className="">
                <p className="font-semibold text-gray-500">Slots:</p>
                <p className='font-bold text-md'>
                  {judgeData?.slots?.map((slot, index) => {
                    const selectedSlot = slots.find((s) => s.value === slot);
                    return <span key={index} className='text-[0.95rem] lg:text-lg'>{index === 0 ? '' : <br />}{selectedSlot ? selectedSlot.label.split(" ")[0].substring(0, 3) + ' ' + selectedSlot?.label.split(" ").slice(1).join(" ") : 'Unknown Slot'}</span>;
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    </div >
  );
}

export default Profile;
