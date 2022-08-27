import React from "react";
import { Layout } from "antd";
import "./Footer.css";

const { Footer, Content } = Layout;

const Footer_ = () => {
  return (
    <>
      <div className="footer">
        <Layout style={{ marginTop: "650px", backgroundColor: "black" }}>
          <Footer>
            <Content>
              <h1 style={{ fontSize: "20px" }} align="center">
                Copyright &copy; {new Date().getFullYear()} BlockMall.
              </h1>
            </Content>
          </Footer>
        </Layout>
      </div>
    </>
  );
};

export default Footer_;
