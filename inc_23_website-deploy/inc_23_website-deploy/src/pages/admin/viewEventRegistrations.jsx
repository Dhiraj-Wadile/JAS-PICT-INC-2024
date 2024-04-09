import { useState, lazy, Suspense, useMemo } from 'react';
import { FormsBanner, RadioButtons } from '../../components';
import { useGetRegistrations } from '../../hooks/admin.hooks';
import { projectDomains } from '../../static/data';

const Table = lazy(() => import('../../components/table.jsx'));

function ViewEventRegistrations() {
    const [event, setEvent] = useState({ eventName: '' })
    const { isLoading, data } = useGetRegistrations(event.eventName)
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

    const columns = useMemo(() => [

        {
            name: 'Mode',
            selector: row => row['mode'],
            width: '130px',
            cell: row => {
                switch (row.mode) {
                    case '1':
                        return 'Offline'

                    case '0':
                        return 'Online'

                    default:
                        return 'Unavailable'
                }
            },
        },

        {
            name: 'T',
            selector: row => row['tech_group_id'] === "" ? "0" : row['tech_group_id'],
            cell: row => row['tech_group_id'],
            width: '120px',
            wrap: true,
            sortable: true,
            omit: event.eventName === "pradnya"
        },




        {
            name: 'Payment ID',
            selector: row => row['payment_id'],
            cellExport: row => row['payment_id'],
            width: '160px',
            wrap: true,
            sortable: true,
        },
        {
            name: 'Team ID',
            selector: row => row['pid'],
            cellExport: row => row['pid'],
            width: '150px',
            sortable: true,
        },
        {
            name: 'Judged By',
            selector: row => row['evaluations'],
            cell: row => row['evaluations'],
            width: '220px',
            omit: event.eventName === 'pradnya' || event.eventName === 'impetus'
        },
        {
            name: 'Title',
            selector: row => row['title'],
            cellExport: row => row['title'],
            width: '240px',
            wrap: true,
            omit: event.eventName === 'pradnya',
        },
        {
            name: 'Abstract',
            selector: row => row['abstract'],
            cellExport: row => row['abstract'],
            width: '300px',
            omit: event.eventName === 'pradnya',
        },
        {
            name: 'Domain',
            selector: row => row['pid'],
            width: '140px',
            cell: row => projectDomains.find(({ value }) => value === row.pid.split('-')[0])?.label,
            omit: event.eventName === 'pradnya',
        },
        {
            name: 'Project Type',
            selector: row => row['project_type'],
            cellExport: row => row['project_type'],
            width: '180px',
            omit: event.eventName === 'pradnya',
        },
        {
            name: 'Sponsored',
            selector: row => row['sponsored'],
            width: '120px',
            omit: event.eventName === 'pradnya',
            cell: row => row.sponsored === '1' ? 'Yes' : 'No',
        },
        {
            name: 'Company',
            selector: row => row['company'],
            cellExport: row => row['company'],
            width: '200px',
            omit: event.eventName === 'pradnya',
        },
        {
            name: 'NDA',
            selector: row => row['nda'],
            width: '80px',
            omit: event.eventName === 'pradnya',
            cell: row => row.nda === '1' ? 'Yes' : 'No',
        },
        {
            name: 'Members Name',
            selector: row => row['name'],
            cell: row => <ol className='list-disc'>{row.name.split(',').map((name, index) => <li key={index}>{name}<span className='hidden'> , </span></li>)}</ol>,
            width: '200px',
        },
        {
            name: 'Members Phone',
            selector: row => row['phone'],
            cell: row => <ol className='list-disc'>{row.phone.split(',').map((phone, index) => <li key={index}>{phone}<span className='hidden'> , </span></li>)}</ol>,
            width: '180px',
        },
        {
            name: 'Members Email',
            selector: row => row['email'],
            cell: row => <ol className='list-disc'>{row.email.split(',').map((email, index) => <li key={index}>{email}<span className='hidden'> , </span></li>)}</ol>,
            width: '240px',
        },
        {
            name: 'College',
            width: '300px',
            selector: row => row['college'],
            cellExport: row => row['college'],
        },
        {
            name: 'Year',
            width: '90px',
            selector: row => row['year'],
            omit: event.eventName === 'concepts',
            cell: row => {
                switch (row.year) {
                    case 'Se':
                        return 'Senior'

                    case 'Ju':
                        return 'Junior'

                    default:
                        return row.year
                }
            }
        },
        {
            name: 'City',
            width: '130px',
            selector: row => row['city'],
            cellExport: row => row['city'],
        },
        {
            name: 'District',
            width: '130px',
            selector: row => row['district'],
            cellExport: row => row['district'],
        },
        {
            name: 'Locality',
            width: '100px',
            selector: row => row['locality'],
            cell: row => row.locality === '1' ? 'Urban' : 'Rural',
        },
        {
            name: 'Guide Name',
            width: '200px',
            selector: row => row['guide_name'],
            cellExport: row => row['guide_name'],
            omit: event.eventName === 'pradnya',
        },
        {
            name: 'Guide Email',
            width: '240px',
            selector: row => row['guide_email'],
            cellExport: row => row['guide_email'],
            omit: event.eventName === 'pradnya',
        },
        {
            name: 'Guide Phone',
            width: '150px',
            selector: row => row['guide_phone'],
            omit: event.eventName === 'pradnya',
            cell: row => row.guide_phone === '' ? 'Unavailable' : row.guide_phone,
        },
        {
            name: 'HOD Email',
            width: '240px',
            selector: row => row['hod_email'],
            cellExport: row => row['hod_email'],
            omit: event.eventName === 'pradnya',
        },
        {
            name: 'Mode',
            selector: row => row['mode'],
            width: '130px',
            cell: row => {
                switch (row.mode) {
                    case '1':
                        return 'Offline'

                    case '0':
                        return 'Online'

                    default:
                        return 'Unavailable'
                }
            },
        },
        {
            name: 'Date',
            width: '160px',
            selector: row => row['date'],
            cellExport: row => row['date'],
            sortable: true,
        },
    ], [event.eventName])

    const expandableRowsComponent = ({ data: { abstract } }) => <p className='px-6 py-2 text-sm'><strong className='text-lg'>Abstract : </strong><pre className='whitespace-pre-wrap'>{abstract}</pre></p>

    return (
        <>
            <FormsBanner eventName='View Event Registrations' />
            <div className='flex shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl border-light_blue items-center p-4 md:px-8 md:pt-6 border border-light_blue md:mx-20 mx-5 my-6'>
                <RadioButtons name='eventName' label='Select Event' options={options} state={event} setState={setEvent} />
            </div>
            {event.eventName &&
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Table title={`${event.eventName.charAt(0).toUpperCase()}${event.eventName.slice(1)} Registrations ${new Date().toISOString().split('T')[0]}`} columns={columns} loading={!event.eventName || isLoading} data={data?.data} expandableRows={event.eventName !== 'pradnya'} expandableRowsComponent={expandableRowsComponent} keyField='pid' outerClassName='md:mx-20 mb-3 mx-5 mb-10' />
                </Suspense>
            }
        </>
    );
}

export default ViewEventRegistrations;