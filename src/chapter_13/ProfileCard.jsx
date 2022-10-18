import React from "react";
import Card from "./Card";
import "../index.css";

function ProfileCard(props) {
    return(
        <div>
            <Card title="Lee" backgroundColor="lightgreen" img="https://w.namu.la/s/240ac668582bde903e6b7a1c43e8658ffbbc0142309e531493990cdc30b9913187f43d8fd91e3d9ad3067ba4401cebf69756f8d07bf4d31c018a1f1c571ee52f439a3461690526a21b1700b4ebe4e4e07cad3ada23901cde8ad4b9108b5e0fd3">
                <p>이대호</p>
                <p>포지션: 1루수</p>
            </Card>
            <Card title="Kim" backgroundColor="blue" img="https://w.namu.la/s/b17a9ba29269c149bef43be0f841f65fcf9995e17dc2a805e9324e529f1936e392cda7f7a0df904940833ba01f9a06bf43f0d76e8af88509c059d58057e8517c03e242f6973784b9bc5be2ffb2819ab5a846c74f8f7d6423cba7e97d940369f1">
                <p>김원중</p>
                <p>포지션: 마무리투수</p>
            </Card>
            <Card title="Park" backgroundColor="red" img="https://w.namu.la/s/d392ed51c77a8981f878d74e36472b54a41627e71e6ae54753c863b8c6de571911011bf6d64c995b0a4ff239e1029dce4db752f1b194d8a966b92f77ca69c3a9879792a5690a51452e7395ad84644fc9ffd3d48e48d8bc04aea56979b0016a8a">
                <p>박세웅</p>
                <p>포지션: 선발투수</p>
            </Card>
            <Card title="Han" backgroundColor="yellow" img="https://w.namu.la/s/9261f0234939b2dbc85c36c14d1920896f86eb7198133c625c5113204576f1dd3fe2e17dbff680c12b9e6e0972d0eaa4e2bfb1901241466945823a6e5eccf103062878617a8ac666063b6efcbbac6a244b3cb042e6144d9fc376eabf08679bb1">
                <p>한동희</p>
                <p>포지션: 3루수</p>
            </Card>
            <Card title="Seo" backgroundColor="orange" img="https://w.namu.la/s/70def1c383095579f0e4096e6dd612193f775fe145f01721a8428648dbb556acf7626e920d4e4982090634e62f6bef0c26534e9c84e92cb113c879ae274d393175f095cf51b2f13cfc73d50129c66e694dee940068048265c3902393d087e751">
                <p>서준원</p>
                <p>포지션: 선발투수</p>
            </Card>
        </div>
        
    );
}

export default ProfileCard;