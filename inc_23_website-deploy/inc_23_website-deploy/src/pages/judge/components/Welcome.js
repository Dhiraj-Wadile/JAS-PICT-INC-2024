import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import logo from './logo_inc2.png';
import { Link, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useGetJudge } from '../../../hooks/judge.hooks';
import { BeatLoader } from 'react-spinners';

const Welcome = () => {
  const [judgeData, setJudgeData] = useState(null);
  const { data } = useGetJudge(Cookies.get('jid'));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (data) {
        setJudgeData(data?.data);
        setIsLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [data]);

  return (
    <div className="flex justify-center items-center pb-40 md:pt-20 pt-10 text-lg">
      {isLoading ? <div className="flex justify-center items-center h-80">
        <BeatLoader color="#0e2558" size={30} />
      </div> :
        <div className="flex flex-col justify-center text-justify items-center mx-5 lg:w-1/2 bg-faint_blue/30 p-10 rounded-xl">
          <div className="">
            <img src={logo} alt="InC Logo" className="w-40" />
          </div>
          <h2 style={{ color: '#FFD700' }}>Welcome, {judgeData?.name} </h2>
          <p>
            We extend our sincere gratitude for your presence as a judge in the Impetus and Concepts (InC) 2024 project competition. Your expertise and feedback play a pivotal role in the acknowledgment and rewarding of innovative projects within this esteemed platform. As a judge, your primary responsibility entails the thorough assessment of project submissions based on predefined criteria, coupled with the provision of constructive feedback to participants. We kindly request your utilization of the provided button to navigate to allocated projects :

          </p>
          <div>
            <div className='flex justify-center my-5'>

              <Link to={`/judge/allocation-details`} className="dashboard-link px-5 py-3 bg-orange-500 rounded-xl font-bold" >Allocated Projects</Link>

            </div>
          </div>
        </div>}
    </div>
  );
}

export default Welcome;
