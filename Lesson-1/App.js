//the second parameter that is the object is for giving attributes to the element that we are creating
const heading = React.createElement("h1", {id: 'heading' }, "Hello World from React!");
//here, heading is a React Element (meaning a javascript object and not the h1 tag itself)

//creating nested elements
const parent = React.createElement("div", {id: "parent"},
    React.createElement("div", {id: "child"}, [
        //array of children for creating siblings
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")
        ])
);

console.log(parent);   //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);   //the render function converts the javascript object/react element into the heading tag