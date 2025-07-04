import Navbar from "../SideNav/SideNav";
import TimeTable from "../TimeTable/TimeTable";
import Day from "../TimeTable/Metric/Metric";
import Scheds from "../TimeTable/Scheds/Scheds";
import Times from "../TimeTable/Times/Times";
import GroupMembers from "../GroupMembers/GroupMember";
import Test1 from "./Test1";

export const HomePage = () => {

    const days = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return (
        <div className="container-fluid p-0">
            <div className="p-0 align-items-center p-5" style={{ height: "100vh", backgroundColor: "rgb(221, 221, 221)" }}>
                <TimeTable metric={days} width={4} />
                <div className="d-inline-flex w-100">
                    <GroupMembers />
                    <Test1 />
                    <Test1 />
                </div>

            </div>

        </div>

    );
}