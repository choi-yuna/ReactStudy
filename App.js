import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';


//Component
const Header = (props) => {
  return <Text>{props.title}</Text>;
};

const MyProfile = () => {
  return <Profile
      name="윤아"
      url="https://images.mypetlife.co.kr/content/uploads/2023/11/18161317/d6c08aa5-dc1c-46a1-97bb-6782641c1624.jpeg"
      profileSize={40}
      />;
};

const Division = () => {
  return <Text>Division</Text>;
};

const FriendSection = () => {
  return <Text>FriendSection</Text>;
};

const FriendList = () => {
  return(
    <View>
      <Profile name="민지"url="https://shop.peopet.co.kr/data/goods/388/2022/06/_temp_16557127733930view.jpg"profileSize={30}/>
      <Profile name="지수"url="https://shop.peopet.co.kr/data/goods/388/2022/06/_temp_16557127733930view.jpg"profileSize={30}/>
      <Profile name="현서"url="https://shop.peopet.co.kr/data/goods/388/2022/06/_temp_16557127733930view.jpg"profileSize={30}/>
      <Profile name="지연"url="https://shop.peopet.co.kr/data/goods/388/2022/06/_temp_16557127733930view.jpg"profileSize={30}/>
      <Profile name="수빈"url="https://shop.peopet.co.kr/data/goods/388/2022/06/_temp_16557127733930view.jpg"profileSize={30}/>

    </View>
  );
};

// 함수형 컴포넌트
// const Profile = (props) => {
//   return (
//     <View style={{flexDirection: "row"}}>
//       <Image 
//       source={{ 
//         url: props.url,
//         }} 
//       style={{
//         width:props.profileSize,
//         height:props.profileSize,
//       }}
//       />
//       <Text>{props.name}</Text>
//     </View>
//   );
// };


// 클래스형 컴포넌트
class Profile extends React.Component {
  render() {
    return (
      <View style={{flexDirection: "row"}}>
            <Image 
            source={{ 
              url: this.props.url,
              }} 
            style={{
              width:this.props.profileSize,
              height:this.props.profileSize,
            }}
            />
            <Text>{this.props.name}</Text>
          </View>
    );
  }
}


export default function App()  {
  return (
    <View style={styles.container}>
      <Header title = "친구"></Header>
      <MyProfile></MyProfile>
      <Division></Division>
      <FriendSection></FriendSection>
      <FriendList></FriendList>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 