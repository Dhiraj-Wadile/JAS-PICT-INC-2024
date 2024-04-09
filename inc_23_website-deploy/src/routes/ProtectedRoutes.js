import { useNavigate } from 'react-router-dom';
import { useVerifyAdmin } from '../hooks/admin.hooks';
import { toast } from '../components';

function ProtectedRoutes({ children }) {
    const { isLoading, isSuccess, isError } = useVerifyAdmin()
    const authNavigator = useNavigate()
    // const toastID = toast.info('Authenticating admin login...', { autoClose: 3000, closeButton: true })


    if (isSuccess) {
        toast.success({ render: 'Authentication success' })
        // toast.dismiss(toastID)
        return children
    }
    if (isError) {
        // toast.dismiss(toastID)
        authNavigator('/auth')
        return
    }
}

export default ProtectedRoutes;