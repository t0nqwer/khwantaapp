import React, { useState, useEffect } from "react";
const FreeSize = (props) => {

  const [Data, setData] = useState([]);
  const sizeDetail = props.sizeDetail;
  const DataHandler = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    const Objdata = { name: "FREESIZE", id: e.target.id, data: e.target.value };

    if (~~e.target.value === 0) {
      document.getElementById(`${id}danger`).classList.remove("hidden");
      document.getElementById(`${id}`).classList.add("border-red-400");

      return;
    }
    document.getElementById(`${id}danger`).classList.add("hidden");
    document.getElementById(`${id}`).classList.remove("border-red-400");
    

    if (Data.length === 0) {
      setData([Objdata]);
      return;
    }
    let found = false;
    for (let i = 0; Data.length > i; i++) {
      if (Data[i].id === id) {
        found = true;
        break;
      }
    }

    if (!found) {
      const addData = Data;
      addData.push(Objdata);
      const finalData = addData.filter((data) => sizeDetail.includes(data.id));
      setData(finalData);
      return;
    }

  

    const updatedata = Data.map((data) => {
      if (data.id === id) {
        return (data = Objdata);
      }
      return data;
    });
    const finaldata = updatedata.filter((data) => sizeDetail.includes(data.id));

    setData(finaldata);

  };

  useEffect(() => {
    props.OnFreesizeHandler(Data);
  }, [Data]);
  useEffect(() => {
    sizeDetail.map((e) => {
      document.getElementById(e).value = "";
      props.OnFreesizeHandler([]);
    });
  }, [sizeDetail]);
  useEffect(() => {

    sizeDetail.map((e) => {
      if (!props.IsFREEactive) document.getElementById(`${e}`).value = "";
    });
  }, [props.IsFREEactive]);

  return (
    <div>
      <div className="form-inline flex-col xl:flex-row mt-2 pt-2 first:mt-0 first:pt-0">
        <div className="form-label xl:w-32 xl:!mr-10">
          <div className="flex text-center">
            <span className="form-control shadow-none">FREESIZE</span>
          </div>
        </div>

        <div className="w-full mt-3 xl:mt-0 flex-1">
          <div className="relative pl-5 pr-5 xl:pr-10 py-5 bg-slate-50 dark:bg-transparent dark:border rounded-md">
            <div>
              {sizeDetail.length !== props.SizeDeCount.length
                ? ""
                :props.SizeDeCount.map((i) => {
                return (
                  <div key={i} className="sm:flex  items-center mt-5  first:mt-0">
                    <label htmlFor="horizontal-form-1 " className="sm:w-30 text-center w-28 mr-0">
                      {sizeDetail[i - 1]}
                    </label>
                    <input
                      id={sizeDetail[i - 1]}
                      type="text"
                      className="form-control "
                      placeholder="36.00"
                      onChange={DataHandler}
                    />
                    <span id={`${sizeDetail[i - 1]}danger`} className={`text-danger ml-3 hidden`}>
                      โปรดใส่แค่ตัวเลข
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeSize;
