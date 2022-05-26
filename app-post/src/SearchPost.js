// const SearchPost = () => {
//     return ( 
//         async function getPosts() {
//             //URL tp API
//             const url = "http://localhost:1337/api/cities?populate=*";
        
//             //Fetch Data from API and convert it to JS Object
//             let response = await fetch(url);
//             let blogPosts = await response.json();
        
//             //console.log(cities);
        
//             //Get userInput and compare it to the cities fetched
//             let userInput = document.getElementById("blogPost").value.toUpperCase();
        
//             let postBySearch = null;
//             //Crete a loop to find the selected city
//             cities.data.forEach((blogPost) =>{
//                 //If staetement to check the UserINput with CityName
//                 if (blogPost.attributes.name.toUpperCase() == userInput){
//                     postBySearch = blogPost.attributes.people;
//                     return;
//                 }     
//             });
        
//             //if-statement to check if PeopleInCity is empty. If so, exit the funktion
//             if (!postBySearch) return;
        
//             //Create empty string
//             let output = "";
//             //Create new ForEach Loop to fetch the names of ppl in city
//             postBySearch.data.forEach((blogs) =>{
//                 //Fetch name of person
//                 output += `<div>${blogs.attributes.name}</div>`;
//             });
        
//             //Print names to Div tag
//             document.getElementById("output").innerHTML = output;
//         }
        
//         //Create Click-Event to button
//         document.getElementById("btnFetchPosts").addEventListener("click", getPosts);
//      );
// }
 
// export default SearchPost;

