const ErrorPage = () => {
  return (
    <div className="flex h-screen  flex-col items-center justify-center ">
      <div className="bg-blue-100 border border-blue-400 text-black px-4 py-3 rounded relative">
        <h1 className="text-5xl font-bold">Error 404</h1>
        <p className="text-xl">Page not found</p>
        <p className="text-lg">Please check the URL and try again</p>
      </div>
    </div>
  );
};
export default ErrorPage;
