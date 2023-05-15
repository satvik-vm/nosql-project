import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Chart } from "react-google-charts";

export const options = {
  title: "Current Account Balance(percentage of gdp)",
  is3D: true,
};
const fiscal_balance = () =>{
    const route = useRoute();
    const res = route.params;
    const data_to_plot = res.res.data.Distribution;
    console.log(data_to_plot);

    var less_than_minus_twenty, minus_twenty_to_minus_ten, minus_ten_to_zero, zero_to_ten, ten_to_twenty, twenty_to_thirty, thirty_to_forty; 
    for (const obj in data_to_plot){
        if(data_to_plot[obj]["_id"] == 'Less than -20'){
            less_than_minus_twenty = data_to_plot[obj]["count"];
            // console.log("zero to twenty");
        }
        else if(data_to_plot[obj]["_id"] == '-20 to -10'){
            minus_twenty_to_minus_ten = data_to_plot[obj]["count"];
            // console.log("twenty to forty");
        }
        else if(data_to_plot[obj]["_id"] == '-10 to 0'){
            minus_ten_to_zero = data_to_plot[obj]["count"];
            // console.log("forty to sixty");
        }
        else if(data_to_plot[obj]["_id"] == '0 to 10'){
            zero_to_ten = data_to_plot[obj]["count"];
            // console.log("sixty to eightty");
        }
        else if(data_to_plot[obj]["_id"] == '10 to 20'){
            ten_to_twenty = data_to_plot[obj]["count"];
            // console.log("eightty to hundred");
        }
        else if(data_to_plot[obj]["_id"] == '20 to 30'){
            twenty_to_thirty = data_to_plot[obj]["count"];
            // console.log("eightty to hundred");
        }
        else if(data_to_plot[obj]["_id"] == '30 to 40'){
            thirty_to_forty = data_to_plot[obj]["count"];
            // console.log("eightty to hundred");
        }
        // console.log(obj);
    }

    console.log(less_than_minus_twenty, minus_twenty_to_minus_ten, minus_ten_to_zero, zero_to_ten, ten_to_twenty, twenty_to_thirty, thirty_to_forty);

    // const data = [
    //     { name: 'Less than -20', population: less_than_minus_twenty, color: '#C0C0C0', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     { name: '-10 to 0', population: minus_ten_to_zero, color: '#FABE28', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     { name: '0 to 10', population: zero_to_ten, color: '#FF0000', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     {name: '10 to 20', population: ten_to_twenty, color: '#C1C1C1', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     {name: '20 to 30', population: twenty_to_thirty, color: '#F1C1C1', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     {name: '30-40', population: thirty_to_forty, color: '#C1C2B1', legendFontColor: '#7F7F7F', legendFontSize: 15 }
    //   ];
      const data=[
        ["Distribution", "Number of Countries"],
        ["less than -20", less_than_minus_twenty],
        ["-10 to 0", minus_ten_to_zero],
        ["10 to 20", ten_to_twenty],
        ["20 to 30", twenty_to_thirty],
        ["30 to 40", thirty_to_forty],
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

export default fiscal_balance;