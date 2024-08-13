import CarData from './CarData';
import Apple from './Apple';

export default function Car(){
    const carInfo = { Brand:"ferrari",Color:"Black"};
    const carSpec = {engine:"high CC"};
    const appleInfo = {type:"fuji", color: "red"};
    const carList = [
        {Brand:"Toyota",Color:"White"},
        {Brand:"Honda",Color:"Silver"},
        {Brand:"Tesla",Color:"Black"},
    ];
    const numbers = [1,2,3,4,4,5,6,6];

    return(
        <>
        <CarData carInfo = {carInfo} carSpec={carSpec}/>
        <Apple appleInfo = {appleInfo} />
        <h1>Car List</h1>
        <ul>
            {carList.map(
            (carDetails) => <li key={carDetails.Brand}>
                <CarData carInfo = {carDetails}/>
            </li>)}
        </ul>
        <ul>
            {numbers.map((e,ind)=><li key={ind}>{e} {ind}</li>)}
        </ul>
        </>
    );
}



//Conditional Rendering --------------------------------->

// export default function Car(){
//     const CarInfo = { Brand:"ferrari",Color:"Black"};
//     const CarSpec = {engine:"high CC"};
//     const appleInfo = {type:"fuji", color: "red"};

//     const isShow  = CarInfo.Brand!==undefined && CarInfo.Color !== undefined? true:false;

//     return(
//         <>
//         {/* {isShow ? <CarData carInfo = {CarInfo} carSpec={CarSpec}/> : null} */}
//         {isShow  &&  <CarData carInfo = {CarInfo} carSpec={CarSpec}/>}
//         </>
//     );
// }

//-------------------------------------------------------->
