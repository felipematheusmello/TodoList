import { PageHeader } from "antd";
import { StyledLink } from "./style_header";
const Header = () => {
  return (
    <PageHeader
      className="site-page-header"
      title="Todo List"
      subTitle="Organize your tasks"
    >
      <div>
        <StyledLink to="/">feed</StyledLink>
        <StyledLink to="/donetask">done tasks</StyledLink>
      </div>
    </PageHeader>
  );
};

export default Header;
