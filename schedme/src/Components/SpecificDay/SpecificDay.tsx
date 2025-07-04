import Navbar from "../SideNav/SideNav";
import TimeTable from "../TimeTable/TimeTable";

export const SpecificDay = () => {

    const users = ["1","2","3","4","5"];

    return (
        <div className="container-fluid">
            <div className="row">
                <Navbar />
                <div className="col bg-warning p-0 d-flex align-items-center p-5" style={{ height: "100vh" }}>
                    <TimeTable metric={users} width={6} />
                </div>
            </div>
        </div>
    );
}

export default SpecificDay;