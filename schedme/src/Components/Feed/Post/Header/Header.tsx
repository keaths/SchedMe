export const Header: React.FC<{}> = (props) => {
    return (
        <div className="d-flex w-100 rounded-top-4" style={{backgroundColor:"rgb(223, 223, 223)"}}>
            <div className="w-50">
                <div className="d-flex justify-content-start align-items-center h-100 w-50  ">
                    <div className="shadow d-flex bg-success ms-2 me-1" style={{ borderRadius: "50%", height: "80px", width: "80px" }}></div>
                    <div>@usernmame</div>
                </div>
            </div>
            <div className="w-50 h-100">
                <div className="d-flex justify-content-end me-1 ms-auto w-25  ">01/01/1999 23:00:00</div>
                <div className="d-flex justify-content-end me-1 ms-auto w-50  ">Some Location, Some Country</div>
                <div className="d-flex justify-content-end me-1 ms-auto w-50  ">Group Schedule</div>
            </div>
        </div>
    )
}
export default Header;