import { useMutation, useQuery } from '@tanstack/react-query';
import { registerJudge, getJudgeAllocations, evaluateProject, getJudge, referralConcepts } from '../api';
import errorParser from '../utils/errorParser';
import { toast } from '../components';


function useReferralConcepts() {
    const { mutate, isLoading, isSuccess, isError, data, error } = useMutation(referralConcepts(), {
        onError: (err) => {toast.warn("Error in form")
        }
    })
    return { mutate, isLoading, isSuccess, isError, data, error }
}

export {
    useReferralConcepts
};
