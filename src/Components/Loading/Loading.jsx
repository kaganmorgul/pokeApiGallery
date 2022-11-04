import "./Loading.scss";

const Loading = () => {
  return (
    <div className="thirdAnimation">
      <div className="thirdLoading">
        <img
          src={process.env.PUBLIC_URL + "/pokeball.png"}
          alt=""
          className="thirdLoadingItem"
        />
        <img
          src={process.env.PUBLIC_URL + "/pokeball.png"}
          alt=""
          className="thirdLoadingItem"
        />
        <img
          src={process.env.PUBLIC_URL + "/pokeball.png"}
          alt=""
          className="thirdLoadingItem"
        />
      </div>
    </div>
  );
};

export default Loading;
