import React from 'react'
import {Inertia} from '@inertiajs/inertia'
import {InertiaLink, useForm} from '@inertiajs/inertia-react'

const Create = () => {
    const {data, setData, errors, post} = useForm({
        cTitle: '',
        cDescription: '',
        cTarget: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('complaints.store'))
    }

    return (
        <>
            <div className="mt-20">
                <div className="container flex flex-col justify-center mx-auto">
                    <div className="">
                        <h1 className="mb-8 text-3xl font-bold">
                            <InertiaLink
                                href={route('complaints.index')}
                                className='text-indigo-600 hover:text-indigo-700'
                            >
                                Complaints
                            </InertiaLink>
                            <span className="font-medium text-indigo-600"> / </span>
                            Create
                        </h1>
                    </div>
                    <div className="max-w-6xl p-8 bg-white rounded shadow">
                        <form onSubmit={handleSubmit} name="complaintForm">
                            <div className="flex flex-col">
                                <div className="mb-4">
                                    <label htmlFor="">Title</label>
                                    <input type="text" className="w-full form-control px-4 py-2"
                                           label="Title"
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
                                           label="Description"
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
                                           label="cTarget"
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
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Submit Complaint
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

export default Create