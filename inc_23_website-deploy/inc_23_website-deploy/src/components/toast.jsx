import { ToastContainer, toast } from 'react-toastify';

function ToastUtils() {
    return (
        <ToastContainer
            position='top-right'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            draggable
            pauseOnHover
            theme='dark'
            className=''
            toastClassName='shadow-md shadow-light_blue/80 rounded-xl border border-light_blue p-4'
            bodyClassName='text-white'
            progressClassName=''
            toastStyle={{ backgroundColor: 'rgba(37, 99, 235, 0.2)' }}
        />
    )
}

export { ToastUtils, toast };