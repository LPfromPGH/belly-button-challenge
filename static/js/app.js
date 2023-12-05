// Place URL in constant variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// default plots
function init() {
    let dropdownMenu = d3.select("#selDataset");

    //Load and log JSON data
    d3.json(url).then((data) => {console.log(`Data: ${data}`);

     //load the names
     let names = data.names;

     names.forEach((name) => {
     dropdownMenu.append("option").text(name).property("value", name);      
    });

    let name = names[0];


//name the functions for the charts
    demo(name);
    bar(name);
    bubble(name);
    });

function demo(selectedValue) {
    d3.json(url).then((data) => {console.log('Data: ${data');
    let metadata = data.metadata;
    let filteredData = metadata.filter((meta) => meta.id == selectedValue);
    let obj = filteredData[0]
    d3.select("#sample-metadata").html("");
    let entries = Object.entries(obj);
    entries.forEach(([key,value]) => {d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
});
})
}
function bar(selectedValue) {
    d3.json(url).then((data) => {console.log(`Data: ${data}`);
    let samples = data.samples;
    let filteredData = samples.filter((sample) => sample.id === selectedValue);

    let obj = filteredData[0];

    let trace = [{
        x: obj.sample_values.slice(0,10).reverse(),
        y: obj.otu_ids.slice(0,10).map((otu_id) => `OTU ${otu_id}`).reverse(),
        text: obj.otu_labels.slice(0,10).reverse(),
        type: "bar",
        marker: {color: "rgb(32, 245, 35)"},
        orientation: "h"
    }];

    Plotly.newPlot("bar", trace);
});
}
}


init();