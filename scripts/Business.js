export const Business = (businessObject) => {
    return `
        <section class="business">
            <h2 class="business__name">${businessObject.companyName}</h2>
            <div class="business__address">
                ${businessObject.addressFullStreet} <br>
                ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}
            </div>
        </section>
    `
}

export const Agents = (agentObject) => {
    return `
        <section class="agent">
            <h3>${agentObject}</h3>
        </section>
    `
}