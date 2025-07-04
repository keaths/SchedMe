import Times, { Scheds } from "../Scheds/Scheds";

export const Metric:React.FC<{metric: String}> = (props) => {
    return (
        <div className="d-inline-flex w-100" style={{ height: "calc(100% / 7)" }}>
            <div className="d-flex justify-content-center align-items-center" style={{width:"6%", color:"rgba(0, 0, 0, 0.68)"}}>{props.metric}</div>
            <Scheds/>
        </div>
    );
}
export default Metric;