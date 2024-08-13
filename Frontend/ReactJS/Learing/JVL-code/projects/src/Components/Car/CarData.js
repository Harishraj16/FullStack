//Functoional Component ------------------------------>

// function CarData(props){
//     const carInfo = props.carInfo;
//     const carSpec = props.carSpec;
//     // const {Brand,Color} = carInfo;
//     return(
//         <h1>I'm a {carInfo.Color} {carInfo.Brand} car with <br/>{carSpec.engine} engine!</h1>
//     );
// }

function CarData(props){
    const {carInfo} = props;
    // const {carSpec} = props;
    const {Brand,Color} = carInfo;
    // const {engine} = carSpec;
    return(
        // <h1>I'm a {Color} {Brand} car with <br/>{engine} engine!</h1>
        <h1>I'm a {Color} {Brand} car!</h1>
    );
}

export default CarData;