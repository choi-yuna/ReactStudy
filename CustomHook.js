import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

const InputBox = (props) => {
    return(
    <View style={{ flexDirection: "row" }}>            
    <TextInput 
    value={props.value} 
    onChangeText={props.onChangeText} 
    style = {{borderBottomWidth: 1, width: 200}}
    placeholder={props.placeholder}
    />
    <Button title="초기화" onPress ={props.onReset} />
    </View>
  );
};

//custom hook은 무조건 use로 시작해야함
const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const resetValue =  () => setValue(initialValue);

    return{
        value,
        setValue,
        resetValue
    };
};


//회원가입
const CustomHook = () => {
    const {value: name, setValue: setName, resetValue: resetName} = useInput("");
    const {value: age, setValue: setAge, resetValue: resetAge} = useInput("");
    const {value: city, setValue: setCity, resetValue: resetCity} = useInput("");
    // const name = output.value;
    // const setName = output.setValue;
    // const resetName = output.resetValue;

    // const {value:name, setValue: setName, resetValue: resetName} = output;



    return ( 
        // onChangeText =>  change가 됐을때 호출되는 함수
        <View>
         <InputBox 
          value={name}
          onChangeText={setName}
          placeholder="이름을 입력해 주세요"
          onReset= {resetName}
         />

         <InputBox 
          value={age}
          onChangeText={setAge}
          placeholder="나이을 입력해 주세요"
          onReset= {resetAge}
         />

         <InputBox 
          value={city}
          onChangeText={setCity}
          placeholder="도시을 입력해 주세요"
          onReset= {resetCity}
         />
        </View>
    )
}

export default CustomHook;