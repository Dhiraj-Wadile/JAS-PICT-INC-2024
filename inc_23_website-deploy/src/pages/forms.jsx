import { useNavigate, useParams } from 'react-router-dom';
import ConceptsForms from './conceptsForms';
import ImpetusForms from './impetusForms';
import PradnyaForms from './pradnyaForms';

function Forms() {
    let { eventName } = useParams();
    const _404Navigator = useNavigate();

    switch (eventName) {
        case 'concepts':
            return <ConceptsForms />;
        case 'impetus':
            return <ImpetusForms />;
        case 'pradnya':
            return <PradnyaForms />;
        default:
            _404Navigator('/404');
            return
    }
}

export default Forms;