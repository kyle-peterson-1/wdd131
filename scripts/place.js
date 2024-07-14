document.addEventListener("DOMContentLoaded", function () {
    const data = {
        //Arizona data to display
        area: "295,000 sq km",
        population: "7,359,000",
        capital: "Phoenix",
        languages: "English",
        currency: "US Dollar",
        timeZone: "GMT-7",
        callingCode: "+1",
        internetTLD: ".com .net",
        temperature: "106°F",
        conditions: "Clear",
        windSpeed: "12 mph",
    };
    //function to fill the information in the page
    function fillData() {
        for (let key in data) {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = data[key];
            }
        }
    }
    //Calls function to display information
    fillData();


    // Calculate the wind chill
    const temp = parseInt(data.temperature);
    const speed = parseInt(data.windSpeed);

    if (temp <= 50 && speed > 3) {
        const windChill = 35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16;
        document.getElementById("windChill").textContent = windChill.toFixed(1) + "°F";
    } else {
        document.getElementById("windChill").textContent = "N/A";
    }

});