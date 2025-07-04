export const ProfileSection: React.FC<{}> = (props) => {
    return (
        <div className="container-fluid" style={{ height: "35%", width: "100%" }}>
            <div className="d-flex justify-content-start ps-4 pe-4" style={{ height: "100%", width: "100%" }}>
                <div style={{width:"85%"}}>
                    <div className="w-100 h-100">
                        <div className="  w-100" style={{height:"35%"}}>
                            <div className="d-flex justify-content-start fw-bold" style={{fontSize:"40px"}}>First Last</div>
                            <div className="d-flex justify-content-start">@username</div>
                        </div>
                        <div className="w-100" style={{height:"70%"}}>
                            <div className="text-start mb-3" style={{height:"50%"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur qui ullam aperiam temporibus quae! Illum culpa doloremque earum voluptate blanditiis consequuntur nemo dolores rerum saepe tempore asperiores adipisci, omnis cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum voluptatibus libero magni quidem iste excepturi amet porro. Modi corporis voluptate perspiciatis a accusantium ipsam reiciendis, fugit officia consectetur magnam?</div>
                            <div className="text-start d-flex" style={{height:"15%"}}>
                                <div className=" " style={{width:"calc(100% / 4)"}}><i className="bi bi-geo-alt me-2"></i>Some city, Some State</div>
                                <div className=" " style={{width:"calc(100% / 4)"}}><i className="bi bi-link-45deg me-2"></i>fakeWebsiteForShow.com</div>
                                <div className=" " style={{width:"calc(100% / 4)"}}><i className="bi bi-calendar3 me-2"></i>Joined 01/01/1999</div>
                            </div>
                            <div className="text-start d-flex" style={{height:"15%"}}>
                                <div className=" " style={{width:"calc(100% / 4)"}}>9,999 Following</div>
                                <div className=" " style={{width:"calc(100% / 4)"}}>9,999 Followers</div>
                            </div>
                            <div className="d-flex justify-content-center align-items-end" style={{height:"20%"}}>
                                <div style={{width:"calc(100% / 5)"}}>Action 1</div>
                                <div style={{width:"calc(100% / 5)"}}>Action 2</div>
                                <div style={{width:"calc(100% / 5)"}}>Action 3</div>
                            </div>
                        </div>
                    </div>
                    

                </div>
                <div className="bg-info" style={{width:"20%"}}>
                    sdf
                </div>
            </div>
            

        </div>
    )
}
export default ProfileSection;