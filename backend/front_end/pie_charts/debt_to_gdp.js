import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Chart } from "react-google-charts";

export const options = {
  title: "Debt-To-GDP Distribution",
  is3D: true,
};
const debt_to_gdp = () => {
    const route = useRoute();
    const res = route.params;
    const data_to_plot = res.res.data.Distribution;
    console.log(data_to_plot);
    var zero_to_twenty, twenty_to_forty, forty_to_sixty, sixty_to_eighty, eightty_to_hundred; 
    for (const obj in data_to_plot){
        if(data_to_plot[obj]["_id"] == '0-20'){
            zero_to_twenty = data_to_plot[obj]["count"];
            // console.log("zero to twenty");
        }
        else if(data_to_plot[obj]["_id"] == '20-40'){
            twenty_to_forty = data_to_plot[obj]["count"];
            // console.log("twenty to forty");
        }
        else if(data_to_plot[obj]["_id"] == '40-60'){
            forty_to_sixty = data_to_plot[obj]["count"];
            // console.log("forty to sixty");
        }
        else if(data_to_plot[obj]["_id"] == '60-80'){
            sixty_to_eighty = data_to_plot[obj]["count"];
            // console.log("sixty to eightty");
        }
        else if(data_to_plot[obj]["_id"] == '80-100'){
            eightty_to_hundred = data_to_plot[obj]["count"];
            // console.log("eightty to hundred");
        }
        // console.log(obj);
    }
    console.log(zero_to_twenty, twenty_to_forty, forty_to_sixty, sixty_to_eighty, eightty_to_hundred);
    const data=[
      ["Distribution", "Number of Countries"],
      ["0%-20%", zero_to_twenty],
      ["20%-40%", twenty_to_forty],
      ["40%-60%", forty_to_sixty],
      ["60%-80%", sixty_to_eighty],
      ["80%-100%", eightty_to_hundred],
    ]
    return (
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"800px"}
      />
    );
}

export default debt_to_gdp;