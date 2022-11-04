import "./CardInfo.scss";

const CardInfo = ({ pokemon }) => {
  return (
    <div className="cardInfo">
      <ul className="bodyFeatures">
        <li>
          <h3>Height</h3>
          <p>{pokemon.height}</p>
        </li>
        <li>
          <h3>Weight</h3>
          <p>{pokemon.weight}</p>
        </li>
        <li>
          <h3>Name</h3>
          <p>{pokemon.name}</p>
        </li>
      </ul>
      <ul className="stats">
        {pokemon.stats.map((i) => {
          if (
            i.stat.name !== "special-attack" &&
            i.stat.name !== "special-defense"
          ) {
            return (
              <>
                <li className="statsInfos">
                  <h2>{i.stat.name}</h2>
                  <div className="successRateBar">
                    {i.base_stat > 60 ? (
                      <div
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, green , rgb(67, 218, 67))",
                          width: `${i.base_stat}%`,
                        }}
                        className="successRate"
                      >
                        {i.base_stat}%
                      </div>
                    ) : i.base_stat > 35 ? (
                      <div
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, yellow , rgb(253, 253, 138))",
                          boxShadow: `0 0 5px yellow`,
                          width: `${i.base_stat}%`,
                        }}
                        className="successRate"
                      >
                        {i.base_stat}%
                      </div>
                    ) : i.base_stat > 0 ? (
                      <div
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, red , rgb(250, 98, 98))",
                          width: `${i.base_stat}%`,
                        }}
                        className="successRate"
                      >
                        {i.base_stat}%
                      </div>
                    ) : (
                      false
                    )}
                  </div>
                </li>
              </>
            );
          } else {
            return false;
          }
        })}
      </ul>
      <ul className="abilities">
        {pokemon.abilities.map((i) => {
          return <li>{i.ability.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default CardInfo;
