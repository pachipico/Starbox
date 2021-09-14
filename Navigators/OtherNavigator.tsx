import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {OtherNavigatorParamList} from '../types';
import OtherScreen from '../Views/OtherScreen/OtherScreen';
import Setting from '../Views/OtherScreen/SubScreens/Setting';
import Reward from '../Views/OtherScreen/SubScreens/SubScreens/OtherSubScreen/Reward';
import Coupon from '../Views/OtherScreen/SubScreens/SubScreens/OtherSubScreen/Coupon';
import GiftCard from '../Views/OtherScreen/SubScreens/SubScreens/OtherSubScreen/GiftCard';
import New from '../Views/OtherScreen/SubScreens/SubScreens/OtherSubScreen/New';
import Notifications from '../Views/OtherScreen/SubScreens/SubScreens/OtherSubScreen/Notifications';
import History from '../Views/OtherScreen/SubScreens/SubScreens/OtherSubScreen/History';
import Receipt from '../Views/OtherScreen/SubScreens/SubScreens/OtherSubScreen/Receipt';
import Review from '../Views/OtherScreen/SubScreens/SubScreens/OtherSubScreen/Review';
import StoreCare from '../Views/OtherScreen/SubScreens/SubScreens/OtherSubScreen/StoreCare';
import Customer from '../Views/OtherScreen/SubScreens/SubScreens/OtherSubScreen/Customer';
import Info from '../Views/OtherScreen/SubScreens/SubScreens/OtherSubScreen/Info';
import Policy from '../Views/OtherScreen/SubScreens/SubScreens/OtherSubScreen/Policy';
import PersonalInfo from '../Views/OtherScreen/SubScreens/SubScreens/OtherSubScreen/PersonalInfo';
import NickName from '../Views/OtherScreen/SubScreens/SubScreens/SettingSubScreens/NickName';
import PersonalReward from '../Views/OtherScreen/SubScreens/SubScreens/SettingSubScreens/PersonalReward';
import Dt from '../Views/OtherScreen/SubScreens/SubScreens/SettingSubScreens/Dt';
import Services from '../Views/OtherScreen/SubScreens/SubScreens/SettingSubScreens/Services';
import Emploee from '../Views/OtherScreen/SubScreens/SubScreens/SettingSubScreens/Emploee';
import PushNotification from '../Views/OtherScreen/SubScreens/SubScreens/SettingSubScreens/PushNotification';
import GpsService from '../Views/OtherScreen/SubScreens/SubScreens/SettingSubScreens/GpsService';
import ChangePassword from '../Views/OtherScreen/SubScreens/SubScreens/SettingSubScreens/ChangePassword';
import Version from '../Views/OtherScreen/SubScreens/SubScreens/SettingSubScreens/Version';

const Stack = createNativeStackNavigator<OtherNavigatorParamList>();

const OtherNavigator: React.FC = () => {
  const {Screen, Navigator} = Stack;
  return (
    <Navigator>
      <Screen
        name="OtherScreen"
        component={OtherScreen}
        options={{headerShown: false}}
      />
      <Screen
        name="Setting"
        component={Setting}
        options={{
          headerTitle: '설정',
          headerBackTitle: '',
          headerTintColor: 'black',
        }}
      />
      <Screen
        name="reward"
        component={Reward}
        options={{
          headerTitle: 'Starbucks Reward',
          headerBackTitle: '',
          headerTintColor: 'black',
        }}
      />

      <Screen
        name="coupon"
        component={Coupon}
        options={{
          headerTitle: 'coupon',
          headerBackTitle: '',
          headerTintColor: 'black',
        }}
      />
      <Screen
        name="giftCard"
        component={GiftCard}
        options={{
          headerTitle: 'gift card',
          headerBackTitle: '',
          headerTintColor: 'black',
        }}
      />

      <Screen
        name="new"
        component={New}
        options={{
          headerTitle: "What's New?",
          headerBackTitle: '',
          headerTintColor: 'black',
        }}
      />

      <Screen
        name="notifications"
        component={Notifications}
        options={{
          headerTitle: 'notifications',
          headerBackTitle: '',
          headerTintColor: 'black',
        }}
      />

      <Screen
        name="history"
        component={History}
        options={{
          headerTitle: 'history',
          headerBackTitle: '',
          headerTintColor: 'black',
        }}
      />

      <Screen
        name="receipt"
        component={Receipt}
        options={{
          headerTitle: 'receipt',
          headerBackTitle: '',
          headerTintColor: 'black',
        }}
      />

      <Screen
        name="review"
        component={Review}
        options={{
          headerTitle: 'review',
          headerBackTitle: '',
          headerTintColor: 'black',
        }}
      />

      <Screen
        name="storeCare"
        component={StoreCare}
        options={{
          headerTitle: 'store care',
          headerBackTitle: '',
          headerTintColor: 'black',
        }}
      />
      <Screen
        name="customer"
        component={Customer}
        options={{
          headerTitle: 'customer',
          headerBackTitle: '',
          headerTintColor: 'black',
        }}
      />
      <Screen
        name="info"
        component={Info}
        options={{
          headerTitle: 'information',
          headerBackTitle: '',
          headerTintColor: 'black',
        }}
      />
      <Screen
        name="policy"
        component={Policy}
        options={{
          headerTitle: 'policy',
          headerBackTitle: '',
          headerTintColor: 'black',
        }}
      />
      <Screen
        name="personalInfo"
        component={PersonalInfo}
        options={{
          headerTitle: 'personal info',
          headerBackTitle: '',
          headerTintColor: 'black',
        }}
      />
      {/* Setting Screen */}
      <Screen
        name="nickName"
        component={NickName}
        options={{
          headerTitle: '닉네임 변경',
          headerBackTitle: '',
          headerTintColor: 'black',
        }}
      />
      <Screen
        name="personalReward"
        component={PersonalReward}
        options={{
          headerTitle: 'Starbucks PersonalReward',
          headerBackTitle: '',
          headerTintColor: 'black',
        }}
      />
      <Screen
        name="dt"
        component={Dt}
        options={{
          headerTitle: 'My DT Pass',
          headerBackTitle: '',
          headerTintColor: 'black',
        }}
      />
      <Screen
        name="services"
        component={Services}
        options={{
          headerTitle: 'review',
          headerBackTitle: '',
          headerTintColor: 'black',
        }}
      />
      <Screen
        name="emploee"
        component={Emploee}
        options={{
          headerTitle: '임직원 번호 설정',
          headerBackTitle: '',
          headerTintColor: 'black',
        }}
      />
      <Screen
        name="pushNotification"
        component={PushNotification}
        options={{
          headerTitle: '푸쉬 알림 설정',
          headerBackTitle: '',
          headerTintColor: 'black',
        }}
      />
      <Screen
        name="gpsService"
        component={GpsService}
        options={{
          headerTitle: '위치 정보 서비스 이용약관 동의',
          headerBackTitle: '',
          headerTintColor: 'black',
        }}
      />
      <Screen
        name="changePassword"
        component={ChangePassword}
        options={{
          headerTitle: '비밀번호 변경',
          headerBackTitle: '',
          headerTintColor: 'black',
        }}
      />
      <Screen
        name="version"
        component={Version}
        options={{
          headerTitle: '버전 정보',
          headerBackTitle: '',
          headerTintColor: 'black',
        }}
      />
    </Navigator>
  );
};

export default OtherNavigator;
