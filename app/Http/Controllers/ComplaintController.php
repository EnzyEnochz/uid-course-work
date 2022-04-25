<?php

namespace App\Http\Controllers;

use App\Http\Requests\ComplaintStoreRequest;
use App\Models\Complaint;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ComplaintController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $complaints = Complaint::latest()->get();

        return Inertia::render('Complaints/Index', ['complaints' => $complaints]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return Inertia::render('Complaints/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ComplaintStoreRequest $request
     * @return RedirectResponse
     */
    public function store(ComplaintStoreRequest $request)
    {
        Complaint::create(
            $request->validated()
        );

        return Redirect::route('complaints.index');
    }

    /**
     * Display the specified resource.
     *
     * @param Complaint $complaint
     * @return void
     */
    public function show(Complaint $complaint)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Complaint $complaint
     * @return Response
     */
    public function edit(Complaint $complaint)
    {
        return Inertia::render('Complaints/Edit', [
            'complaint' => [
                'id' => $complaint->id,
                'cTitle' => $complaint->cTitle,
                'cDescription' => $complaint->cDescription,
                'cTarget' => $complaint->cTarget,
            ],
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ComplaintStoreRequest $request
     * @param Complaint $complaint
     * @return RedirectResponse
     */
    public function update(ComplaintStoreRequest $request, Complaint $complaint)
    {
        $complaint->update($request->validated());

        return Redirect::route('complaints.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Complaint $complaint
     * @return RedirectResponse
     */
    public function destroy(Complaint $complaint)
    {
        $complaint->delete();

        return Redirect::route('complaints.index');
    }
}
