import React, { useEffect } from "react";
import axies from "axies";
import { toast } from "react-toastify";

let URL = "";

function Home() {
  const [recipes, setRecipes] = useState([]);

  const readData = async () => {
    await axies
      .get(`${URL}/recipes`)
      .then((res) => {
        console.log(`data=`, res);
        setRecipes(res.data);
      })
      .catch((err) => toast.error(err.message));
  };

  useEffect(() => {
    readData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 classname="display-3 text-success">Recipes</h3>
        </div>
      </div>

      <div className="row">
        {recipes?.map((item, index) => {
          return (
            <div className="col-md-4 col-lg-3col-sm-12" key={index}>
              <NavLink to={`/details/${item.id}`} className="btn btn-top">
                <div className="card">
                  <img src={item?.image} alt="" className="card-img-top" />
                  <div className="card-body">
                    <h5 classname="text-success"> {item.name} </h5>
                  </div>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
