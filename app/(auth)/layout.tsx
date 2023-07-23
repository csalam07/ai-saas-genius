const AuthLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="flex items-center justify-center h-full">{children}</div>
  );
};
export default AuthLayout;
