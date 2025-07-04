export const Header: React.FC<{}> = (props) => {
    return (
        <div className="d-inline-flex bg-light w-100 p-3 rounded-top-4" style={{ height: "20%"}}>
            <div className="text-start w-50 h-100 ms-4">
                <div className="d-flex align-items-center h-50 fw-bold" style={{color:"rgba(0, 0, 0, 0.52)"}}>
                    <div>This Week's Schedules</div>
                </div>
                <div className="d-flex h-50" style={{fontSize:"13px"}}>01/01/2000 - 01/08/2000</div>
            </div>
            <div className="d-inline-flex text-start w-50 h-100 ">
                <div className="d-flex w-100 justify-content-end me-5">
                    <div className="d-inline-flex align-items-center p-2 fw-bold" style={{color:"rgba(0, 0, 0, 0.44)"}}>Cycling Group:</div>
                    <div className="d-inline-flex position-relative" style={{ height: "60px", width: "60px" }}>
                        <div className="position-absolute bottom-0 end-0 dropdown">
                            <button className="bg-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{borderRadius:"50%", border:"none", width:"20px", height:"20px"}}/>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Group 1</a></li>
                                <li><a className="dropdown-item" href="#">Group 2</a></li>
                                <li><a className="dropdown-item" href="#">Group 3</a></li>
                            </ul>
                        </div>
                        <div className="bg-success h-100 w-100" style={{ borderRadius: "50%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;