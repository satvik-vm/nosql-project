import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Chart } from "react-google-charts";

export const options = {
    title: "Inflation",
    is3D: true,
  };
const inflation = () => {
    const route = useRoute();
    const res = route.params;
    const data_to_plot = res.res.data.Distribution;
    console.log(data_to_plot);

    var less_than_zero=0, zero_to_one=0, one_to_two=0, two_to_three=0, three_to_four=0, four_to_five=0, five_to_six=0, six_to_seven=0, seven_to_eight=0, eight_to_nine=0, nine_to_ten=0;

    for (const obj in data_to_plot){
        if(data_to_plot[obj]["_id"] == 'Less than 0'){
            less_than_zero = data_to_plot[obj]["count"];
            // console.log("zero to twenty");
        }
        else if(data_to_plot[obj]["_id"] == '0-1'){
            zero_to_one = data_to_plot[obj]["count"];
            // console.log("twenty to forty");
        }
        else if(data_to_plot[obj]["_id"] == '1-2'){
            one_to_two = data_to_plot[obj]["count"];
            // console.log("twenty to forty");
        }
        else if(data_to_plot[obj]["_id"] == '2-3'){
            two_to_three = data_to_plot[obj]["count"];
            // console.log("forty to sixty");
        }
        else if(data_to_plot[obj]["_id"] == '3-4'){
            three_to_four = data_to_plot[obj]["count"];
            // console.log("forty to sixty");
        }
        else if(data_to_plot[obj]["_id"] == '4-5'){
            four_to_five = data_to_plot[obj]["count"];
            // console.log("sixty to eightty");
        }
        else if(data_to_plot[obj]["_id"] == '5-6'){
            five_to_six = data_to_plot[obj]["count"];
            // console.log("eightty to hundred");
        }
        else if(data_to_plot[obj]["_id"] == '6-7'){
            six_to_seven = data_to_plot[obj]["count"];
            // console.log("eightty to hundred");
        }
        else if(data_to_plot[obj]["_id"] == '7-8'){
            seven_to_eight = data_to_plot[obj]["count"];
            // console.log("forty to sixty");
        }
        else if(data_to_plot[obj]["_id"] == '8-9'){
            eight_to_nine = data_to_plot[obj]["count"];
            // console.log("forty to sixty");
        }
        else if(data_to_plot[obj]["_id"] == '9-10'){
            nine_to_ten = data_to_plot[obj]["count"];
            // console.log("forty to sixty");
        }
        // console.log(obj);
    }

    console.log(less_than_zero, zero_to_one, one_to_two, two_to_three, three_to_four, four_to_five, five_to_six, six_to_seven, seven_to_eight, eight_to_nine, nine_to_ten);

    // const data = [
    //     { name: 'Less than zero', population: less_than_zero, color: '#C0C0C0', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     { name: '0 to 1', population: zero_to_one, color: '#FABE28', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     { name: '1 to 2', population: one_to_two, color: '#FF0000', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     {name: '2 to 3', population: two_to_three, color: '#C1C1C1', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     {name: '3 to 4', population: three_to_four, color: '#F1C2B1', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     {name: '4 to 5', population: four_to_five, color: '#C1C2B1', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     {name: '5 to 6', population: five_to_six, color: '#F1C2B1', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     {name: '6 to 7', population: six_to_seven, color: '#C1C2B1', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     {name: '7 to 8', population: seven_to_eight, color: '#F1C2B1', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     {name: '8 to 9', population: eight_to_nine, color: '#C1C2B1', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    //     {name: '9 to 10', population: nine_to_ten, color: '#C1C2B1', legendFontColor: '#7F7F7F', legendFontSize: 15 },

    // ];
    const data=[
        ["Distribution", "Number of Countries"],
        ["less than 0", less_than_zero],
        ["0-1",zero_to_one],
        ["1-2", one_to_two],
        ["2-3", two_to_three],
        ["3-4", three_to_four],
        ["4-5", four_to_five],
        ["5-6",five_to_six],
        ["6-7",six_to_seven],
        ["7-8",seven_to_eight],
        ["8-9",eight_to_nine],
        ["9-10",nine_to_ten]
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

export default inflation;