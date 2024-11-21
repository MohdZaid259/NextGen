const LoadingLine = () => {
  return (
    <div className="h-1 w-full ">
      <div
        className="h-full bg-emerald-500"
        style={{
          animation: 'loading-line-animation 20s linear infinite',
        }}
      ></div>
    </div>
  );
};

export default LoadingLine;