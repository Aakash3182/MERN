import React from 'react'

function Products() {
    // context consumer
    let context = useContext(AppContext)
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">
                        Products
                    </h3>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-12">
                    <h1> x = { context.x }</h1>
                    <h1> y = { context.y }</h1>
                    <h1> title = { context.title }</h1>
                    

                    <hr />

                    <ul className="list-group">
                        {
                            context.users.map((items,index) => {
                                return (
                                    <li className="list-group-item" key={index}>
                                        <h4> { items.id } { items.name } { items.city } </h4>
                                        <p>Email = { items.email }</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>

       
    )
}

export default Products