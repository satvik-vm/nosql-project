import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {LineChart} from 'react-native-chart-kit';
import { withNavigation } from '@react-navigation/compat';
import CanvasJSReact from './canvasjs-3.7.5/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const App = () => {
    const route = useRoute();
    const res = route.params;
    const data_to_plot = res.res.data;
    console.log(data_to_plot)
    const debt_to_gdp = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "Debt to GDP by Year"
        },
        axisY: {
            title: "Debt to GDP",
            suffix: "%"
        },
        axisX: {
            title: "Year",
            // prefix: "W",
            // interval: 2
        },
        data: [{
            type: "line",
            toolTipContent: "Year {x}: {y}%",
            dataPoints: [
                { x: 2017, y: data_to_plot.debt_to_gdp['2017'] },
				{ x: 2018, y: data_to_plot.debt_to_gdp['2018'] },
				{ x: 2019, y: data_to_plot.debt_to_gdp['2019'] },
				{ x: 2020, y: data_to_plot.debt_to_gdp['2020'] },
				{ x: 2021, y: data_to_plot.debt_to_gdp['2021'] },
            ]
        }]
    }

    const fiscal_balance = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "Current Account Balance by Year"
        },
        axisY: {
            title: "Current Account Balance",
            // suffix: "%"
        },
        axisX: {
            title: "Year",
            // prefix: "W",
            // interval: 2
        },
        data: [{
            type: "line",
            toolTipContent: "Year {x}: {y}%",
            dataPoints: [
                { x: 2017, y: data_to_plot.fiscal_balance['2017'] },
				{ x: 2018, y: data_to_plot.fiscal_balance['2018'] },
				{ x: 2019, y: data_to_plot.fiscal_balance['2019'] },
				{ x: 2020, y: data_to_plot.fiscal_balance['2020'] },
				{ x: 2021, y: data_to_plot.fiscal_balance['2021'] },
            ]
        }]
    }

    const inflation = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "Inflation Consumer goods, percentage by Year"
        },
        axisY: {
            title: "Inflation Consumer goods",
            suffix: "%"
        },
        axisX: {
            title: "Year",
            // prefix: "W",
            // interval: 2
        },
        data: [{
            type: "line",
            toolTipContent: "Year {x}: {y}%",
            dataPoints: [
                { x: 2017, y: data_to_plot.inflation['2017'] },
				{ x: 2018, y: data_to_plot.inflation['2018'] },
				{ x: 2019, y: data_to_plot.inflation['2019'] },
				{ x: 2020, y: data_to_plot.inflation['2020'] },
				{ x: 2021, y: data_to_plot.inflation['2021'] },
            ]
        }]
    }

    const gdp_growth = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "GDP Growth, percentage by Year"
        },
        axisY: {
            title: "GDP Growth",
            suffix: "%"
        },
        axisX: {
            title: "Year",
            // prefix: "W",
            // interval: 2
        },
        data: [{
            type: "line",
            toolTipContent: "Year {x}: {y}%",
            dataPoints: [
                { x: 2017, y: data_to_plot.gdp_growth['2017'] },
				{ x: 2018, y: data_to_plot.gdp_growth['2018'] },
				{ x: 2019, y: data_to_plot.gdp_growth['2019'] },
				{ x: 2020, y: data_to_plot.gdp_growth['2020'] },
				{ x: 2021, y: data_to_plot.gdp_growth['2021'] },
            ]
        }]
    }

    const total_reserve = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "Total reserves by Year"
        },
        axisY: {
            title: "Total reserves",
            // suffix: "%"
        },
        axisX: {
            title: "Year",
            // prefix: "W",
            // interval: 2
        },
        data: [{
            type: "line",
            toolTipContent: "Year {x}: {y}%",
            dataPoints: [
                { x: 2017, y: data_to_plot.total_reserve['2017'] },
				{ x: 2018, y: data_to_plot.total_reserve['2018'] },
				{ x: 2019, y: data_to_plot.total_reserve['2019'] },
				{ x: 2020, y: data_to_plot.total_reserve['2020'] },
				{ x: 2021, y: data_to_plot.total_reserve['2021'] },
            ]
        }]
    }

    const prob = data_to_plot.probability.prob.toFixed(2);

    return (
    <div>
        <View>
        <Text
            style={styles.textStyle}
        >
            Probability of default = {prob}
        </Text>
        </View>
        <CanvasJSChart options = {debt_to_gdp}/>
        <CanvasJSChart options = {fiscal_balance}/>
        <CanvasJSChart options = {inflation}/>
        <CanvasJSChart options = {gdp_growth}/>
    </div>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: "40px",
        textAlign: "right",
        fontWeight: "bold"
    }
})

export default App;