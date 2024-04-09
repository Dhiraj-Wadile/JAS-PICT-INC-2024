import { useState } from "react";
import { Buttons, InputBox, toast, Loader } from "../../components";
import { useGetAbstract, useUpdateAbstract } from "../../hooks/events.hooks";
import { FadeLoader } from "react-spinners";

function UpdateAbstract() {
    const getAbstract = useGetAbstract();
    const updateAbstract = useUpdateAbstract();

    const [error1, seterror1] = useState("")
    const [form0, setForm0] = useState({
        pid: ""
    });
    const [form1, setForm1] = useState({
        pid: "",
        abstract: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm0({ ...form0, [name]: value });
    };

    const handleAbstractChange = (e) => {
        const { name, value } = e.target;
        setForm1({ ...form1, [name]: value }); // Update form1, not form0
    };

    const handlePidSubmit = (e) => {
        e.preventDefault();
        getAbstract.mutate(form0.pid, {
            onSuccess: (data) => {
                setForm1({ abstract: data.data[0].abstract, pid: form0.pid }); // Update form1 with the fetched abstract
                toast.success("Abstract fetched Sucessfully");
            },
            onError: (error) => {
                toast.warn("Invalid Project ID");
                seterror1("Invalid Project ID")
                console.log(error1)
                setForm1({ pid: "", abstract: "" }); // Reset form1 to initial state
            }
        });
    };


    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        updateAbstract.mutate(form1, {
            onSuccess: (data) => { // Update form1 with the fetched abstract
                toast.success(`${form0.pid} Abstract updated successfully`);
            },
            onError: (error) => {
                console.error(error);
                // Handle error if necessary
            }
        });
    };


    return (
        <>
            <div className="py-8 flex flex-col justify-center items-center">
                <div className="bg-faint_blue w-3/4 p-5 px-10 rounded-2xl">
                    <h1 className="flex justify-center text-2xl text-gold font-bold mb-5">Update Abstract</h1>

                    <form >
                        <InputBox
                            type="text"
                            label="Project ID"
                            name="pid"
                            placeholder="Enter Project ID"
                            required
                            onChange={handleInputChange}
                            value={form0.pid}
                        />

                        <Buttons
                            value={`Get Abstract`}
                            classNames="my-2"
                            onClick={handlePidSubmit}
                        />
                    </form>
                    {getAbstract.isLoading ? (
                        <div className="flex justify-center items-center "><FadeLoader color="#36d7b7" /></div>
                    ) : (
                        form1?.abstract?.length > 0 ? (
                            <form className="my-5">
                                <hr className="my-5" />
                                <InputBox
                                    type="textarea"
                                    rows="12"
                                    label="Abstract"
                                    name="abstract"
                                    required
                                    onChange={handleAbstractChange}
                                    value={form1.abstract}
                                />
                                <div className="flex justify-center">
                                    <Buttons
                                        value={`Update Abstract`}
                                        classNames="my-2"
                                        onClick={handleUpdateSubmit}
                                        loading={updateAbstract.isLoading}
                                    />
                                </div>
                            </form>
                        ) : (
                            !error1 ? (<div className="flex justify-center items-center my-2">Enter project ID</div>) : <div className="flex justify-center items-center my-2">{error1}</div>
                        )
                    )}

                </div>
            </div>
        </>
    );
}

export default UpdateAbstract;
