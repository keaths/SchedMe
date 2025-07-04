export const Times: React.FC<{ width: number }> = (props) => {
    return (
        <div className="d-inline-flex position-absolute" style={{ width: "96%", height: "98.5%" }}>
            <div className="d-inline-flex" style={{ width: `${props.width}%` }}></div>
            {(() => {
                const times = [];
                for (let i = 0; i < 24; i++) {
                    times.push(<div className="d-flex justify-content-end h-100" style={{ width: "calc(100% / 24)", borderRightStyle: "dashed", borderWidth: "2px", borderColor:"rgba(0, 0, 0, 0.11)" }}>
                        <div className="fw-bold" style={{color:"rgba(0, 0, 0, 0.34)", fontSize:"12px", height:"25px"}}>
                            {i < 10 ?
                                `0${i}:00`
                                :
                                `${i}:00`}
                        </div>
                    </div>
                    );
                }
                return times;
            })()}
            
        </div>
    );
}
export default Times;