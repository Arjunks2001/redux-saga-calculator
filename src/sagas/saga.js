import { all, put  } from "redux-saga/effects";
export const SET_INPUT1='SET_INPUT1';
export const SET_INPUT2='SET_INPUT2';
export const CALCULATERESULT='CALCULATERESULT'
export const SETOPERATOR='SETOPERATOR'

export const SETACTIVEINPUT='SETACTIVEINPUT'
 

 export function* setinput1(value){
    yield put  ({

            type:SET_INPUT1,  
            payload: value 
        
    })
 
}

export function* setinput2(value){
    yield put({
           type:SET_INPUT2,  
           payload: value 
       })
   }

   export function* setOperator(operator){
    yield put({
           type:SETOPERATOR,  
           payload: operator 
       })
   }

   export function* calculateresult(){
    yield put({
           type:SETOPERATOR,  
          
       })
   }

   export function* setActiveInput(input){
    yield put({
        type:SETACTIVEINPUT,
        payload:input,
         
          
       })
   }

export default function* rootSaga(){
    yield all([
        setinput1(),
        setinput2(),
        setOperator(),
        calculateresult(),
        setActiveInput()

    ])
}


 

 
