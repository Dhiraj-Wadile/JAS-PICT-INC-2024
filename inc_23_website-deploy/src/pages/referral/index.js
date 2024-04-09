import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import scrollToTop from '../../utils/scrollToTop';

import ReferralConcepts from './referralConcepts';
import ReferralImpetus from './referralImpetus';

function Referral() {
    useEffect(() => {
        scrollToTop()
    }, [])

    return (
        <Routes>
            <Route path='/concepts' element={<ReferralConcepts/>} />
            <Route path='/impetus' element={<ReferralImpetus/>} />
            {/* <Route path='/concepts/evaluate/:jid/:pid' element={<ResultConcepts />} /> */}
        </Routes>
    );
}

export default Referral;