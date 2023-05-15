import React, { useState, useEffect } from 'react';
import { View, Picker, StyleSheet, TextInput, Text, Image } from 'react-native';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';

import Submit from "./components/submit";

const menu = () => {
    const navigation = useNavigation();
    const [selectedValue, setSelectedValue] = useState('');
    const [isCountryBoxVisible, setCountryBoxVisible] = useState(false);
    const [isYearBoxVisible, setYearBoxVisible] = useState(false);
    const [countries, setCountries] = useState([]);
    const [selectedcountry, setselectedCountry] = useState(false);

    useEffect(() => {
        fetchCountries();
    }, []);

    const fetchCountries = async () => {
        const config = {
            header: {
              "Content-Type": "application/json",
            },
          };
        try {
        const response = await axios.post("http://localhost:5000/api/auth/name_countries", to__send,
        config);
        console.log(response.data.data);
        setCountries(response.data.data);
        } catch (error) {
        console.error('Error fetching countries:', error);
        }
    };
    
    const [to__send, set_to_send] = useState({
        option: "",
        input: "",
    })
    
    const submitHandler = async(e) => {
        e.preventDefault();
    
        const config = {
          header: {
            "Content-Type": "application/json",
          },
        };
    
        if(to__send.option == "select_country"){
            const res = await axios.post("http://localhost:5000/api/auth/search_function",
            to__send,
            config
            )
            navigation.navigate('graph', {res});
        }
    
        if(to__send.option == "show_debt_to_gdp_distribution"){
            const res = await axios.post("http://localhost:5000/api/auth/agg_debt_to_gdp",
            to__send,
            config
            )
            navigation.navigate("debt_to_gdp", {res});
        }
    
        if(to__send.option == "show_fiscal_balance_distribution"){
            const res = await axios.post("http://localhost:5000/api/auth/agg_fiscal_balance",
            to__send,
            config
            )
            navigation.navigate("fiscal_balance", {res});
        }
    
        if(to__send.option == "show_gdp_growth_distribution"){
            const res = await axios.post("http://localhost:5000/api/auth/agg_gdp_growth",
            to__send,
            config
            )
            navigation.navigate("gdp_growth", {res});
        }
    
        if(to__send.option == "show_inflation_distribution"){
            const res = await axios.post("http://localhost:5000/api/auth/agg_inflation",
            to__send,
            config
            )
            navigation.navigate("inflation", {res});
        }
    }

    const handleValueChange = (itemValue, itemIndex) => {
      setSelectedValue(itemValue);
      setCountryBoxVisible(itemValue == "select_country");
      setYearBoxVisible(itemValue == "show_debt_to_gdp_distribution" || itemValue == "show_gdp_growth_distribution" || itemValue == "show_inflation_distribution" || itemValue == "show_total_reserves_distribution" || itemValue == "show_fiscal_balance_distribution")
      set_to_send({...to__send, ["option"]: itemValue})
    };

    const handleValueChangeCountry = (itemValue, itemIndex) => {
        setselectedCountry(itemValue);
        set_to_send({...to__send, ["input"]: itemValue})
    }

    const handleinput = (value) => {
        set_to_send({...to__send, ["input"]: value})
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('./world_map-removebg.png')}
                style={{ width: 400, height: 300 }}
            />
            <Text style={styles.text}>Welcome to the country analysis tool. Use this tool for the porpuse of analysing the data on Debt to gdp ratio, Current Account Balance(percentage of gdp), gdp growth(percentage annual) and Inflation, consumer price(annual percentage). All this data is taken from the World Bank Site. </Text>
        <Picker
            selectedValue={selectedValue}
            onValueChange={handleValueChange}
            style={styles.dropdown}
        >
            <Picker.Item label="Select Option"/>
            <Picker.Item label="Show for country" value="select_country" />
            <Picker.Item label="Show Debt to gdp distribution" value="show_debt_to_gdp_distribution" />
            <Picker.Item label="Show fiscal balance distribution" value="show_fiscal_balance_distribution" />
            <Picker.Item label="Show gdp growth distribution" value="show_gdp_growth_distribution" />
            <Picker.Item label="Show inflation distribution" value="show_inflation_distribution" />
            {/* <Picker.Item label="Show total reserves distribution" value="show_total_reserves_distribution" /> */}
        </Picker>

        {isCountryBoxVisible && (
            // <TextInput
            // style={styles.textInput}
            // placeholder="Enter Country Name"
            // defaultValue={to__send.input}
            // onChangeText={(value) => handleinput(value)}
            // />
            <Picker
                selectedValue={selectedcountry}
                style={styles.dropdown}
                onValueChange={handleValueChangeCountry}
            >
            <Picker.Item label={"Select Country"}/>
            {countries.map((country) => (
                <Picker.Item label={country} value={country} />
            ))}
        </Picker>
        )}

        {isYearBoxVisible && (
            <TextInput
                style={styles.textInput}
                placeholder="Enter year"
                defaultValue={to__send.input}
                onChangeText={(value) => handleinput(value)}
            />
        )}
        <Submit
            color="#3F3D56"
            title="SUBMIT"
            onPress={submitHandler}
        ></Submit>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color:""
    },
    dropdown: {
        borderRadius: 50,
        marginVertical: 10,
        borderWidth: 2,
        width: "50%",
        height: 50,
        backgroundColor:"#dbd7d7"
    },
    textInput: {
        width: "50%",
        height: 50,
        marginTop: 20,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: 'gray',
        paddingHorizontal: 10,
        backgroundColor:"#dbd7d7"
    },
    text:{
        width: "50%",
        fontSize: "20px"
    },
  });

export default menu;
