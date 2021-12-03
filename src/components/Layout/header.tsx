type HeaderProps = {
  backgroundColor?: string;
  hasLogo: boolean;
  title: string;
};

const Header = ({ hasLogo, title }: HeaderProps) => {
  return (
    <div>
      This is header!
      {hasLogo && <span>LOGO</span>}
    </div>
  );
};

export default Header;
