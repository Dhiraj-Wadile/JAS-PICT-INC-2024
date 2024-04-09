import { useState, lazy, Suspense, useMemo, useCallback } from 'react';
import { Buttons, FormsBanner, RadioButtons, toast } from '../../components';
import { usePendingPayments, useVerifyPayment } from '../../hooks/admin.hooks';
import { checkAlphanumeric } from '../../utils/regex';

const Table = lazy(() => import('../../components/table.jsx'));

function VerifyEventRegistration() {
    const [event, setEvent] = useState({ eventName: '' })
    const { isLoading, data } = usePendingPayments(event.eventName)
    const verifyPaymentMutation = useVerifyPayment(event.eventName)

    // if (data) console.log(data)

    const options = [
        {
            label: 'Concepts',
            value: 'concepts',
        },
        {
            label: 'Impetus',
            value: 'impetus',
        },
        {
            label: 'Pradnya',
            value: 'pradnya',
        },
    ]

    const handleButtonClick = useCallback((e, { ticket, email }) => {
        e.preventDefault()
        verifyPaymentMutation.mutate({ ticket }, {
            onSuccess: () => {
                toast.success(`Verified Payment for ${email}`, { icon: '✅' })
            },
        })
    }, [verifyPaymentMutation])

    const columns = useMemo(() => [
        {
            name: 'Verify',
            button: true,
            cellExport: () => 'Verification Pending',
            cell: row => (
                <Buttons
                    className='scale-75 md:py-2 py-1'
                    onClick={(e) => handleButtonClick(e, row)}
                    value='Verify'
                    loading={verifyPaymentMutation.isLoading}
                />
            ),
        },
        {
            name: 'Ticket',
            width: '220px',
            selector: row => row['ticket'],
            cellExport: row => row['ticket'],
        },
        {
            name: 'Techfiesta',
            width: '120px',
            selector: row => row['step_3']['tech_group_id'],
            cellExport: row => row['step_3']['tech_group_id'],
        },

        {
            name: 'Team Members',
            width: '600px',
            selector: row => row['step_2'],
            cell: row => (
                <span>
                    {Array.isArray(row['step_2']) && row['step_2'].map(member => (
                        <div key={member.email}>
                            <li>{member.name} - <span className='text-gold'>{member.phone} </span> </li>
                        </div>
                    ))}
                </span>
            ),
            cellExport: row => (
                <span>
                    {Array.isArray(row['step_2']) && row['step_2'].map(member => (
                        <div key={member.email}>
                            <li>{member.name} - <span className='text-gold'>{member.phone} </span> </li>
                        </div>
                    ))}
                </span>
            ),
        }
        ,
        {
            name: 'Transaction ID',
            width: '200px',
            selector: row => row['payment_id'],
            cellExport: row => row['payment_id'],
        },

        {
            name: 'College',
            width: '400px',
            selector: row => row.step_3.college,
            cellExport: row => row.step_3.college
        },
        {
            name: 'Date',
            width: '150px',
            selector: row => row['date'],
            cell: row => {
                const date = new Date(row['date']);
                const day = date.getDate().toString().padStart(2, '0');
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const year = date.getFullYear();
                return `${day}-${month}-${year}`;
            },
            cellExport: row => {
                const date = new Date(row['date']);
                const day = date.getDate().toString().padStart(2, '0');
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const year = date.getFullYear();
                return `${day}-${month}-${year}`;
            },
            sortable: true,
        },

    ], [verifyPaymentMutation, handleButtonClick])

    const conditionalRowStyles = [{
        when: row => row.payment_id ? (row.payment_id.length < 8 || checkAlphanumeric(row.payment_id)) : true,
        style: {
            backgroundColor: 'rgba(242, 163, 15, 0.2)',
            color: 'red',
        },
    }]

    return (
        <>
            <FormsBanner eventName='Verify Event Registrations' />
            <div className='flex shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl border-light_blue items-center p-4 md:px-8 md:pt-6 border md:mx-20 mx-5 my-6'>
                <RadioButtons name='eventName' label='Select Event' options={options} state={event} setState={setEvent} />
            </div>
            {event.eventName &&
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Table title={`${event.eventName.charAt(0).toUpperCase()}${event.eventName.slice(1)} - Pending Payment Verification ${new Date().toISOString().split('T')[0]}`} columns={columns} loading={!event.eventName || isLoading} conditionalRowStyles={conditionalRowStyles} data={data?.data} keyField='payment_id' outerClassName='md:mx-20 mb-3 mx-5 mb-10' />
                </Suspense>
            }
        </>
    );
}

export default VerifyEventRegistration;
