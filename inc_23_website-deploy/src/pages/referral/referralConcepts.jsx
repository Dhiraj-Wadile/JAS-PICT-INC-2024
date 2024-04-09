import React, { useState } from "react";
import { Buttons, Dropdown, FormsBanner, InputBox, toast } from "../../components";
import { departments } from "../../static/data";
import { useReferralConcepts } from "../../hooks/referral.hooks";
import { useParams } from "react-router-dom";

function ReferralConcepts() {
    // State variables for form fields
    const eventName = "Concepts";
    // console.log(eventName);

    const [formValues, setFormValues] = useState({
        name_faculty: "",
        organization_faculty: "",
        department_faculty: "",
        phone_faculty: "",
        email_faculty: "",
        designation: "",
    });
    const referralConcepts = useReferralConcepts()


    const initialJudge = {
        name_judge: '',
        phone_judge: '',
        email_judge: '',
        organization_judge: '',
        location_judge: '',
        experience_judge: 3,
        relation_judge: '',
    };


    const [numInitialJudges, setNumInitialJudges] = useState(1);
    const [judgeDetails, setJudgeDetails] = useState(Array.from({ length: numInitialJudges }, () => ({ ...initialJudge })));

    // console.log(judgeDetails, judgeDetails.length);

    const addJudge = (e) => {
        e.preventDefault();
        setJudgeDetails((prevDetails) => [...prevDetails, { ...initialJudge }]);
    };

    const mode = [
        {
            value: "1",
            label: "Offline",
        },
        {
            value: "0",
            label: "Online",
        },
    ];

    // State variable for errors
    const [errors, setErrors] = useState({});

    // Event handler for form field changes
    const handleInputChange = (event, index) => {
        const { name, value } = event.target;
        // console.log(name, value);
        setJudgeDetails((prevState) => {
            let data = [...prevState];
            data[index][name] = value;
            return data;
        });
        // console.log(judgeDetails);
    };

    const handleFacultyChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const removeJudge = () => {
        setJudgeDetails((prevDetails) => prevDetails.slice(0, -1));
    };

    const [success, setSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false);




    // Event handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)

        
        const referralDetails = {
            recommender: [formValues],
            judges: [...judgeDetails],
            eventName: eventName
        };
        // console.log(referralDetails)

        referralConcepts.mutate(referralDetails, {
            onSuccess: (res) => {
                // console.log(res)
                toast.success('Judges Referred Successfully!');
                setSuccess(true);
                setIsLoading(false);
            },
        });
    };

    return (
        <>
            <FormsBanner
                eventName="Judges Referral InC 2024 - Concepts"
                eventDescription="- Your Requested to refer respective Judge by filling the following Form.<br/><br/> - Please provide atleast one Refernce of the potential Judge. It is really appreciable if judge is made aware about InC-2024 event"
            />
            <div className="md:mx-auto md:my-6 md:flex md:justify-center mt-8 mr-1 ml-1 ">
                {!success ? <form
                    className="md:w-6/12 w-full rounded-lg px-6 pt-6 pb-8 mb-4 border"
                    onSubmit={handleSubmit}
                >
                    <div className="flex justify-center items-center w-full mb-4">
                        <div className="bg-faint_blue text-white p-4 rounded-lg md:w-3/12 w-full border border-blue-900 shadow-md">
                            <h2 className="text-center text-lg">Referred By</h2>
                        </div>
                    </div>

                    {/* Faculty fields */}
                    <InputBox
                        label="Name of Faculty / Employee (Full Name)"
                        type="text"
                        name="name_faculty"
                        placeholder="Full Name"
                        value={formValues.name_faculty}
                        onChange={(e) => handleFacultyChange(e)}
                        required
                        error={errors.name_faculty}
                    />
                    <InputBox
                        label="Organization of Faculty/Employee"
                        type="text"
                        name="organization_faculty"
                        placeholder="Enter Organization"
                        value={formValues.organization_faculty}
                        onChange={(e) => handleFacultyChange(e)}
                        required
                        error={errors.organization_faculty}
                    />
                    <div className="md:flex md:flex-wrap md:-mx-2">
                        <div className="md:w-1/2 md:px-2">
                            <Dropdown
                                label="Department of Faculty (Optional)"
                                options={[
                                    { value: "", label: "Select", selected: true },
                                    ...departments,
                                ]}
                                name="department_faculty"
                                state={formValues.department_faculty}
                                setState={setFormValues}
                                error={errors.department_faculty}
                            />
                        </div>
                        <div className="md:w-1/2 md:px-2">
                            <InputBox
                                label="Designation"
                                type="text"
                                name="designation"
                                placeholder="Enter Designation"
                                value={formValues.designation}
                                onChange={(e) => handleFacultyChange(e)}
                                required
                                error={errors.designation}
                            />
                        </div>
                    </div>

                    <div className="md:flex md:flex-wrap md:-mx-2">
                        <div className="md:w-1/2 md:px-2">
                            <InputBox
                                label="Phone"
                                type="tel"
                                name="phone_faculty"
                                placeholder="Enter Phone no."
                                maxLength={10}
                                value={formValues.phone_faculty}
                                onChange={(e) => handleFacultyChange(e)}
                                required
                                error={errors.phone_faculty}
                            />
                        </div>
                        <div className="md:w-1/2 md:px-2">
                            <InputBox
                                label="Email"
                                type="email"
                                name="email_faculty"
                                placeholder="Enter Email"
                                value={formValues.email_faculty}
                                onChange={(e) => handleFacultyChange(e)}
                                required
                                error={errors.email_faculty}
                            />
                        </div>
                    </div>
                    <br />
                    <br />

                    {/*--------------*/}
                    <div>
                        {judgeDetails.map((judge, index) => (
                            <div key={index}>
                                <div className="flex justify-center items-center w-full mb-4">
                                    <div className="bg-faint_blue text-white p-2 pl-1 md:p-4 sm:p-0 rounded-lg md:w-3/12 w-full border border-blue-900 shadow-md">
                                        <h2 className="text-center text-lg">Judge {index + 1}</h2>
                                    </div>
                                </div>

                                {/* Add your other InputBox components here for other judge details */}
                                <InputBox
                                    label={`Name of Judge ${index + 1}`}
                                    type="text"
                                    name="name_judge"
                                    placeholder="Enter Full Name "
                                    value={judgeDetails[index].name_judge}
                                    onChange={(e) => handleInputChange(e, index)}
                                    {...(index !== 0 ? {} : { required: true })}
                                    error={errors.name_judge_1}
                                />

                                <div className="md:flex md:flex-wrap md:-mx-2">
                                    <div className="md:w-1/2 md:px-2">
                                        <InputBox
                                            label="Phone"
                                            type="tel"
                                            name="phone_judge"
                                            placeholder="Enter Phone no."
                                            maxLength={10}
                                            value={judgeDetails[index].phone_judge}
                                            onChange={(e) => handleInputChange(e, index)}
                                            {...(index !== 0 ? {} : { required: true })}
                                            error={errors.phone_judge_1}
                                        />
                                    </div>
                                    <div className="md:w-1/2 md:px-2">
                                        <InputBox
                                            label="Email"
                                            type="email"
                                            name="email_judge"
                                            placeholder="Enter Email"
                                            value={judgeDetails[index].email_judge}
                                            onChange={(e) => handleInputChange(e, index)}
                                            {...(index !== 0 ? {} : { required: true })}
                                            error={errors.email_judge_1}
                                        />
                                    </div>
                                </div>
                                <InputBox
                                    label={`Company / Organization of Judge ${index + 1}`}
                                    type="text"
                                    name="organization_judge"
                                    placeholder="Enter Organization Name"
                                    value={judgeDetails[index].organization_judge}
                                    onChange={(e) => handleInputChange(e, index)}
                                    {...(index !== 0 ? {} : { required: true })}
                                    error={errors.organization_judge}
                                />

                                <div className="md:flex md:flex-wrap md:-mx-2">
                                    <div className="md:w-1/2 md:px-2">
                                        <InputBox
                                            label={`Location of Judge ${index + 1} (City)`}
                                            type="text"
                                            name="location_judge"
                                            placeholder="Enter Location"
                                            value={judgeDetails[index].location_judge}
                                            onChange={(e) => handleInputChange(e, index)}
                                            {...(index !== 0 ? {} : { required: true })}
                                            error={errors.location_judge}
                                        />
                                    </div>
                                    <div className="md:w-1/2 md:px-2">
                                        <InputBox
                                            label="Experience (No of Years)"
                                            type="number"
                                            name="experience_judge"
                                            placeholder="Enter Experience in Years "
                                            value={judgeDetails[index].experience_judge}
                                            onChange={(e) => handleInputChange(e, index)}
                                            {...(index !== 0 ? {} : { required: true })}
                                            min={3}
                                            error={errors.experience_judge_1}
                                        />
                                    </div>
                                </div>
                                <InputBox
                                    label="Relation To judge (Friend, Family Friend, Other)"
                                    type="text"
                                    name="relation_judge"
                                    placeholder="Enter Relation"
                                    value={judgeDetails[index].relation_judge}
                                    onChange={(e) => handleInputChange(e, index)}
                                    error={errors.name_judge_1}
                                />

                            </div>
                        ))}

                        <div className="flex space-x-5">
                            <Buttons className="mb-3" value="Add Judge" onClick={addJudge} />
                            {judgeDetails.length !== 1 && <Buttons className="mb-3" value="Remove Field" onClick={removeJudge} />}

                        </div>

                    </div>
                    <div className="flex justify-end">

                        <Buttons value="Submit" type="submit" loading={isLoading} />
                    </div>
                </form> : <div className="shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl _blue border-dashed items-center p-4 md:p-8 border border-white w-full md:mx-80 mb-10">

                    <p className="text-xl text-center text-gold font-bold mb-3">
                        Thank you for Referring judges for Concepts InC'24!
                    </p>

                </div>}



            </div>
        </>
    );
}

export default ReferralConcepts;
