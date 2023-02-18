function SavingUserValue(value){
    const userValueSorage=[] // array 순서가 문제의 순서임.
    userValueSorage.push(value);
    console.log(userValueSorage);
    return(
        userValueSorage
    )
}

export default SavingUserValue;

// 데이터를 비동기로 주는 게 더 빠르지 않을까???