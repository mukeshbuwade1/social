import { Dimensions,} from 'react-native';

export const { width, height } = Dimensions.get("window");

export const __isValidEmail =(val)=>{
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(val)
}