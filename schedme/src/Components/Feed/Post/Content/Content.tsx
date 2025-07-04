export const Content: React.FC<{}> = (props) => {
    return (
        <div className="bg-light ps-5 pe-5 pb-2 w-100">
            <div className="d-flex justify-content-center">*picture*</div>
            <div className="d-flex text-start" style={{ fontSize: "14px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quis error neque officiis cum alias maiores molestias. Veritatis, quae. Harum inventore explicabo molestiae. Laborum quos nulla amet sequi delectus odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptates, porro ratione fugiat, possimus consequatur molestias doloribus, blanditiis perspiciatis nostrum inventore ipsum animi tempore tempora dolore sint esse. Saepe, aliquam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae totam fuga, tempore similique ipsa deserunt quas quis maiores libero sed fugit magnam quisquam beatae aut ut, sit commodi quae voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde impedit debitis mollitia nulla quis nihil error hic quod laudantium! Provident, autem ea sit hic nam magni quibusdam suscipit quos?</div>
            <div className="d-inline-flex w-100">
                <div className="d-flex mt-3" style={{ width: "calc(100% / 7)", color:"rgba(0, 0, 0, 0.5)" }}><i className="me-2 bi bi-hand-thumbs-up"></i>9,999 likes</div>
                <div className="d-flex mt-3" style={{ width: "calc(100% / 7)", color:"rgba(0, 0, 0, 0.5)" }}><i className="me-2 EWbi bi-chat-dots"></i>9,999 likes</div>

            </div>
        </div>
    )
}
export default Content;