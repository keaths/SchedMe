export const BackgroundPic: React.FC<{}> = (props) => {
    return (
        <div className="position-absolute h-100 w-100">
            <div className="d-flex rounded-top-4 bg-danger justify-content-center align-items-center h-75">background</div>
            <div className="d-flex align-items-start h-25 w-100">
                <div className="ms-auto d-flex w-50 h-100">
                    <div className="d-flex ms-auto " style={{ width: "40%" }}>
                        <div className="w-50 bg-info rounded-4 h-25 m-2">test</div>
                        <div className="w-50 bg-info rounded-4 h-25 m-2">test</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BackgroundPic;