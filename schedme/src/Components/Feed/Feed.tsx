import Navbar from "../SideNav/SideNav";
import Post from "./Post/Post";

export const Feed: React.FC<{}> = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Navbar />
                <div className="col p-0 align-items-center p-5" style={{ height: "100vh"}}>
                    <div className="container-fluid justify-content-start p-0" style={{ width: "100%" }}>
                        <div className="justify-content-center align-items-center bg-danger mb-5" style={{ height: "10%" }}>
                            test
                        </div>
                        <Post />
                        <Post />
                        <Post />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Feed;