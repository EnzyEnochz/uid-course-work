import React from "react"
import { Inertia } from '@inertiajs/inertia'
import {InertiaLink, usePage} from "@inertiajs/inertia-react";

const Index = () => {
    const { complaints } = usePage().props

    const data = complaints

    return (
        <>
            <div>
                <div className="container mx-auto">
                    <h1 className="mb-8 text-3xl font-bold text-center">Complain</h1>
                    <div className="flex items-center justify-between mb-6">
                        <InertiaLink
                            className='px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none'
                            href={route('complaints.create')}
                            >
                            Create Complaint
                        </InertiaLink>
                    </div>
                    <div className="overflow-x-auto bg-white rounded shadow">
                        <table className="w-full whitespace-nowrap">
                            <thead className="text-white bg-gray-600">
                                <tr className="font-bold text-left">
                                    <th className="px-6 pt-5 pb-4">#</th>
                                    <th className="px-6 pt-5 pb-4">Title</th>
                                    <th className="px-6 pt-5 pb-4">Description</th>
                                    <th className="px-6 pt-5 pb-4">In Charge</th>
                                    <th className="px-6 pt-5 pb-4"></th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                data.map(({ id, cTitle, cDescription, cTarget }) => (
                                    <tr key={id} className="">
                                        <td className="border-t">
                                            <InertiaLink
                                                href={route("complaints.edit", id)}
                                                className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                                { id }
                                            </InertiaLink>
                                        </td>
                                        <td className="border-t">
                                            <InertiaLink
                                                href={route("complaints.edit", id)}
                                                className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                                { cTitle }
                                            </InertiaLink>
                                        </td>
                                        <td className="border-t">
                                            <InertiaLink
                                                href={route("complaints.edit", id)}
                                                className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                                { cDescription }
                                            </InertiaLink>
                                        </td>
                                        <td className="border-t">
                                            <InertiaLink
                                                href={route("complaints.edit", id)}
                                                className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                                { cTarget }
                                            </InertiaLink>
                                        </td>
                                        <td className="border-t">
                                            <i className="fa fa-eye"></i>
                                            <i className="fa fa-trash"></i>

                                        </td>
                                    </tr>
                                ))
                            }
                            {
                                data.length === 0 && (
                                    <tr>
                                        <td className="px-6 py-4 border-t" colSpan={4}>
                                            No complaints yet!
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index