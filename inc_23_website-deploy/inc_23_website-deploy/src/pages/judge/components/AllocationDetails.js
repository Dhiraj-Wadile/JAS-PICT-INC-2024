import React, { useState, useEffect } from "react";
import Buttons from "../../../components/buttons"; // Import the Buttons component
import { useAlreadyEvaluated, useGetAllocatedProjects } from "../../../hooks/judge.hooks";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AllocationDetails = () => {
  const [projects, setProjects] = useState([]);
  const [evaluatedProjects, setEvaluatedProjects] = useState([]);
  const judge = Cookies.get('jid')

  const { data, isLoading } = useGetAllocatedProjects(judge);
  const navigate = useNavigate()

  useEffect(() => {
    setProjects(data?.data?.projectsNotEvaluated)
    setEvaluatedProjects(data?.data?.projectsEvaluated)
    console.log(data)
  }, [data])


  const marksEntry = (e, pid) => {
    e.preventDefault();
    if (pid[0][0] === 'I') {
      navigate(`/judge/impetus/evaluate/${judge}/${pid}`);
    } else {
      navigate(`/judge/concepts/evaluate/${judge}/${pid}`);
    }
    // console.log(pid)
  }

  return (
    <div className="p-4">
      <div className="flex flex-col justify-center items-center rounded-xl">
        <div className="rounded-lg p-2 text-center text-xl text-gold mb-2">
          Judge ID: {judge ? judge : "unknown jid"}
        </div>
      </div>

      <div className="overflow-x-auto mb-20 mt-10">
        {isLoading ? (
          <p className="flex justify-center">Loading...</p>
        ) : (
          <div className="flex flex-col justify-center items-center rounded-xl">

            <table className="w-[95%] md:w-[80%] lg:w-1/2 border-collapse mb-4 rounded-2xl">
              <thead className="bg-blue-500 text-yellow-200 rounded-xl">
                <tr className="bg-gold border-[1px] border-gold">
                  <th className="p-2 text-center">Projects ID's</th>
                  <th className="p-2 text-center">Marks Entry</th>
                </tr>
              </thead>
              <tbody>
                {projects?.length > 0 ? (
                  projects?.map((project, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-faint_blue/20" : "bg-faint_blue"}>
                      <td className="text-center p-2">{project}</td>
                      <td className="p-2 flex justify-center items-center">
                        <Buttons
                          type='submit'
                          value={`Evaluate ${project}`}
                          className="text-blue-500 rounded-full"
                          onClick={(e) => marksEntry(e, project)}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    {data?.length === 0 && 
                      <td colSpan="2" className="text-center p-2 border-r-[1px] border-l-[1px] border-b-[1px] border-gold">No projects allocated</td>
                    }
                  </tr>
                )}
              </tbody>
            </table>


            <h1 className="rounded-lg p-2 text-center text-xl text-gold mb-2">Evaluated projects</h1>
            <table className="w-[95%] md:w-[80%] lg:w-1/2 border-collapse mb-4 rounded-2xl">
              <thead className="bg-blue-500 text-yellow-200 rounded-xl">
                <tr className="bg-gold border-[1px] border-gold">
                  <th className="p-2 text-center">Projects ID's</th>
                  <th className="p-2 text-center">Marks Entry</th>
                </tr>
              </thead>
              <tbody>
                {evaluatedProjects?.length > 0 ? (
                  evaluatedProjects?.map((project, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-faint_blue/20" : "bg-faint_blue"}>
                      <td className="text-center p-2">{project}</td>
                      <td className="p-2 flex justify-center items-center">
                        {/* You can add the button or link for marks entry here */}
                        <Buttons
                          type='submit'
                          value={`Evaluate ${project}`}
                          className="text-blue-500 rounded-full"
                          onClick={(e) => marksEntry(e, project)}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    {isLoading ? <td>Loading...</td> :
                      <td colSpan="2" className="text-center p-2 border-r-[1px] border-l-[1px] border-b-[1px] border-gold">No projects allocated</td>
                    }
                  </tr>
                )}
              </tbody>
            </table>




          </div>
        )}
      </div>
    </div>
  );
}

export default AllocationDetails;
