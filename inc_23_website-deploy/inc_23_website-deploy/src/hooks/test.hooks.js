// import { useMutation } from '@tanstack/react-query';
// import { registerEventStep1 } from '../api';
// import errorParser from '../utils/errorParser';
// import { toast } from '../components';

// function useRegisterJudge(setErrors  , eventName) {
//     const { mutate, isLoading, isSuccess, isError, data, error } = useMutation( registerEventStep1(eventName), {
//         onError: (err) => {
//             const parsedError = errorParser(err)
//             parsedError.error && toast.error(parsedError.error, { autoClose: 5000 })
//             setErrors(prevErrors => {
//                 for (const key in prevErrors) {
//                     if (parsedError.hasOwnProperty(key)) {
//                         prevErrors[key] = parsedError[key]
//                     }
//                 }
//                 return prevErrors
//             })
//             toast.error('Errors in the registration form. Please check the form and try again.', { autoClose: 5000 })
//         }
//     })
//     return { mutate, isLoading, isSuccess, isError, data, error }
// }

// export {
//     useRegisterJudge,
// }