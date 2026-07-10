function StatCard( { label, value }) {

     
    return(


        <div style={ {
            border: "5px solid #e63131",
            borderRadius: "100px",
            padding: "5rem",
            marginBottom: "0.5rem",
            margin: "13px"
           
        } }>
            <h3 style={ {margin: 0} }>{label}</h3>
            <p style={ {margin: "0.5rem 0.0", fontSize: "1.2rem"} } >{value}</p>
        </div>
    );
}

export default StatCard;