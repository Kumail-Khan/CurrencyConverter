const BASE_URL = "https://v6.exchangerate-api.com/v6/3206e2a9bc49857e7551c841/latest/USD"

const dropdowns = document.querySelectorAll(".dropwdown select")


for (let select of dropdowns) {
    for (currCode in countryList) {
        console.log(currCode)
        let newOption = document.createElement("option")
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption)
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "PK") {
            newOption.selected = "selected";
        }
    }
}