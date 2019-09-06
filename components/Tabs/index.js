// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicTabs = document.querySelector(".topics");

const tabArray = ["All"]

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        
        console.log(response);
        response.data.topics.forEach(element => {
            if (element === "node.js")
                tabArray.splice(3,0,element);
            else if(element === "javascript"){
                tabArray.splice(1,0,element);
            }
            else if(element === "technology"){
                tabArray.splice(2,0,element);
            }
            else if(element === "jquery"){
                tabArray.splice(3,0,element);
            }
            else{
                tabArray.push(element);
            }
        });

        tabArray.forEach(tab => {
            topicTabs.appendChild(topicsMaker(tab));
        })
    })

    .catch(error => {
        console.log("Something went wrong -->", error);
    });


function topicsMaker(tabName){

    const topics = document.createElement("div");

    topics.classList.add("tab");
    topics.textContent = tabName;

    return topics;
  
}