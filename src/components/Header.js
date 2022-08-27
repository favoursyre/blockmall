import { PageHeader, Button, Input, Space, Badge } from "antd";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import "./Header.css";
import { locateClient } from "./Location.js";
import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";

const { Search } = Input;
const categories = [
  "Books",
  "Electronics",
  "Furnitures",
  "Fashion",
  "Provisions",
  "Cosmetics",
];
var country_code;
async function get_code() {
  country_code = await locateClient();
  console.log("header__", country_code);
}
get_code();
const flag_url = "https://countryflagsapi.com/png/ng";
const BlockMall =
  "https://drive.google.com/uc?export=download&id=1sDCoxmiZe3hhAfuTQc9nLbhz33fnEm4S";

const Header = () => {
  const { authenticate, account } = useMoralis();
  return (
    <div className="site-page-header-ghost-wrapper">
      <div className="main-header">
        <PageHeader
          ghost={true}
          extra={[
            <>
              <a href="/">
                <img src={BlockMall} className="logo" alt="icon"></img>
              </a>
              <Search
                placeholder="What do you want to buy?"
                enterButton
                className="searchBar"
              />
              <Button
                className="login"
                key="1"
                type="primary"
                onClick={() => authenticate()}
              >
                {account ? (
                  <span>{account.slice(0, 5)}...</span>
                ) : (
                  <span>login</span>
                )}
              </Button>
              <Space size={"large"}>
                <Badge count={0} showZero>
                  <span className="header-buttons">
                    <ShoppingCartOutlined className="header-icon" />
                    Cart
                  </span>
                </Badge>
                {/* <Space className="header-buttons" size={"small"}>
                  <img src={flag_url} alt="region" className="flag"></img>▾
                </Space> */}
              </Space>
            </>,
          ]}
        ></PageHeader>
      </div>
      <div className="site-page-subheader-ghost-wrapper">
        <Space size={"middle"}>
          <Space size={"small"} style={{ fontWeight: "bold" }}>
            <MenuOutlined />
            Categories
          </Space>
          {categories.map((e) => {
            return (
              <Link to="/categories" state={e} className="categories">
                {e}
              </Link>
            );
          })}
        </Space>
      </div>
    </div>
  );
};

export default Header;
