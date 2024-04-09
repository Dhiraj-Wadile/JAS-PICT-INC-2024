import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import scrollToTop from '../../utils/scrollToTop';
import ResultImpetus from "./resultImpetus";
import ResultConcepts from './resultConcept';
import JudgeDashboard from './judgeDashboard';
import AllocationDetails from './components/AllocationDetails';
import Profile from './components/Profile';
import JudgeNavbar from './components/NavBar';
import JudgeAllocation from './judgeAllocation';


function Judge() {
    useEffect(() => {
        scrollToTop()
    }, [])

    return (
        <>
            <JudgeNavbar />
            <Routes>
                <Route path='/impetus/evaluate/:jid/:pid' element={<ResultImpetus />} />
                <Route path='/:jid' element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <JudgeDashboard />
                    </Suspense>} />
                <Route path='/concepts/evaluate/:jid/:pid' element={<ResultConcepts />} />
                <Route path='/:jid/allocation-details' element={<AllocationDetails />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/allocation-details/new" element={<AllocationDetails />} />
                <Route path="/allocation-details" element={<JudgeAllocation />} />
                {/* <Route path="/select-domain-slots" component={<SelectDomainSlots/>} /> */}
                {/* <Route path="/marks-entry" component={MarksEntry} /> */}
            </Routes>
        </>
    );
}

export default Judge;
