
console.log("JavaScript file loaded!");

async function callAPI(endpoint) {
    console.log("Button clicked:", endpoint);

    const message = document.getElementById("message").value;

    const response = await fetch(`/api/${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: message })
    });

    const data = await response.json();

    console.log("Backend response:", data);

    document.getElementById("result").textContent =
        JSON.stringify(data, null, 2);
}

async function callHello() {
    console.log("Hello button clicked!");

    const response = await fetch("/api/hello");
    const data = await response.json();

    console.log("Backend response:", data);

    document.getElementById("result").textContent =
        JSON.stringify(data, null, 2);
}
