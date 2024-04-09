import React from 'react';
import { RadioButtons, Checkboxes, toast, Buttons } from '../components';
import Dropdown from '../components/dropdown';
function Test() {
    const [state, setState] = React.useState({ domains: ['AD'] })
    const [checked, setChecked] = React.useState({ isPICT: '' })

    const options = [
        {
            value: '1',
            label: 'Yes',
            onChange: function (e) { }
        },
        {
            value: '0',
            label: 'No',
        },
    ]

    const domains = [
        {
            value: 'AD',
            label: 'Application Development',
        },
        {
            value: 'ML',
            label: 'Machine Learning',
        },
        {
            value: 'BL',
            label: 'Blockchain',
        },
        {
            value: 'OT',
            label: 'Others',
        },
    ]

    function a(e) {
        e.preventDefault()
        // console.log('Submitted');
        toast.success('Submitted', { icon: '🔥' })
    }

    function submit(e) {
        e.preventDefault()
        // console.log(e.target.isPICT.value);
        // console.log(state.domains);
    }

    return (
        <div className='w-full min-h-screen p-10 justify-center items-center flex flex-col gap-6 border rounded'>
            <form className='w-1/2' onSubmit={submit}>
                <RadioButtons label='Are you from PICT ?' options={options} state={checked} setState={setChecked} name='isPICT' required />
                <Checkboxes label='Domains' options={domains} state={state} setState={setState} name='domains' />
                <Buttons value='Submit' onClick={a} />
                <Dropdown label="Domain of proj" options={domains} state={state} setState={setState} name="abc"/>
            </form>
        </div>
    );
}

export default Test;