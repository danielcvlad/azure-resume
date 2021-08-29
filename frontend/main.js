//when does the getVisitCount get called?
window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

//productionURL
const functionApiUrl = 'https://get-resumecounter.azurewebsites.net/api/GetResumeCounter?code=n19GhsrfXcD5OG2PrYyHCJbEmA8lAWZExFOjqaArC4jSscZGubRurA=='
//localURL
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';


const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json();
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}