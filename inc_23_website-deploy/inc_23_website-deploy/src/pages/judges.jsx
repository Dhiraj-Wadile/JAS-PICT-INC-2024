import { FormsBanner } from "../components";
import JudgesConcepts from "../components/forms/registrations/judges_concepts";
const conlogo = require("./concepts23_logo_bw.png");

function Judges() {
    return (
        <div>
           
             <FormsBanner logo={conlogo} eventName="CONCEPTS JUDGES REGISTRATION" eventDescription="24th and 25th March"/>
           
            <JudgesConcepts/>
        </div>
    );
}
export default Judges; 