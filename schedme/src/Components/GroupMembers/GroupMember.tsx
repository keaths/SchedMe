import Member from "./Member/Member";

export const GroupMembers: React.FC<{}> = (props) => {
    return (
        <div className="mt-4 rounded-4 shadow-sm" style={{ height: "30%", width:"40%" }}>
            <div className="d-flex bg-info rounded-top-4" style={{ height: "25%", width: "100%" }}>
                <div className="d-flex align-items-center m-2 fw-bold" style={{ color: "rgba(0, 0, 0, 0.52)" }}>Group Members:</div>
            </div>
            <div className="bg-light rounded-bottom-4" style={{ height: "75%", width: "100%" }}>
                <div className="w-100" style={{ height: "calc(100% / 3)" }}>
                    {(() => {
                        const stuff = [];
                        for (let i = 0; i < 8; i++) {
                            stuff.push(<Member />);
                        }
                        return stuff;
                    })()}
                </div>
                <div className="w-100" style={{ height: "calc(100% / 3)" }}>
                    {(() => {
                        const stuff = [];
                        for (let i = 0; i < 8; i++) {
                            stuff.push(<Member />);
                        }
                        return stuff;
                    })()}
                </div>
                <div className="w-100 rounded-bottom-4" style={{ height: "calc(100% / 3)" }}>
                    {(() => {
                        const stuff = [];
                        for (let i = 0; i < 8; i++) {
                            stuff.push(<Member />);
                        }
                        return stuff;
                    })()}
                </div>
            </div>
        </div>
    )
}
export default GroupMembers;