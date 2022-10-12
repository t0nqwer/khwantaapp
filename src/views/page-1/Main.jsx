function Main() {
  const final = [];
  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Page 1</h2>
      </div>
      <div>
        456
        {final.map((e) => {
          console.log(e.detail);
          return (
            <div key={e.name}>
              {e.name}
              {e.detail.map((e) => {
                return <div>{e}</div>;
              })}
              {e.value.map((e) => {
                return <div>{e}</div>;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Main;
