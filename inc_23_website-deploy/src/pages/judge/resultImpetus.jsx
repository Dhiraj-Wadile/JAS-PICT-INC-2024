import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { FormsBanner, Buttons, Dropdown, NoteBox, toast } from "../../components/";
import generateOptions from "../../utils/generateOptions";
import { useEvaluateProject } from "../../hooks/judge.hooks";

function ResultImpetus() {
    const { pid, jid } = useParams()
    const { mutate, isLoading } = useEvaluateProject('impetus')
    const navigate = useNavigate()

    const [form, setForm] = useState({
        startUp: "",
        impact: "",
        original: "",
        patent: "",
        presentation: "",
        relevance: "",
        test: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        for (const property in form) {
            if (form[property] === "") {
                toast.warn("Please enter all fields!");
                return;
            }
        }
        mutate({ pid, jid, ...form }, {
            onSuccess: () => {
                toast.success("Project evaluated successfully!")
                navigate(-1, { replace: true })
            }
        })
    }

    return (
        <>
            <FormsBanner eventName='Evaluation' eventDescription={`Enter Results for Impetus - ${pid}`} />
            <div className=" md:mx-20 mx-4 my-6">
                <form className="flex flex-col shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl border border-light_blue items-center p-4 md:p-8 mt-10 w-full">
                    <Dropdown label="Ability To Execute Projects As a Start-up or Start-up Enrollment - (1-15) " options={[{ label: 'Select Score', value: '' }, ...generateOptions(1, 15)]} state={form} setState={setForm} name="startUp" required />
                    <Dropdown label="Impact and Applications - (1-20)" options={[{ label: 'Select Score', value: '' }, ...generateOptions(1, 20)]} state={form} setState={setForm} name="impact" required />
                    <Dropdown label="Originality, Creativity, Clarity & Innovation in Project - (1-20)" options={[{ label: 'Select Score', value: '' }, ...generateOptions(1, 20)]} state={form} setState={setForm} name="original" required />
                    <Dropdown label="Patent or Product Readiness from Project - (1-10)" options={[{ label: 'Select Score', value: '' }, ...generateOptions(1, 10)]} state={form} setState={setForm} name="patent" required />
                    <Dropdown label="Presentation and Q & A - (1-15)" options={[{ label: 'Select Score', value: '' }, ...generateOptions(1, 15)]} state={form} setState={setForm} name="presentation" required />
                    <Dropdown label="Relevance to Society - (1-10)" options={[{ label: 'Select Score', value: '' }, ...generateOptions(1, 10)]} state={form} setState={setForm} name="relevance" required />
                    <Dropdown label="Testing or Demonstration - (1-10)" options={[{ label: 'Select Score', value: '' }, ...generateOptions(1, 10)]} state={form} setState={setForm} name="test" required />
                    <Buttons
                        className="mx-2 my-2"
                        onClick={handleSubmit}
                        isLoading={isLoading}
                        value="Submit" />
                    <br />
                    <NoteBox title="Note"
                        text="Please do not disclose marks to the participants" />
                </form>
            </div>
        </>
    );
};
export default ResultImpetus;