export const Test1:React.FC<{}> = (props) => {
    return(
        <div className="mt-4 ms-4 rounded-4 shadow-sm" style={{width:"30%"}}>
            <div className="d-flex bg-info rounded-top-4" style={{ height: "25%", width: "100%" }}>
                <div className="d-flex align-items-center m-2 fw-bold" style={{ color: "rgba(0, 0, 0, 0.52)" }}>Other Metric:</div>
            </div>
            <div className="bg-light rounded-bottom-4" style={{height:"75%"}}>
                test
            </div>
        </div>
    )
}
export default Test1;