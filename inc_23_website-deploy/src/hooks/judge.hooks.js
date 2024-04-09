import { useMutation, useQuery } from '@tanstack/react-query';
import { registerJudge, getJudgeAllocations, evaluateProject, getJudge } from '../api';
import errorParser from '../utils/errorParser';
import { toast } from '../components';
import { getAllocatedProjects } from '../api/requests';

function useRegisterJudge(setErrors, eventName) {
    const { mutate, isLoading, isSuccess, isError, data, error } = useMutation(registerJudge(eventName), {
        onError: (err) => {
            const parsedError = errorParser(err)
            if (parsedError.server) toast.error(parsedError.server, { autoClose: 5000 })
            else {
                parsedError.error && toast.error(parsedError[Object.keys(parsedError)[0]], { autoClose: 5000 })
                setErrors(prevErrors => {
                    for (const key in prevErrors) {
                        if (parsedError.hasOwnProperty(key)) {
                            prevErrors[key] = parsedError[key]
                        }
                    }
                    return prevErrors
                })
                toast.error('Errors in the registration form. Please check the form and try again.', { autoClose: 5000 })
            }
        }
    })
    return { mutate, isLoading, isSuccess, isError, data, error }
}

function useGetJudgeAllocations(jid) {
    const { isLoading, isError, data, error } = useQuery({ queryKey: ['judgeAllocations', jid], queryFn: getJudgeAllocations(jid), enabled: !!jid })
    if (isError) {
        const parsedError = errorParser(error)
        if (parsedError.server) toast.error(parsedError.server, { autoClose: 5000 })
        else {
            parsedError.error ?
                toast.error(parsedError[Object.keys(parsedError)[0]], { autoClose: 5000 })
                :
                toast.error('Errors while fetching data. Please check and try again.', { autoClose: 5000 })
        }
    }
    return { isLoading, data }
}

function useEvaluateProject(eventName) {
    const { mutate, isLoading, isSuccess, isError, data, error } = useMutation(evaluateProject(eventName), {
        onError: (err) => {
            console.log(err.response.status)
            const parsedError = errorParser(err)
            if (parsedError.server) toast.error(err.data.msg, { autoClose: 5000 })
            else {
                parsedError.error && toast.error(parsedError[Object.keys(parsedError)[0]], { autoClose: 5000 })
                if (err.response.status === 401) {
                    toast.error("Project already Evaluated");
                }
                toast.error('Errors in the submitting form. Please check the form and try again.', { autoClose: 5000 })
            }
        }
    })
    return { mutate, isLoading, isSuccess, isError, data, error }
}
function useGetJudge(jid) {
    // console.log(jid)
    const { isLoading, isError, data, error } = useQuery({ queryKey: ['judge', jid], queryFn: getJudge(jid), enabled: !!jid })
    if (isError) {
        const parsedError = errorParser(error)
        if (parsedError.server) toast.error(parsedError.server, { autoClose: 5000 })
        else {
            parsedError.error ?
                toast.error(parsedError[Object.keys(parsedError)[0]], { autoClose: 5000 })
                :
                toast.error('Errors while fetching data. Please check and try again.', { autoClose: 5000 })
        }
    }
    return { isLoading, data }
}


function useGetAllocatedProjects(jid) {
    // console.log(jid)
    const { isLoading, isError, data, error } = useQuery({ queryKey: ['judge', jid], queryFn: getAllocatedProjects(jid), enabled: !!jid })
    if (isError) {
        const parsedError = errorParser(error)
        if (parsedError.server) console.log("error")
        // else {
        //     parsedError.error ?
        //         toast.error(parsedError[Object.keys(parsedError)[0]], { autoClose: 5000 })
        //         :
        //         toast.error('Errors while fetching data. Please check and try again.', { autoClose: 5000 })
        // }
    }
    return { isLoading, data }
}


export {
    useRegisterJudge,
    useGetJudgeAllocations,
    useEvaluateProject,
    useGetJudge,
    useGetAllocatedProjects
}