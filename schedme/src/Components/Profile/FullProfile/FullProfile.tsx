import BackgroundPic from "./BackgroundPic/BackgroundPic";
import ProfilePic from "./ProfilePic/ProfilePic";
import ProfileSection from "./ProfileSection/ProfileSection";

export const FullProfile: React.FC<{}> = (props) => {
    return (
        <div className="container-fluid rounded-4 h-100 bg-light p-2 shadow bg-success" style={{ width: "90%" }}>
            <div className="d-flex position-relative" style={{ height: "60%" }}>
                <BackgroundPic />
                <ProfilePic />
            </div>
            <ProfileSection />
        </div>
    )
}

export default FullProfile;