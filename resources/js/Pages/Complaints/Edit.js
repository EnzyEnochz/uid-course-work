import React from 'react'
import {Inertia} from "@inertiajs/inertia"
import {InertiaLink, useForm, usePage} from "@inertiajs/inertia-react";

const Edit = () => {
    const {complaint} = usePage().props
    const {data, setData, put, errors} = useForm({
        cTitle: complaint.cTitle || "",
        cDescription: complaint.cDescription || "",
        cTarget: complaint.cTarget || "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        put(route("complaints.update", complaint.id))
    }

    const destroy = (e) => {
        if (confirm("Are you sure you want to delete the complaint?")) {
            Inertia.delete(route("complaints.destroy", complaint.id))
        }
    }

    return (
        <>
            <div className="mt-20">
                <div className="container flex flex-col justify-center mx-auto">
                    <div>
                        <h1 className="mb-8 text-3xl font-bold">
                            <InertiaLink
                                href={route('complaints.index')}
                                className="text-indigo-600 hover:text-indigo-700"
                            >
                                Complaints
                            </InertiaLink>
                            <span className="font-medium text-indigo-600"> /</span>
                            Edit
                        </h1>
                    </div>
                    <div className="max-w-3xl p-8 bg-white rounded shadow">
                        <form onSubmit={handleSubmit} name="complaintEditForm">
                            <div className="flex flex-col">
                                <div className="mb-4">
                                    <label htmlFor="">Title</label>
                                    <input type="text" className="w-full form-control px-4 py-2"
                                           name="cTitle"
                                           value={data.cTitle}
                                           onChange={(e) => {
                                               setData("cTitle", e.target.value)
                                           }}
                                           required
                                    />
                                    <span className="text-red-600">
                                        {errors.cTitle}
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="">Description</label>
                                    <input type="text" className="w-full form-control px-4 py-2"
                                           name="cDescription"
                                           value={data.cDescription}
                                           onChange={(e) => {
                                               setData("cDescription", e.target.value)
                                           }}
                                           required
                                    />
                                    <span className="text-red-600">
                                        {errors.cDescription}
                                    </span>
                                </div>
                                <div className="mb-0">
                                    <label htmlFor="">Person in Charge</label>
                                    <input type="text" className="w-full form-control px-4 py-2"
                                           name="cTarget"
                                           value={data.cTarget}
                                           onChange={(e) => {
                                               setData("cTarget", e.target.value)
                                           }}
                                    />
                                    <span className="text-red-600">
                                        {errors.cTarget}
                                    </span>
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Submit Edit
                                    </button>
                                    <button
                                        onClick={destroy}
                                        tabIndex="-1"
                                        type="button"
                                        className="px-4 py-2 text-white bg-red-500 rounded"
                                    >
                                        <i className="fa fa-solid fa-trash-alt"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit