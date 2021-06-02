import React from "react";

import "./Header.css"

export default function Header ( { photo, heading, info } ) {
    return (
        <div className="div-header">
            <img src='https://downloader.disk.yandex.ru/preview/549c9786838b57cbbf7949c028103381c8fb844c9645d7d9a6f9d3286021a18c/60b7c75d/xI1G06dIuz2ge9mxgbUlh2WxG2mDSZRL_AAA5K3vxZj_38n-P_GKAwRaOkgTHh8maOPc0atW4rz-wJcJunTZ-Q%3D%3D?uid=0&filename=%D0%9A%D0%BE%D0%BD%D0%B2%D0%B5%D1%80%D1%82.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1920x942' alt="photo" className="img-in-header"/>
            <div className="div-content">
                <h1 className="h1-header">{heading}</h1>
                <p className="p-info-header">{info}</p>
            </div>
        </div>
    )
}