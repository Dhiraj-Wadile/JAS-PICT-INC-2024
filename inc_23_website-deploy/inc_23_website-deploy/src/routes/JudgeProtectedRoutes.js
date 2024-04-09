import { useNavigate } from 'react-router-dom';
import { useVerifyAdmin, useVerifyJudge } from '../hooks/admin.hooks';
import { toast } from '../components';

function JudgeProtectedRoutes({ children }) {
    const { isLoading, isSuccess, isError } = useVerifyJudge()
    const authNavigator = useNavigate()
    // const toastID = toast.info('Authenticating admin login...', { autoClose: 3000, closeButton: true })
    // console.log({children})

    if (isSuccess) {
        toast.update( { render: 'Authentication success', type: toast.TYPE.SUCCESS, isLoading: false })
        // toast.dismiss(toastID)
        return children
    }
    if (isError) {
        // toast.dismiss(toastID)
        authNavigator('/auth')
        return
    }
}

export default JudgeProtectedRoutes;