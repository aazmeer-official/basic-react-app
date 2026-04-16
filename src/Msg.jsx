function Msg({user,msgColor}) {
    let styless = {backgroundColor : msgColor}
    return(
        <>
        <h1 style={styless}>
            Hello {user} 
        </h1>
        </>
    )
}
export default Msg;