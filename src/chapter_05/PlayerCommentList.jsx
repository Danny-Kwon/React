import React from "react";
import Comment from "./PlayerComment";

const comments =[
    {
        name: "이대호",
        comment: "1982년 6월 21일생.",
        imgs: "https://w.namu.la/s/240ac668582bde903e6b7a1c43e8658ffbbc0142309e531493990cdc30b9913187f43d8fd91e3d9ad3067ba4401cebf69756f8d07bf4d31c018a1f1c571ee52f11ec8e568699654f4918c8605775a4c157787d6b99ddf21d28034a5dc2b2b6b4",
    },
    {
        name: "전준우",
        comment: "1986년 2월 25일생.",
        imgs: "https://w.namu.la/s/60a3031bb827f2a59a8eed7c97e6e8a4a250d7ff83c93f22432d9679f4b2518f5c575f40968fc879b1294dc1db2547f655f949f74258181b2ba024ecd6c940373d5a10ccf05691425aaf37d46bc81a1aba3178959639adae2ec863aff52d9164",
    },
    {
        name: "박세웅",
        comment: "1995년 11월 30일생.",
        imgs: "https://w.namu.la/s/d392ed51c77a8981f878d74e36472b54a41627e71e6ae54753c863b8c6de571911011bf6d64c995b0a4ff239e1029dce4db752f1b194d8a966b92f77ca69c3a9641aa08159035dcda217d5155994a49656f10942161ae4b4a96d40d0bd378737",
    },
];

function PlayerCommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} src={comment.imgs}/>
                )
            })}
        </div>
    );
}

export default PlayerCommentList;