import { useBusinesses , useAgents} from "./BusinessData.js"
import { Business, Agents } from "./Business.js "

let contentTarget

export const BusinessList = () => {
    const businessArray = useBusinesses()
    contentTarget = document.querySelector(".businesses")
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
}

export const NYBusinessList = () => {
    let businessArray = useBusinesses()
    businessArray = businessArray.filter((bidness) => {return bidness.addressStateCode==='NY'});
    contentTarget = document.querySelector(".businessList--newYork")
    contentTarget.innerHTML = "<h1>New York Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
}

export const MFBusinessList = () => {
    let businessArray = useBusinesses()
    businessArray = businessArray.filter((bidness) => {return bidness.companyIndustry==='Manufacturing'});
    contentTarget = document.querySelector(".businessList--manufacturing")
    contentTarget.innerHTML = "<h1>Manufacturing Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
}

export const AgentList = () => {
    const agentArray = useAgents()
    contentTarget = document.querySelector(".agents")
    contentTarget.innerHTML = "<h1>Agents</h1>"

    agentArray.forEach(
        (agentObject) => {
            contentTarget.innerHTML += Agents(agentObject)
        }
    );
}