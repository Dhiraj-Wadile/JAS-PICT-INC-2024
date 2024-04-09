import { useState, lazy, Suspense } from 'react';
import { Buttons, FormsBanner, RadioButtons, toast } from '../../components';
import { usePendingPayments, useVerifyPayment } from '../../hooks/admin.hooks';
import { checkAlphanumeric } from '../../utils/regex';

const Table = lazy(() => import('../../components/table.jsx'));

function ChooseProjects() {
    const [event, setEvent] = useState({ eventName: '' })
    const { isLoading, data } = usePendingPayments(event.eventName)
    // const verifyPaymentMutation = useVerifyPayment(event.eventName)

    const options = [
        {
            label: 'Concepts',
            value: 'concepts',
        },
        {
            label: 'Impetus',
            value: 'impetus',
        },

    ]

    const select_arr = [
        {
            label: 'Select',
            value: 'select',
        },
        {
            label: 'Unselect',
            value: 'unselect',
        }
    ]

    // function handleButtonClick(e, { ticket, email }) {
    //     e.preventDefault()
    //     verifyPaymentMutation.mutate({ ticket }, {
    //         onSuccess: () => {
    //             toast.success(`Verified Payment for ${email}`, { icon: '✅' })
    //         },
    //     })
    // }

    const columns = [
        {
            name: 'Select',
            //button: true,
            cell: (row) => (
                <RadioButtons
                    name="Select"
                    options={select_arr}
                    state={event}
                    setState={setEvent}
                />
                // <Buttons
                //     className='scale-75 md:py-2 py-1'
                //     onClick={(e) => handleButtonClick(e, row)}
                //     value='Verify'
                //     loading={verifyPaymentMutation.isLoading}
                // />
            ),
        },
        {
            name: 'Title',
            selector: (row) => row.title,
            sortable: true,
        },
        {
            name: 'Abstract',
            selector: (row) => row.abstract,
        },
        {
            name: 'Domain',
            selector: (row) => row.domain,
        },
    ]

    // const conditionalRowStyles = [{
    //     when: row => row.payment_id ? (row.payment_id.length < 8 || checkAlphanumeric(row.payment_id)) : true,
    //     style: {
    //         backgroundColor: 'rgba(242, 163, 15, 0.2)',
    //         color: 'red',
    //     },
    // }]

    return (
        <>
            <FormsBanner eventName='Select Event : ' />
            <div className='flex shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl border-light_blue items-center p-4 md:px-8 md:pt-6 border border-light_blue md:mx-20 mx-5 my-6'>
                <RadioButtons name='eventName' label='Select Event' options={options} state={event} setState={setEvent} />
            </div>
            {event.eventName &&
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Table columns={columns} loading={!event.eventName || isLoading} data={data?.data} keyField='pid' className='md:mx-20 mb-3 mx-5 mb-10' />
                </Suspense>
            }
        </>
    );
}

export default ChooseProjects;