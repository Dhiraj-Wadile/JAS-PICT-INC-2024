import { useNavigate, useParams } from 'react-router-dom';
import { FormsBanner, TeamConcepts } from '../../components';
import ConceptsForms from '../conceptsForms';
import ImpetusForms from '../impetusForms';
import PradnyaForms from '../pradnyaForms';
import Winners from '../winners_inc23';
const conlogo=require('../../assets/images/concepts_logo.png')
const implogo=require('../../assets/images/impetus_logo.png')
const pralogo=require('../../assets/images/pradnya_logo.png')
const winlogo=require('../../assets/images/winners_trophy.png')

function EventsForms() {
    let { eventName } = useParams();
    const _404Navigator = useNavigate();

    switch (eventName) {
        case 'concepts':
            return (
                <>
                    <FormsBanner logo={conlogo} eventName='Concepts' eventDescription='Register for the most grand project exhibition event Concepts for final year student' />
                    <ConceptsForms />
                </>
            )

        case 'impetus':
            return (
                <>
                    <FormsBanner logo={implogo} eventName='Impetus' eventDescription='Register for the most grand project exhibition event impetus for all students from First to Third Year' />
                    <ImpetusForms />
                </>
            )

        case 'pradnya':
            return (
                <>
                    <FormsBanner logo={pralogo} eventName='Pradnya' eventDescription='Register for the most competitive live coding event Pradnya' />
                    <PradnyaForms />
                </>
            )
        case 'winners' :
            return(
                <>
                  <FormsBanner logo={winlogo} eventName='Winners' eventDescription='Winners of INC 2023' />
                  <Winners/>
                </>
            )    
        default:
            _404Navigator('/404');
            return
    }
}

export default EventsForms;