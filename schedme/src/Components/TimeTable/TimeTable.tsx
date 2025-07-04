import Times from "./Times/Times";
import Day, { Metric } from "./Metric/Metric";
import Header from "./Header/Header";

export const TimeTable: React.FC<{ metric: String[], width: number }> = (props) => {
    return (
        <div className="container-fluid w-100 p-0 mt-3" style={{ height: "65%" }}>
            <Header/>
            <div className="w-100 p-0 bg-light rounded-bottom-4 p-2 shadow-sm" style={{height:"80%"}}>
                <div className="w-100 h-100 p-0 position-relative">
                    <Times width={6.7} />
                    {(() => {
                        const stuff = [];
                        for (let i = 0; i < props.metric.length; i++) {
                            stuff.push(<Metric metric={props.metric[i]}/>);
                        }
                        return stuff;
                    })()}
                </div>
            </div>
        </div>
    );
}

export default TimeTable;