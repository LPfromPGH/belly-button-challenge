# belly-button-challenge
Module 14
Instructions
Complete the following steps:
1. Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.
2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
• Use sample_values as the values for the bar chart.
• Use otu_ids as the labels for the bar chart.
• Use otu_labels as the hovertext for the chart.

3. Create a bubble chart that displays each sample.
• Use otu_ids for the x values.
• Use sample_values for the y values.
• Use sample_values for the marker size.
• Use otu_ids for the marker colors.
• Use otu_labels for the text values.

4. Display the sample metadata, i.e., an individual's demographic information.
5. Display each key-value pair from the metadata JSON object somewhere on the page.

6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file![image](https://github.com/LPfromPGH/belly-button-challenge/assets/135560757/0ddfc2f2-bd1b-4355-8171-f7706f240091)

There was a problem with the optionChanged function and no amount of googling would find me a remedy. Therefore, the charts are there but I couldn't get them to change when I pick a new dropdown. The error was:
index.html:25 Uncaught ReferenceError: optionChanged is not defined
    at HTMLSelectElement.onchange
