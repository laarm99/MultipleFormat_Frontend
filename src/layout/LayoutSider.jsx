import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import style from "../layout/styles/LayoutSider.module.css"
import logoHorizontal from "../assets/img/logo-horizontal-dark.png";
import logoSymbol from "../assets/img/logo-symbol-dark.png";

export default function LayoutSider({ moduleItems }) {    
    const [collapsed, setCollapsed] = useState(true);
    return (
        <>
            <Sider
            className={style.siderStyle}
                trigger={null}
                collapsible
                collapsed={collapsed}
                collapsedWidth={70}
                width={280}
                onMouseEnter={() => setCollapsed(false)}
                onMouseLeave={() => setCollapsed(true)}               
            >
                <div className={style.siderLogo}>
                    <img
                        src={collapsed ? logoSymbol : logoHorizontal}
                        alt="MultiFormat"
                        className={collapsed ? style.logoSymbol : style.logoHorizontal}
                    />
                </div>
                <div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        items={moduleItems}
                    />
                </div>
            </Sider>
        </>
    )
}