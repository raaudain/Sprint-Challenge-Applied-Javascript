// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector(".topics");

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        console.log(response.data.topics);
        //topics.appendChild(response.data.topics)
        // response.data.topics.forEach(element => {
        //     topics.appendChild(topicsMaker(element.topics));
        // });
    })

    .catch(error => {
        console.log("Something went wrong --> ", error);
    })



let topicLinks = ["All", "JavaScript", "Technology", "Node.JS", "BootStrap"];

function topicsMaker(arr){

    const topics = document.createElement("div");
    const tab = document.createElement("div")


    arr.forEach(topic => {
        const tab = document.createElement("div");
        tab.textContent = topic;
        topics.appendChild(tab)
    })

    topics.classList.add("tab");

    // //topics.appendChild(tab);

    // return topics

    // const js = document.createElement("a");
    // const bs = document.createElement("a");
    // const tech = document.createElement("a");
    // const jq = document.createElement("a");
    // const node = document.createElement("a");
    // const all = document.createElement("a")

    // js.classList.add("tab");
    // bs.classList.add("tab");
    // tech.classList.add("tab");
    // jq.classList.add("tab");
    // node.classList.add("tab");
    // all.classList.add("tab")
    // topics.classList.add("topics");

    // js.textContent = "Javascript";
    // bs.textContent = "Bootstrap";
    // tech.textContent = "Technology";
    // jq.textContent = "JQuery";
    // node.textContent = "Node.JS";
    // all.textContent = "All";

    // topics.appendChild(all);
    // topics.appendChild(js);
    // topics.appendChild(tech);
    // topics.appendChild(node);
    // topics.appendChild(jq);
    // topics.appendChild(bs);

    //return all;
}

topics.appendChild(topicsMaker(topicLinks));