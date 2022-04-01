import './Posts.css'

const Posts = ({state}) => {
    const {data, activeSlider, postData} = state
    
    return (
        <div className="posts">
            <h3 className='posts__title'>3 актуальных поста {data[activeSlider-1].name}</h3>
            {postData.map(item =>
                <div className="post">
                    <p className="post__title">{item.userId === activeSlider ? item.title : null}</p>
                    <p className="post__body">{item.userId === activeSlider ? item.body : null}</p>
                </div>
                )}
        </div>
    )
}

export default Posts;