export const ReactionJoin: React.FC<{}> = (props) => {
    return (
        <div className="rounded-bottom-4" style={{ height: "40px", backgroundColor:"rgb(223, 223, 223)"}}>
            <div className="d-flex justify-content-center w-100 h-100">
                <div className="d-flex align-items-center justify-content-center h-100 reaction-button">Like</div>
                <div className="d-flex align-items-center justify-content-center h-100 reaction-button">Comment</div>
                <div className="d-flex align-items-center justify-content-center h-100 reaction-button">Join</div>
            </div>
        </div>
    )
}
export default ReactionJoin;