import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Chart } from "react-google-charts";

export const options = {
    title: "GDP Growth Distribution",
    is3D: true,
  };
const gdp_growth = () => {
    const route = useRoute();
    const res = route.params;
    const data_to_plot = res.res.data.Distribution;
    console.log(data_to_plot);

    var less_than_zero=0, zero_to_two=0, two_to_four=0, four_to_six=0, six_to_eight=0, eight_to_ten=0;

    for (const obj in data_to_plot){
        if(data_to_plot[obj]["_id"] == 'Less than 0'){
            less_than_zero = data_to_plot[obj]["count"];
            // console.log("zero to twenty");
        }
        else if(data_to_plot[obj]["_id"] == '2-4'){
            two_to_four = data_to_plot[obj]["count"];
            // console.log("twenty to forty");
        }
        else if(data_to_plot[obj]["_id"] == '4-6'){
            four_to_six = data_to_plot[obj]["count"];
            // console.log("forty to sixty");
        }
        else if(data_to_plot[obj]["_id"] == '6-8'){
            six_to_eight = data_to_plot[obj]["count"];
            // console.log("sixty to eightty");
        }
        else if(data_to_plot[obj]["_id"] == '8-10'){
            eight_to_ten = data_to_plot[obj]["count"];
            // console.log("eightty to hundred");
        }
        // console.log(obj);
    }

    console.log(less_than_zero, zero_to_two, two_to_four, four_to_six, six_to_eight, eight_to_ten);
    // const data = [
    //     { name: 'Less than 0', population: less_than_zero, color: '#C0C0C0', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     { name: '0-2', population: zero_to_two, color: '#FABE28', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     { name: '2-4', population: two_to_four, color: '#FF0000', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     {name: '4-6', population: four_to_six, color: '#C1C1C1', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     {name: '6-8', population: six_to_eight, color: '#F1C2B1', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     {name: '8-10', population: eight_to_ten, color: '#C1C2B1', legendFontColor: '#7F7F7F', legendFontSize: 15 }
    // ];
    const data=[
        ["Distribution", "Number of Countries"],
        ["less than 0", less_than_zero],
        ["0-2", zero_to_two],
        ["2-4", two_to_four],
        ["4-6", four_to_six],
        ["6-8", six_to_eight],
        ["8-10",eight_to_ten]
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

export default gdp_growth