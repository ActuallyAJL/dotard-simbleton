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

const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            const query = keyPressEvent.target.value;
            let businessArray = useBusinesses();
            const foundBusiness = businessArray.find((business) => {return query===business.companyName});

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });